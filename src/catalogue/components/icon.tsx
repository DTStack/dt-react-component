import React from 'react';
import classNames from 'classnames';

interface IIcon {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

const FolderIcon = function ({ className, ...rest }: IIcon) {
    return (
        <span className={classNames('dt-catalogue__icon', className)} {...rest}>
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <g>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M32.1355 19.1579H52.4464C53.8565 19.1595 54.9991 20.3073 55.0007 21.7237V25.0281H8.00073V15.5658C8.00232 14.1494 9.14501 13.0016 10.5551 13H24.7355C25.4134 12.9981 26.0638 13.2687 26.5418 13.7515L31.7744 19.0075C31.8698 19.1042 31.9999 19.1583 32.1355 19.1579ZM8.00073 28.0281V49.4342C8.00232 50.8506 9.14501 51.9984 10.5551 52H52.4464C53.8565 51.9984 54.9991 50.8506 55.0007 49.4342V28.0281H8.00073Z"
                            fill="currentColor"
                        />
                    </g>
                </g>
            </svg>
        </span>
    );
};

const FolderOpenedIcon = function ({ className, ...rest }: IIcon) {
    return (
        <span className={classNames('dt-catalogue__icon', className)} {...rest}>
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <g>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.9214 28.719L8 43.0351V15.5658C8.0016 14.1494 9.15438 13.0016 10.5769 13H22.8211C23.5049 12.9981 24.1611 13.2687 24.6433 13.7515L29.9221 19.0075C30.0184 19.1042 30.1496 19.1583 30.2864 19.1579H48.7151C50.1377 19.1595 51.2905 20.3073 51.2921 21.7237V25.3158H16.3962C14.3057 25.3192 12.4747 26.7117 11.9214 28.719ZM56.4697 28.3768C55.9841 27.7389 55.2256 27.3654 54.4217 27.3684H16.3962C15.2344 27.3706 14.217 28.145 13.9101 29.2607L8.56885 48.7607C8.35812 49.532 8.52044 50.357 9.00787 50.9921C9.49529 51.6272 10.2521 51.9999 11.0549 52H49.0804C50.2422 51.9978 51.2596 51.2235 51.5665 50.1077L56.9078 30.6077C57.1215 29.8368 56.9591 29.0107 56.4694 28.3768H56.4697Z"
                            fill="currentColor"
                        />
                    </g>
                </g>
            </svg>
        </span>
    );
};

const DownTriangleIcon = function ({ className, ...rest }: IIcon) {
    return (
        <span className={classNames('dt-catalogue__icon', className)} {...rest}>
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 64 64"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M47.791 27.4819L33.0613 42.4125C32.3091 43.175 31.0812 43.1833 30.3187 42.431L15.8855 27.4661C15.1419 26.6951 15.1642 25.4674 15.9351 24.7238C16.2966 24.3752 16.7792 24.1804 17.2814 24.1804L46.4104 24.1804C47.4815 24.1804 48.3498 25.0487 48.3498 26.1198C48.3498 26.6296 48.1491 27.1189 47.791 27.4819Z"
                        fill="currentColor"
                    />
                </g>
            </svg>
        </span>
    );
};

const CatalogIcon = function ({ className, ...rest }: IIcon) {
    return (
        <span className={classNames('dt-catalogue__icon', className)} {...rest}>
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 64 64"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M52 8C54.2091 8 56 9.79086 56 12V52C56 54.2091 54.2091 56 52 56H12C9.79086 56 8 54.2091 8 52V12C8 9.79086 9.79086 8 12 8H52ZM45.7468 39.6385H28.0755C26.9741 39.6385 26.078 40.5355 26.078 41.6382C26.078 42.6907 26.8945 43.5558 27.9267 43.6323L28.0755 43.6378H45.7468C46.847 43.6378 47.7422 42.7408 47.7422 41.6382C47.7422 40.5857 46.9266 39.7205 45.8955 39.644L45.7468 39.6385ZM21.7673 39.6385H18.519C17.4187 39.6385 16.5235 40.5355 16.5235 41.6382C16.5235 42.6907 17.3391 43.5558 18.3703 43.6323L18.519 43.6378H21.7673C22.8688 43.6378 23.7649 42.7408 23.7649 41.6382C23.7649 40.5857 22.9484 39.7205 21.9162 39.644L21.7673 39.6385ZM45.7468 29.708H28.0755C26.9741 29.708 26.078 30.605 26.078 31.7076C26.078 32.7601 26.8945 33.6253 27.9267 33.7018L28.0755 33.7073H45.7468C46.847 33.7073 47.7422 32.8102 47.7422 31.7076C47.7422 30.6552 46.9266 29.79 45.8955 29.7135L45.7468 29.708ZM21.7673 29.708H18.519C17.4187 29.708 16.5235 30.605 16.5235 31.7076C16.5235 32.7601 17.3391 33.6253 18.3703 33.7018L18.519 33.7073H21.7673C22.8688 33.7073 23.7649 32.8102 23.7649 31.7076C23.7649 30.6552 22.9484 29.79 21.9162 29.7135L21.7673 29.708ZM45.7468 19.7774H28.0755C26.9741 19.7774 26.078 20.6744 26.078 21.7771C26.078 22.8296 26.8945 23.6948 27.9267 23.7712L28.0755 23.7767H45.7468C46.847 23.7767 47.7422 22.8797 47.7422 21.7771C47.7422 20.7246 46.9266 19.8594 45.8955 19.7829L45.7468 19.7774ZM21.7673 19.7774H18.519C17.4187 19.7774 16.5235 20.6744 16.5235 21.7771C16.5235 22.8296 17.3391 23.6948 18.3703 23.7712L18.519 23.7767H21.7673C22.8688 23.7767 23.7649 22.8797 23.7649 21.7771C23.7649 20.7246 22.9484 19.8594 21.9162 19.7829L21.7673 19.7774Z"
                        fill="currentColor"
                    />
                </g>
            </svg>
        </span>
    );
};

const PlusSquareIcon = function ({ className, ...rest }: IIcon) {
    return (
        <span className={classNames('dt-catalogue__icon', className)} {...rest}>
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.4001 2.6001C14.4001 2.04781 13.9524 1.6001 13.4001 1.6001H2.6001C2.04781 1.6001 1.6001 2.04781 1.6001 2.6001V13.4001C1.6001 13.9524 2.04781 14.4001 2.6001 14.4001H13.4001C13.9524 14.4001 14.4001 13.9524 14.4001 13.4001V2.6001ZM2.60002 2.40002H13.4C13.5105 2.40002 13.6 2.48957 13.6 2.60002V13.4C13.6 13.5105 13.5105 13.6 13.4 13.6H2.60002C2.48957 13.6 2.40002 13.5105 2.40002 13.4V2.60002C2.40002 2.48957 2.48957 2.40002 2.60002 2.40002ZM10.8234 7.62134C11.0305 7.62134 11.1984 7.80042 11.1984 8.02134C11.1984 8.22926 11.0496 8.40012 10.8595 8.41951L10.8234 8.42134H8.3999L8.39986 10.8926C8.39985 11.0997 8.22079 11.2676 7.99991 11.2676C7.79202 11.2676 7.62118 11.1188 7.60181 10.9287L7.59998 10.8926L7.60002 8.42134H5.11072C4.90361 8.42134 4.73572 8.24225 4.73572 8.02134C4.73572 7.81342 4.88444 7.64255 5.0746 7.62317L5.11072 7.62134H7.60004L7.60009 5.16381C7.60009 4.95671 7.77915 4.78882 8.00004 4.78882C8.20792 4.78882 8.37876 4.93755 8.39814 5.12771L8.39997 5.16382L8.39992 7.62134H10.8234Z"
                />
            </svg>
        </span>
    );
};

const MenuFoldIcon = function ({ className, ...rest }: IIcon) {
    return (
        <span className={classNames('dt-catalogue__icon', className)} {...rest}>
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.75 2.875C2.47386 2.875 2.25 3.09886 2.25 3.375C2.25 3.63859 2.45397 3.85454 2.71268 3.87363L2.75 3.875H13.25C13.5261 3.875 13.75 3.65114 13.75 3.375C13.75 3.11141 13.546 2.89546 13.2873 2.87637L13.25 2.875H2.75ZM7.75 7.625C7.47386 7.625 7.25 7.84886 7.25 8.125C7.25 8.38859 7.45397 8.60454 7.71268 8.62363L7.75 8.625H13.25C13.5261 8.625 13.75 8.40114 13.75 8.125C13.75 7.86141 13.546 7.64546 13.2873 7.62637L13.25 7.625H7.75ZM2.75 12.375C2.47386 12.375 2.25 12.5989 2.25 12.875C2.25 13.1386 2.45397 13.3545 2.71268 13.3736L2.75 13.375H13.25C13.5261 13.375 13.75 13.1511 13.75 12.875C13.75 12.6114 13.546 12.3955 13.2873 12.3764L13.25 12.375H2.75ZM5.75 5.625V10.625L2.5 8.07579L5.75 5.625Z"
                />
            </svg>
        </span>
    );
};

const MenuUnFoldIcon = function ({ className, ...rest }: IIcon) {
    return (
        <span className={classNames('dt-catalogue__icon', className)} {...rest}>
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 64 64"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M55 13.5C55 12.3954 54.1046 11.5 53 11.5H11L10.8507 11.5055C9.81588 11.5818 9 12.4456 9 13.5C9 14.6046 9.89543 15.5 11 15.5H53L53.1493 15.4945C54.1841 15.4182 55 14.5544 55 13.5ZM35 32.5C35 31.3954 34.1046 30.5 33 30.5H11L10.8507 30.5055C9.81588 30.5818 9 31.4456 9 32.5C9 33.6046 9.89543 34.5 11 34.5H33L33.1493 34.4945C34.1841 34.4182 35 33.5544 35 32.5ZM53 49.5C54.1046 49.5 55 50.3954 55 51.5C55 52.5544 54.1841 53.4182 53.1493 53.4945L53 53.5H11C9.89543 53.5 9 52.6046 9 51.5C9 50.4456 9.81588 49.5818 10.8507 49.5055L11 49.5H53ZM54 32.3032L41 42.5V22.5L54 32.3032Z"
                    />
                </g>
            </svg>
        </span>
    );
};

const DragIcon = function ({ className, ...rest }: IIcon) {
    return (
        <span className={classNames('dt-catalogue__icon', className)} {...rest}>
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 64 64"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M30.7954 5.61121C31.5562 4.82287 32.7988 4.79924 33.5889 5.52808L33.7097 5.64941L40.4525 13.0137C41.1984 13.8284 41.1427 15.0935 40.328 15.8394C39.5562 16.5461 38.3801 16.5332 37.6243 15.8372L37.5023 15.7149L34.2351 12.1471V30.5029H52.7644L49.4815 27.3357C48.7285 26.6091 48.6686 25.4345 49.3166 24.637L49.4311 24.5078C50.1578 23.7548 51.3324 23.6949 52.1298 24.3428L52.2591 24.4574L59.6234 31.5638C60.4118 32.3245 60.4354 33.5671 59.7066 34.3572L59.5852 34.478L52.2209 41.2208C51.4062 41.9667 50.1411 41.911 49.3952 41.0963C48.6886 40.3245 48.7014 39.1485 49.3974 38.3926L49.5197 38.2706L53.635 34.5029H34.2351V51.2187L37.5028 47.6494L37.6247 47.5271C38.3806 46.8311 39.5567 46.8183 40.3284 47.5249C41.1431 48.2708 41.1989 49.5359 40.4529 50.3506L33.7102 57.7149L33.5893 57.8363C32.7993 58.5651 31.5566 58.5415 30.7959 57.7531L23.6895 50.3888L23.5749 50.2595C22.927 49.4621 22.9869 48.2875 23.7399 47.5608L23.8692 47.4463C24.6666 46.7983 25.8412 46.8582 26.5679 47.6112L30.2351 51.4122V34.5029H10.6026L14.7149 38.2677L14.8372 38.3896C15.5332 39.1455 15.5461 40.3216 14.8394 41.0934C14.0935 41.908 12.8284 41.9638 12.0137 41.2179L4.64941 34.4751L4.52808 34.3542C3.79924 33.5642 3.82287 32.3215 4.61121 31.5608L11.9755 24.4544L12.1048 24.3399C12.9023 23.6919 14.0769 23.7518 14.8035 24.5048L14.9181 24.6341C15.566 25.4316 15.5061 26.6062 14.7531 27.3328L11.4674 30.5029H30.2351V11.9519L26.5674 15.7531C25.8408 16.5061 24.6662 16.566 23.8687 15.9181L23.7394 15.8035C22.9864 15.0769 22.9265 13.9023 23.5745 13.1048L23.689 12.9755L30.7954 5.61121Z"
                    />
                </g>
            </svg>
        </span>
    );
};

const EllipsisIcon = function ({ className, ...rest }: IIcon) {
    return (
        <span className={classNames('dt-catalogue__icon', className)} {...rest}>
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 64 64"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M47 32C47 34.7614 49.2386 37 52 37C54.7614 37 57 34.7614 57 32C57 29.2386 54.7614 27 52 27C49.2386 27 47 29.2386 47 32ZM27 32C27 34.7614 29.2386 37 32 37C34.7614 37 37 34.7614 37 32C37 29.2386 34.7614 27 32 27C29.2386 27 27 29.2386 27 32ZM7 32C7 34.7614 9.23858 37 12 37C14.7614 37 17 34.7614 17 32C17 29.2386 14.7614 27 12 27C9.23858 27 7 29.2386 7 32Z"
                    />
                </g>
            </svg>
        </span>
    );
};

const EditIcon = function ({ className, ...rest }: IIcon) {
    return (
        <span className={classNames('dt-catalogue__icon', className)} {...rest}>
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 64 64"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M40.8452 6.58663L13.2518 34.2132C12.8772 34.5882 12.6668 35.0965 12.6668 35.6265V45.3333C12.6668 46.4379 13.5623 47.3333 14.6668 47.3333H24.4231C24.9537 47.3333 25.4625 47.1225 25.8376 46.7472L53.4147 19.158C54.1953 18.3771 54.1953 17.1112 53.4147 16.3302L43.6748 6.5861C42.8935 5.80442 41.6263 5.80467 40.8452 6.58663ZM42.2605 10.829L49.1725 17.744L23.5945 43.333H16.6665V36.453L42.2605 10.829ZM56.7963 56C56.7963 54.8954 55.9008 54 54.7963 54H9.3335L9.18423 54.0055C8.14937 54.0818 7.3335 54.9456 7.3335 56C7.3335 57.1046 8.22893 58 9.3335 58H54.7963L54.9455 57.9945C55.9804 57.9182 56.7963 57.0544 56.7963 56Z"
                    />
                </g>
            </svg>
        </span>
    );
};

const DeleteIcon = function ({ className, ...rest }: IIcon) {
    return (
        <span className={classNames('dt-catalogue__icon', className)} {...rest}>
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 64 64"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M42 12C42 9.79086 40.2091 8 38 8H26C23.7909 8 22 9.79086 22 12V16H16H7C5.89543 16 5 16.8954 5 18C5 19.1046 5.89543 20 7 20H12V52C12 54.2091 13.7909 56 16 56H48C50.2091 56 52 54.2091 52 52V20H57C58.1046 20 59 19.1046 59 18C59 16.8954 58.1046 16 57 16H48H42V12ZM38 16V12H26V16H38ZM48 20H38H26H16V52H48V20ZM24 28C24 26.8954 24.8954 26 26 26C27.1046 26 28 26.8954 28 28V44C28 45.1046 27.1046 46 26 46C24.8954 46 24 45.1046 24 44V28ZM38 26C36.8954 26 36 26.8954 36 28V44C36 45.1046 36.8954 46 38 46C39.1046 46 40 45.1046 40 44V28C40 26.8954 39.1046 26 38 26Z"
                    />
                </g>
            </svg>
        </span>
    );
};
const PlusCircleIcon = function ({ className, ...rest }: IIcon) {
    return (
        <span className={classNames('dt-catalogue__icon', className)} {...rest}>
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 64 64"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M32 5C46.9117 5 59 17.0883 59 32C59 46.9117 46.9117 59 32 59C17.0883 59 5 46.9117 5 32C5 17.0883 17.0883 5 32 5ZM32 9C19.2975 9 9 19.2975 9 32C9 44.7025 19.2975 55 32 55C44.7025 55 55 44.7025 55 32C55 19.2975 44.7025 9 32 9ZM32 16C33.1046 16 34 16.8954 34 18V30H46C47.1046 30 48 30.8954 48 32C48 33.1046 47.1046 34 46 34H34V46C34 47.1046 33.1046 48 32 48C30.8954 48 30 47.1046 30 46V34H18C16.8954 34 16 33.1046 16 32C16 30.8954 16.8954 30 18 30H30V18C30 16.8954 30.8954 16 32 16Z"
                    />
                </g>
            </svg>
        </span>
    );
};

export {
    CatalogIcon,
    DeleteIcon,
    DownTriangleIcon,
    DragIcon,
    EditIcon,
    EllipsisIcon,
    FolderIcon,
    FolderOpenedIcon,
    MenuFoldIcon,
    MenuUnFoldIcon,
    PlusCircleIcon,
    PlusSquareIcon,
};
