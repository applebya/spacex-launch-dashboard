import React from 'react';
import styled from 'styled-components';
import { Launches } from '../reducer';
import { ReactComponent as LinkSVG } from '../images/link.svg';

interface Props {
    isLoading: boolean;
    launches: Launches;
}

const Wrapper = styled.div``;
const Loading = styled.div``;
const Table = styled.table.attrs({
    cellSpacing: 0,
    cellPadding: 0
})`
    width: 100%;

    thead {
        tr {
            background-image: ${p =>
                `linear-gradient(to top, ${p.theme.color.highlight} 0%, ${p.theme.color.highlight} 23%, ${p.theme.color.highlight} 100%)`};
        }

        td {
            height: 49px;
            font-size: ${p => p.theme.fontSize.lg};
            color: ${p => p.theme.color.darkBlue};
        }
    }

    thead tr,
    tbody tr {
        td {
            padding: 0 21px;

            :first-child,
            :last-child {
                text-align: center;
            }
        }
    }

    tbody {
        tr {
            background: ${p => p.theme.color.whiteLayer};
            border-radius: ${p => p.theme.borderRadius};

            td {
                height: 65px;
                color: ${p => p.theme.color.darkGray};
                font-size: ${p => p.theme.fontSize.md};
            }
        }
    }
`;

const BadgeImage = styled.img`
    width: 40px;
    height: auto;
`;

const ArticleLink = styled.a`
    display: block;
    background: none;
    border: none;

    svg {
        width: 21px;
        height: 21px;
        fill: ${p => p.theme.color.icon};
    }
`;

const LaunchesTable: React.FC<Props> = ({ isLoading, launches }) => (
    <Wrapper>
        {console.log(launches)}
        {isLoading && <Loading>Loading...</Loading>}
        <Table>
            <thead>
                <tr>
                    <td>Badge</td>
                    <td>Rocket Name</td>
                    <td>Rocket Type</td>
                    <td>Launch Date</td>
                    <td>Details</td>
                    <td>ID</td>
                    <td>Article</td>
                </tr>
            </thead>
            <tbody>
                {launches.map(launch => (
                    <tr key={launch.mission_id.join(' ')}>
                        <td>
                            <BadgeImage
                                src={launch.links.mission_patch_small}
                            />
                        </td>
                        <td>{launch.rocket.rocket_name}</td>
                        <td>{launch.rocket.rocket_type}</td>
                        <td>{launch.launch_date_local}</td>
                        <td>{launch.details}</td>
                        <td>{launch.mission_id.join(' ')}</td>
                        <td>
                            <ArticleLink
                                href={launch.links.article_link}
                                target="_blank"
                            >
                                <LinkSVG />
                            </ArticleLink>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </Wrapper>
);

export default LaunchesTable;
