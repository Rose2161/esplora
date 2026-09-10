import { CloseIcon } from '../components/icons'

const isLiquidMainnet = process.env.MENU_ACTIVE === 'Liquid'

export default () =>
  isLiquidMainnet
    ? <div className="announcement-banner">
        <p className="announcement-banner-message">
          Liquid Network activity is currently paused due to a security incident. For more updates follow{' '}
          <a href="https://x.com/Liquid_BTC" target="_blank" rel="noopener">@Liquid_BTC</a>.
        </p>
        <button className="announcement-banner-close" aria-label="Dismiss announcement">
          <CloseIcon className="announcement-banner-close-icon" />
        </button>
      </div>
    : ""
