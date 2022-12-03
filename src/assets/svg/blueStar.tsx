; import type { FC } from 'react';

const blueStar: FC = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.258 7.49111L14.6989 6.60001L11.7957 0.944893C11.4351 0.285129 10.4433 0.422223 10.2044 0.944893L7.30126 6.60001L0.737621 7.49111C-0.00168969 7.53396 -0.236106 8.38651 0.26879 8.91346L5.00218 13.3219L3.87519 19.5125C3.74445 20.2751 4.62802 20.7035 5.14193 20.4036L10.9978 17.4647L16.8537 20.3608C17.4668 20.6607 18.1971 20.2408 18.1204 19.5168L16.9935 13.3219L21.7268 8.91346C22.2994 8.3351 21.8891 7.56395 21.258 7.49111ZM15.4472 12.3879C15.2579 12.6107 15.1677 12.8763 15.2128 13.1462L16.1009 18.133L11.4171 15.7724C11.115 15.6525 10.831 15.6525 10.5741 15.7724L5.89026 18.133L6.77833 13.1462C6.82341 12.8335 6.73325 12.5679 6.54392 12.3879L2.7527 8.87062L8 8.15945C8.2795 8.1166 8.51391 7.97951 8.65817 7.71389L11.0023 3.21551L13.3465 7.71389C13.4862 7.93667 13.7206 8.1166 14.0047 8.15945L19.2429 8.87062L15.4472 12.3879Z" fill="#071330" />
        </svg>
    );
};

export default blueStar;