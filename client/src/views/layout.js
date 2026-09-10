import navbar from './navbar'
import footer from './footer'
import subnav from './sub-navbar'
import announcementBanner from './announcement-banner'

export default (body, opt) => {
  const mainKey = opt.view || opt.activeTab || opt.page && opt.page.pathname || 'main'

  return <div className="explorer-container">
    { navbar(opt) }
    { subnav(opt.t, opt.isTouch, opt.activeTab, opt.page) }
    { announcementBanner() }
    <main className="explorer-main" key={mainKey}>
      { body }
    </main>
    { footer(opt) }
  </div>
}
