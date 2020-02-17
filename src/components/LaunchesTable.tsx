import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { Launches } from '../reducer';
import { ReactComponent as LinkIcon } from '../images/link.svg';
import placeholderPath from '../images/placeholder.png';

interface Props {
    isLoading: boolean;
    launches: Launches;
}

const Wrapper = styled.div``;

const Table = styled(({ isLoading, ...props }) => <table {...props} />).attrs({
    cellSpacing: 0,
    cellPadding: 0
})`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 21px;
    margin-top: -21px;

    opacity: 1;
    transition: opacity 0.5s ease;

    ${p =>
        p.isLoading &&
        `
        opacity: 0.5;
    `}

    thead tr,
    tbody tr {
        td {
            padding: 0 9px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow-x: hidden;
            max-width: 290px;
            min-width: 0;

            :first-child,
            :last-child {
                text-align: center;
            }

            :first-child {
                max-width: 50px;
                padding-left: 21px;
            }

            :last-child {
                padding-right: 21px;
            }
        }
    }

    thead {
        tr {
            background-color: ${p => p.theme.color.white};
            background-image: ${p => `linear-gradient(
                to top,
                rgba(0,0,0,0) 0%,
                rgba(0,0,0,0) 23%,
                ${p.theme.color.highlight} 100%
            )`};
        }

        td {
            height: 49px;
            font-size: ${p => p.theme.fontSize.lg};
            color: ${p => p.theme.color.darkBlue};
        }
    }

    tbody {
        tr {
            td {
                border-top: 1px solid ${p => p.theme.color.white};
                border-bottom: 1px solid ${p => p.theme.color.white};
                background: ${p => p.theme.color.whiteLayer};
                height: 65px;
                color: ${p => p.theme.color.darkGray};
                font-size: ${p => p.theme.fontSize.md};

                :first-child {
                    border-top-left-radius: ${p => p.theme.borderRadius};
                    border-bottom-left-radius: ${p => p.theme.borderRadius};
                }

                :last-child {
                    border-top-right-radius: ${p => p.theme.borderRadius};
                    border-bottom-right-radius: ${p => p.theme.borderRadius};
                }
            }
        }
    }
`;

const BadgeImage = styled.img`
    width: 33px;
    height: auto;
`;

const ArticleLink = styled.a`
    display: block;
    background: none;
    border: none;

    svg {
        width: 21px;
        height: 21px;

        path {
            fill: ${p => p.theme.color.lightBlue};
            transition: fill 0.1s ease;
        }
    }

    :hover svg path {
        fill: ${p => p.theme.color.darkBlue};
    }
`;

const LaunchesTable: React.FC<Props> = ({ isLoading, launches }) => (
    <Wrapper>
        {console.log(launches)}
        <Table isLoading={isLoading}>
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
                    <tr key={launch.flight_number}>
                        <td>
                            <BadgeImage
                                alt={`Flight ${launch.flight_number} Mission Patch`}
                                src={
                                    launch.links.mission_patch_small ||
                                    placeholderPath
                                }
                            />
                        </td>
                        <td>{launch.rocket.rocket_name}</td>
                        <td>{launch.rocket.rocket_type}</td>
                        <td>
                            {format(
                                new Date(launch.launch_date_local),
                                'yyyy-MM-dd'
                            )}
                        </td>
                        <td>{launch.details}</td>
                        <td>{launch.mission_id.join(' ') || 'X'}</td>
                        <td>
                            <ArticleLink
                                href={launch.links.article_link}
                                target="_blank"
                                title="View article in new window"
                            >
                                <LinkIcon />
                            </ArticleLink>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </Wrapper>
);

export default LaunchesTable;
