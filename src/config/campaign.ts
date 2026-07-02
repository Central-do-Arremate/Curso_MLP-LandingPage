// Kill switch for this campaign landing page. Vite env is build-time, so
// flipping VITE_CAMPAIGN_DISABLED requires a redeploy — intentional, this is
// meant to fully retire the page, not a runtime toggle.
export const CAMPAIGN_DISABLED = import.meta.env.VITE_CAMPAIGN_DISABLED === 'true'

export const CENTRAL_DO_ARREMATE_URL = 'https://centraldoarremate.com.br'
export const LEILOIA_URL = 'https://ia.centraldoarremate.com.br'
