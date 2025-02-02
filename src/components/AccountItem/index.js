import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/4c50b06cf8e7a7618d7ff75263c8e7b2.jpeg?lk3s=a5d48078&nonce=61716&refresh_token=adf06db6767227e6f93a1fab67271810&x-expires=1738630800&x-signature=nwmKff5Eimlyvr%2BIKPMiXMirX%2Bk%3D&shp=a5d48078&shcp=81f88b70"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}
export default AccountItem;
