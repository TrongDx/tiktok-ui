import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import styles from './Footer.module.scss'
import DivLink from "./DivLink";
// import { ArrowTippy } from "../Icons";


const cx = classNames.bind(styles)
function Footer() {

    const renderTippy = (props) => {
        return (
            <div className={cx('tippy-wrapper')} tabIndex='-1' {...props}>
                <div className={cx('tippy-popup')}>
                    <a className={cx('tippy-a-link')} href="https://www.tiktok.com/legal/page/global/law-enforcement/vi">NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK</a>
                </div>
            </div>
        )
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('ContainerFirst')}>
                <DivLink href={'https://www.tiktok.com/about?lang=vi-VN'} title="Giới thiệu" />
                <DivLink href={'https://newsroom.tiktok.com/vi-vn/'} title="Bảng tin" />
                <DivLink href={'https://www.tiktok.com/about/contact?lang=vi-VN'} title="Liên hệ" />
                <DivLink href={'https://careers.tiktok.com/'} title="Sự nghiệp" />
            </div>
            <div className={cx('ContainerSecond')}>
                <DivLink href={'https://www.tiktok.com/forgood'} title="TikTok for Good" />
                <DivLink href={'https://www.tiktok.com/business/?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&refer=tiktok_web'} title="Quảng cáo" />
                <DivLink href={'https://developers.tiktok.com/?refer=tiktok_web'} title="Developers" />
                <DivLink href={'https://www.tiktok.com/transparency'} title="Minh bạch" />
                <DivLink href={'https://www.tiktok.com/tiktok-rewards/vi-VN'} title="TikTok Rewards" />
                <DivLink href={'https://www.tiktok.com/embed'} title="TikTok Embeds" />
            </div>
            <div className={cx('ContainerThird')}>
                <DivLink href={'https://support.tiktok.com/vi-VN'} title="Trợ giúp" />
                <DivLink href={'https://www.tiktok.com/safety?lang=vi-VN'} title="An toàn" />
                <DivLink href={'https://www.tiktok.com/legal/terms-of-service?lang=vi-VN'} title="Điều khoản" />
                <DivLink href={'https://www.tiktok.com/legal/privacy-policy-row?lang=vi-VN'} title="Quyền riêng tư" />
                <DivLink href={'https://www.tiktok.com/creators/creator-portal/en-us/'} title="Cổng thông tin Tác giả" />
                <DivLink href={'https://www.tiktok.com/community-guidelines?lang=vi-VN'} title="Hướng dẫn Cộng đồng" />
            </div>
            <span>
                <Tippy
                    interactive
                    delay={[0, 0]}
                    placement='top-start'
                    render={renderTippy}
                >
                    <div className={cx('ContainerAdd')}>
                        <span className={cx('SpanMoreText')}>Thêm</span>
                    </div>
                </Tippy>
            </span>
            <span className={cx('copyright')}>{"© 2023 TikTok"}</span>
        </div>

    );
}

export default Footer;