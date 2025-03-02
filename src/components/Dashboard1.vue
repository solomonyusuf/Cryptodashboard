<template>
  <div class="darktheme tw-dark">
    <header class="header dashboard tw-flex tw-flex-col">
      <!-- Top announcements -->
      <div id="announcement" class="tw-bg-gray-800 dark:tw-bg-moon-800" style="display: none;">
        <div class="container tw-flex tw-justify-between tw-items-center tw-py-2 tw-px-4 gecko-override-links-primary">
          <div data-view-component="true"
            class="tw-text-gray-50 dark:tw-text-moon-50 tw-font-semibold tw-text-sm tw-leading-5">

            Share your Crypto AI takes in our <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScKgicYq2Val8dWt9Q-YSORGM5FlAvv6X9WRv2aW7UjhvZ_LA/viewform"
              target="_blank" rel="noopener"><b>5-min survey</b></a>!

          </div><i data-action="click->application#hideAnnouncement" data-view-component="true"
            class="fas fa-fw fa-times tw-cursor-pointer tw-text-gray-50 dark:tw-text-moon-50"></i>

        </div>
      </div>

      <!-- Navbar -->


      <div class="tw-grid" data-controller="navbar" data-action="navbar:click:outside->navbar#hideAccountMenu">
        <!-- Overall Stats -->
        <div class="container tw-order-2 2lg:tw-order-none tw-overflow-x-auto 2lg:tw-py-2.5">
          <div class="tw-py-2 tw-flex tw-items-center">
            <div class="tw-flex-1 tw-flex tw-gap-x-4 tw-whitespace-nowrap tw-pr-[15px] 2lg:tw-pr-0">
              <div data-view-component="true"
                class="tw-hidden 2lg:tw-block tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular">

                Coins:
                <a href="/" data-view-component="true"
                  class="tw-cursor-pointer tw-font-semibold tw-no-underline tw-text-slate-700 hover:tw-text-primary-500 dark:tw-text-moon-50 dark:hover:tw-text-primary-400">
                  17,186</a>

              </div>
              <div data-view-component="true"
                class="tw-hidden 2lg:tw-block tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular">

                Exchanges:
                <a href="/en/exchanges" data-view-component="true"
                  class="tw-cursor-pointer tw-font-semibold tw-no-underline tw-text-slate-700 hover:tw-text-primary-500 dark:tw-text-moon-50 dark:hover:tw-text-primary-400">
                  1,265</a>

              </div>
              <div data-view-component="true"
                class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular">

                Market Cap:
                <a href="/en/global-charts" data-view-component="true"
                  class="tw-cursor-pointer tw-font-semibold tw-no-underline tw-text-slate-700 hover:tw-text-primary-500 dark:tw-text-moon-50 dark:hover:tw-text-primary-400">
                  <span class="no-wrap">$2.935T</span></a>
                <span class="gecko-down"><img src="https://img.icons8.com/?size=100&id=37319&format=png&color=FC0909"
                    style="height:10px;" />1.4%</span>

              </div>
              <div data-view-component="true"
                class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular">

                24h Vol:
                <a href="/en/global-charts" data-view-component="true"
                  class="tw-cursor-pointer tw-font-semibold tw-no-underline tw-text-slate-700 hover:tw-text-primary-500 dark:tw-text-moon-50 dark:hover:tw-text-primary-400">
                  <span class="no-wrap" data-price-btc="1002660.5073669142" data-price-target="price"
                    data-abbreviated="true" data-prev-price="85863171447.61719">$85.863B</span></a>
                <span class="gecko-up"><img src="https://img.icons8.com/?size=100&id=99979&format=png&color=1CFC09"
                    style="height:10px;" />4.4%</span>

              </div>
              <div data-view-component="true"
                class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular">

                Dominance:
                <div class="tw-inline-flex tw-gap-x-2">
                  <a href="/en/global-charts" data-view-component="true"
                    class="tw-cursor-pointer tw-font-semibold tw-no-underline tw-text-slate-700 hover:tw-text-primary-500 dark:tw-text-moon-50 dark:hover:tw-text-primary-400">
                    BTC
                    57.9%
                  </a> <a href="/en/global-charts" data-view-component="true"
                    class="tw-cursor-pointer tw-font-semibold tw-no-underline tw-text-slate-700 hover:tw-text-primary-500 dark:tw-text-moon-50 dark:hover:tw-text-primary-400">
                    ETH
                    9.12%
                  </a>
                </div>

              </div>
              <div class="tw-flex tw-flex-col" x-data="{ navbar_gas: false }" @mouseover.away="navbar_gas = false">
                <div style="display:flex;" @mouseover="navbar_gas = true" @click="navbar_gas = true"
                  data-view-component="true"
                  class="tw-cursor-pointer tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular">

                  <svg width="24" height="15" viewBox="0 0 256 417" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#343434">
                      <polygon points="127.9,0 127.9,142.8 255.8,209.1 " />
                      <polygon points="127.9,0 0,209.1 127.9,142.8 " />
                    </g>
                    <g fill="#8C8C8C">
                      <polygon points="127.9,312.8 127.9,416.3 255.8,233.7 " />
                      <polygon points="127.9,416.3 0,233.7 127.9,312.8 " />
                    </g>
                    <g fill="#3C3C3B">
                      <polygon points="127.9,152.4 127.9,290.8 255.8,215.2 " />
                      <polygon points="127.9,152.4 0,215.2 127.9,290.8 " />
                    </g>
                  </svg>

                  Gas:
                  <span class="tw-font-semibold tw-text-slate-700 dark:tw-text-moon-50">
                    0.627 GWEI
                  </span>

                </div>
                <div menu_position="bottom" data-view-component="true" class="tw-inline-block tw-text-left">
                  <div class="tw-z-[2000]" x-data="popperable('navbar_gas')" data-placement="bottom"
                    style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(791.467px, 33.6px, 0px);"
                    data-popper-placement="bottom">
                    <div @click.away="navbar_gas = false" x-show="navbar_gas"
                      x-transition:enter="tw-transition tw-ease-out tw-duration-100"
                      x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100"
                      x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95"
                      x-transition:leave="tw-transition tw-ease-in tw-duration-75"
                      x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95"
                      x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="display: none"
                      data-view-component="true"
                      class="!tw-w-44 dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">

                      <div data-view-component="true">

                        <div @mouseover="navbar_gas = true" @click="navbar_gas = true" data-view-component="true"
                          class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular">

                          <div class="tw-flex tw-justify-between">
                            Fast: <span class="tw-font-semibold">0.632 GWEI</span>
                          </div>
                          <div class="tw-flex tw-justify-between">
                            Standard: <span class="tw-font-semibold">0.627 GWEI</span>
                          </div>
                          <div class="tw-flex tw-justify-between">
                            Safe: <span class="tw-font-semibold">0.627 GWEI</span>
                          </div>

                        </div>
                        <div data-view-component="true"
                          class="tw-mt-1 tw-opacity-70 dark:tw-opacity-50 tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular">
                          Data by Etherscan
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tw-hidden 2lg:tw-block tw-justify-end tw-items-center 2lg:-tw-my-2.5 tw-pr-4 !tw-hidden"
              data-login-state-target="placeholder">
              <i data-view-component="true"
                class="fas fa-spin fa-spinner-third fa-fw tw-text-gray-900 dark:tw-text-moon-200"></i>

            </div>
            <div class="tw-hidden 2lg:tw-flex tw-justify-end tw-items-center tw-gap-x-2 2lg:-tw-my-2.5"
              data-login-state-target="transition">
              <div x-data="{open: false}" menu_position="right" data-view-component="true"
                class="tw-inline-block tw-text-left">
                <div @click="open = !open">
                  <button :class="open &amp;&amp; 'gecko-button-dropdown-secondary gecko-button-dropdown-open'"
                    type="button" data-view-component="true"
                    class="tw-bg-white dark:tw-bg-moon-800 !tw-border-t-2 !tw-border-x-2 !tw-border-slate-300 dark:!tw-border-moon-500 tw-shadow-secondaryShadow dark:tw-shadow-secondaryShadowDark !tw-mb-1 hover:tw-bg-slate-100 dark:hover:tw-bg-moon-700 hover:tw-shadow-secondaryHover dark:hover:tw-shadow-secondaryHoverDark active:!tw-shadow-secondaryActive dark:active:!tw-shadow-secondaryActiveDark tw-transition-all tw-duration-150 active:tw-translate-y-2 tw-items-center tw-justify-center tw-font-semibold tw-text-inline tw-rounded-lg tw-select-none focus:tw-outline-none tw-px-2.5 tw-py-1.5 tw-inline-flex">

                    <div data-view-component="true"
                      class="tw-text-xs tw-leading-4 tw-text-slate-900 hover:tw-text-slate-900 focus:tw-text-slate-900 dark:tw-text-moon-50 dark:hover:tw-text-moon-50 dark:focus:tw-text-moon-50 tw-font-semibold">

                      <img src="https://img.icons8.com/?size=100&id=364&format=png&color=FFFFFF" style="height:15px;"/>

                    </div>
                  </button>
                </div>

                <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-end"
                  style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate3d(-149.333px, 42.9333px, 0px);"
                  data-popper-placement="bottom-end">
                  <div @click.away="open = false" x-show="open"
                    x-transition:enter="tw-transition tw-ease-out tw-duration-100"
                    x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100"
                    x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95"
                    x-transition:leave="tw-transition tw-ease-in tw-duration-75"
                    x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95"
                    x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="display: none"
                    data-view-component="true"
                    class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">

                    <div data-view-component="true">

                      <div @click="Modal.show('language_selector'); open = false;" data-view-component="true"
                        class="tw-cursor-pointer tw-flex tw-justify-between dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">


                        Language
                        <div data-view-component="true"
                          class="tw-text-gray-500 dark:text-moon-200 tw-font-medium tw-text-sm tw-leading-5">
                          English
                        </div>


                      </div>
                      <div @click="Modal.show('currency_selector'); open = false;" data-view-component="true"
                        class="tw-cursor-pointer tw-flex tw-justify-between dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">


                        Currency
                        <div data-settings-target="currencyText" data-view-component="true"
                          class="tw-text-gray-500 dark:text-moon-200 tw-font-medium tw-text-sm tw-leading-5">USD</div>


                      </div>
                      <div data-action="click->settings#toggleDarkMode" data-view-component="true"
                        class="tw-cursor-pointer tw-flex tw-justify-between dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">


                        Dark Mode
                        <label data-view-component="true"
                          class="tw-pointer-events-none tw-relative tw-inline-flex tw-items-center tw-cursor-pointer">
                          <input data-settings-target="darkModeToggle" id="" unchecked="" type="checkbox"
                            class="tw-sr-only tw-peer">
                          <div
                            class="after:tw-content-[''] tw-w-11 tw-h-4 tw-bg-gray-200 tw-rounded-md dark:tw-bg-gray-700 after:tw-absolute after:tw-top-[-4px] after:tw-left-[0px] after:tw-drop-shadow after:tw-bg-no-repeat after:tw-bg-white after:tw-bg-center after:tw-bg-[url('icons/cross.svg')] after:tw-align-middle after:tw-border-2 after:tw-rounded-lg after:tw-h-6 after:tw-w-6 after:tw-transition-all after:tw-border-gray-200 dark:tw-border-gray-600 after:dark:tw-border-moon-600 after:dark:tw-bg-moon-50after:dark:tw-bg-[url('icons/cross_dark.svg')] peer-checked:tw-bg-primary-500 peer-checked:after:tw-border-primary-500 peer-checked:after:tw-bg-[url('icons/tick.svg')] peer-checked:after:dark:tw-bg-moon-50 peer-checked:after:tw-translate-x-full">
                          </div>
                        </label>


                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div x-data="{open: false}" menu_position="right" data-login-state-target="loggedInItem"
                data-view-component="true" class="tw-inline-block tw-text-left tw-hidden">
                <div @click="open = !open">
                  <button :class="open &amp;&amp; 'gecko-button-dropdown-secondary gecko-button-dropdown-open'"
                    type="button" data-view-component="true"
                    class="tw-bg-white dark:tw-bg-moon-800 !tw-border-t-2 !tw-border-x-2 !tw-border-slate-300 dark:!tw-border-moon-500 tw-shadow-secondaryShadow dark:tw-shadow-secondaryShadowDark !tw-mb-1 hover:tw-bg-slate-100 dark:hover:tw-bg-moon-700 hover:tw-shadow-secondaryHover dark:hover:tw-shadow-secondaryHoverDark active:!tw-shadow-secondaryActive dark:active:!tw-shadow-secondaryActiveDark tw-transition-all tw-duration-150 active:tw-translate-y-2 tw-items-center tw-justify-center tw-font-semibold tw-text-inline tw-rounded-lg tw-select-none focus:tw-outline-none tw-px-2.5 tw-py-1.5 tw-inline-flex">

                    <div data-view-component="true"
                      class="tw-text-xs tw-leading-4 tw-text-slate-900 hover:tw-text-slate-900 focus:tw-text-slate-900 dark:tw-text-moon-50 dark:hover:tw-text-moon-50 dark:focus:tw-text-moon-50 tw-font-semibold">

                      <i data-view-component="true" class="far fa-user fa-fw"></i>


                    </div>
                  </button>
                </div>

                <div class="tw-z-[2000]" x-data="popperable('open')" data-placement="bottom-end"
                  style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate3d(-1240.4px, 0px, 0px);"
                  data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom-end">
                  <div @click.away="open = false" x-show="open"
                    x-transition:enter="tw-transition tw-ease-out tw-duration-100"
                    x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100"
                    x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95"
                    x-transition:leave="tw-transition tw-ease-in tw-duration-75"
                    x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95"
                    x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" style="display: none"
                    data-view-component="true"
                    class="dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">

                    <div data-view-component="true">
                      <div data-view-component="true"
                        class="tw-p-2 tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-xs">

                        <span class="tw-shrink-0 tw-basis-auto">My Account</span>
                        <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                      </div>
                      <span data-action="click->application#navigateToUrl" data-url="/account/security"
                        data-view-component="true"
                        class="tw-cursor-pointer dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">

                        Login and Security

                      </span>
                      <span
                        data-action="click->application#navigateToUrl click->analytics-tracker#unconditionalTrackEvent"
                        data-analytics-event="select_premium_subscribe_prompt_cta"
                        data-analytics-event-properties="{&quot;origin&quot;:&quot;navbar_account&quot;}"
                        data-url="/en/premium/pricing" data-login-state-target="subscribeButton"
                        data-view-component="true"
                        class="tw-cursor-pointer dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">

                        Upgrade to Premium

                      </span>
                      <span data-action="click->application#navigateToUrl" data-url="/account/subscriptions"
                        data-login-state-target="premiumItem" data-view-component="true"
                        class="tw-cursor-pointer tw-hidden dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">

                        Manage Subscription

                      </span>
                      <span data-action="click->application#navigateToUrl"
                        data-url="/account/premium-newsletter?locale=en" data-login-state-target="premiumItem"
                        data-view-component="true"
                        class="tw-cursor-pointer tw-hidden dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">

                        Premium Newsletter

                      </span>

                    </div>
                    <div data-login-state-target="developerGroup" data-view-component="true" class="tw-hidden">
                      <div data-view-component="true"
                        class="tw-p-2 tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-xs">

                        <span class="tw-shrink-0 tw-basis-auto">For Developers</span>
                        <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                      </div>
                      <span data-action="click->application#navigateToUrl" data-url="/en/developers/dashboard"
                        data-login-state-target="developerGroup" data-view-component="true"
                        class="tw-cursor-pointer tw-hidden dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">

                        Developer's Dashboard

                      </span>

                    </div>
                    <div data-login-state-target="authorshipGroup" data-view-component="true" class="tw-hidden">
                      <div data-view-component="true"
                        class="tw-p-2 tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-xs">

                        <span class="tw-shrink-0 tw-basis-auto">For Authors</span>
                        <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                      </div>
                      <span data-action="click->application#navigateToUrl" data-url="/buzz/new?locale=en"
                        data-login-state-target="authorshipGroup" data-view-component="true"
                        class="tw-cursor-pointer tw-hidden dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">

                        Create New Post

                      </span>
                      <span data-action="click->application#navigateToUrl" data-url="/buzz/dashboard?locale=en"
                        data-login-state-target="authorshipGroup" data-view-component="true"
                        class="tw-cursor-pointer tw-hidden dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">

                        Buzz Dashboard

                      </span>

                    </div>
                    <div data-view-component="true">
                      <div data-view-component="true"
                        class="tw-p-2 tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-xs">


                        <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                      </div>
                      <span
                        data-action="click->analytics-tracker#unconditionalTrackEvent click->application#navigateToUrl"
                        data-analytics-event="select_sign_out_cta" data-url="/account/sign_out?locale=en"
                        data-method="delete" data-view-component="true"
                        class="tw-cursor-pointer dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">

                        Sign Out

                      </span>

                    </div>

                  </div>
                </div>
              </div> <a href="/en/premium/pricing" data-login-state-target="subscribeButton"
                data-action="click->analytics-tracker#unconditionalTrackEvent"
                data-analytics-event="select_premium_subscribe_prompt_cta"
                data-analytics-event-properties="{&quot;origin&quot;:&quot;navbar&quot;}" role="button"
                data-view-component="true"
                class="tw-hidden tw-bg-primary-500 dark:tw-bg-primary-400 tw-shadow-primaryShadow !tw-mb-1 hover:tw-bg-primary-600 dark:hover:tw-bg-primary-300 hover:tw-shadow-primaryHover active:!tw-shadow-primaryActive tw-transition-all tw-duration-150 active:tw-translate-y-2 tw-items-center tw-justify-center tw-font-semibold tw-text-inline tw-rounded-lg tw-select-none focus:tw-outline-none tw-px-2.5 tw-py-1.5 tw-inline-flex">

                <div data-view-component="true"
                  class="tw-text-xs tw-leading-4 tw-text-white hover:tw-text-white focus:tw-text-white dark:tw-text-primary-900 dark:hover:tw-text-primary-900 dark:focus:tw-text-primary-900 tw-font-semibold">

                  Go Ad-free

                </div>
              </a>

              <button data-login-state-target="loggedOutItem" data-action="click->auth#openSignInModal"
                data-analytics-origin="navbar_login" type="button" data-view-component="true"
                class="tw-bg-white dark:tw-bg-moon-800 !tw-border-t-2 !tw-border-x-2 !tw-border-slate-300 dark:!tw-border-moon-500 tw-shadow-secondaryShadow dark:tw-shadow-secondaryShadowDark !tw-mb-1 hover:tw-bg-slate-100 dark:hover:tw-bg-moon-700 hover:tw-shadow-secondaryHover dark:hover:tw-shadow-secondaryHoverDark active:!tw-shadow-secondaryActive dark:active:!tw-shadow-secondaryActiveDark tw-transition-all tw-duration-150 active:tw-translate-y-2 tw-items-center tw-justify-center tw-font-semibold tw-text-inline tw-rounded-lg tw-select-none focus:tw-outline-none tw-px-2.5 tw-py-1.5 tw-inline-flex">

                <div data-view-component="true"
                  class="tw-text-xs tw-leading-4 tw-text-slate-900 hover:tw-text-slate-900 focus:tw-text-slate-900 dark:tw-text-moon-50 dark:hover:tw-text-moon-50 dark:focus:tw-text-moon-50 tw-font-semibold">

                  Log in

                </div>
              </button>
              <button data-login-state-target="loggedOutItem" data-action="click->auth#openSignUpModal"
                data-analytics-origin="navbar_sign_up" type="button" data-view-component="true"
                class="tw-bg-primary-500 dark:tw-bg-primary-400 tw-shadow-primaryShadow !tw-mb-1 hover:tw-bg-primary-600 dark:hover:tw-bg-primary-300 hover:tw-shadow-primaryHover active:!tw-shadow-primaryActive tw-transition-all tw-duration-150 active:tw-translate-y-2 tw-items-center tw-justify-center tw-font-semibold tw-text-inline tw-rounded-lg tw-select-none focus:tw-outline-none tw-px-2.5 tw-py-1.5 tw-inline-flex">

                <div data-view-component="true"
                  class="tw-text-xs tw-leading-4 tw-text-white hover:tw-text-white focus:tw-text-white dark:tw-text-primary-900 dark:hover:tw-text-primary-900 dark:focus:tw-text-primary-900 tw-font-semibold">

                  Sign up

                </div>
              </button>
            </div>
          </div>
        </div>
        <div data-view-component="true"
          class="tw-order-2 2lg:tw-order-none tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-sm">


          <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
        </div>


        <!-- Menu Items -->
        <div class="tw-relative" id="nav">
          <div class="container 2lg:tw-py-3 tw-flex tw-flex-col 2lg:tw-flex-row">
            <div class="tw-flex tw-gap-x-4 tw-items-center tw-pt-4 2lg:tw-pt-0 tw-z-[1120]">
              <!-- Mobile Nav Menu Toggle -->
              <i data-action="click->navbar#toggleMenu" data-view-component="true"
                class="tw-text-base tw-cursor-pointer tw-py-2 tw-pr-2 2lg:!tw-hidden far fa-fw fa-bars tw-text-gray-700 dark:tw-text-moon-50"></i>


              <!-- Logo -->
              <!-- Note: When updating logo, make sure to update the preload tag in layouts/application.html.erb accordingly -->
              <a class="tw-inline-block" href="/">
                <img alt="CoinGecko" class="!tw-h-8 2lg:!tw-h-10 tw-block dark:tw-hidden"
                  src="https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png">
                <img alt="CoinGecko" class="!tw-h-8 2lg:!tw-h-10 tw-hidden dark:tw-block"
                  src="https://static.coingecko.com/s/coingecko-logo-white-ea42ded10e4d106e14227d48ea6140dc32214230aa82ef63d0499f9c1e109656.png">
              </a>
              <!-- Mobile App Link -->
              <a class="tw-ml-auto lg:tw-hidden" href="https://coingecko.app.link/lTInCXLGz4">
                <button type="button" data-view-component="true"
                  class="tw-bg-primary-500 dark:tw-bg-primary-400 tw-shadow-primaryShadow !tw-mb-1 hover:tw-bg-primary-600 dark:hover:tw-bg-primary-300 hover:tw-shadow-primaryHover active:!tw-shadow-primaryActive tw-transition-all tw-duration-150 active:tw-translate-y-2 tw-items-center tw-justify-center tw-font-semibold tw-text-inline tw-rounded-lg tw-select-none focus:tw-outline-none tw-px-2.5 tw-py-1.5 tw-inline-flex">

                  <div data-view-component="true"
                    class="tw-text-xs tw-leading-4 tw-text-white hover:tw-text-white focus:tw-text-white dark:tw-text-primary-900 dark:hover:tw-text-primary-900 dark:focus:tw-text-primary-900 tw-font-semibold">

                    Use App

                  </div>
                </button>
              </a>
              <!-- Get Mobile App Modal -->
              <button onclick="Modal.show('get_app_modal')" type="button" data-view-component="true"
                class="tw-ml-auto tw-hidden lg:tw-inline 2lg:tw-hidden tw-bg-primary-500 dark:tw-bg-primary-400 tw-shadow-primaryShadow !tw-mb-1 hover:tw-bg-primary-600 dark:hover:tw-bg-primary-300 hover:tw-shadow-primaryHover active:!tw-shadow-primaryActive tw-transition-all tw-duration-150 active:tw-translate-y-2 tw-items-center tw-justify-center tw-font-semibold tw-text-inline tw-rounded-lg tw-select-none focus:tw-outline-none tw-px-2.5 tw-py-1.5 tw-inline-flex">

                <div data-view-component="true"
                  class="tw-text-xs tw-leading-4 tw-text-white hover:tw-text-white focus:tw-text-white dark:tw-text-primary-900 dark:hover:tw-text-primary-900 dark:focus:tw-text-primary-900 tw-font-semibold">


                  <i data-view-component="true" class="fas fa-qrcode"></i>

                  Get App


                </div>
              </button>
            </div>

            <div class="nav-backdrop tw-hidden"></div>
            <div class="nav-wrapper container 2lg:!tw-px-0 tw-hidden 2lg:tw-flex 2lg:tw-mr-4">
              <!-- Cryptocurrencies -->
              <div class="tw-flex tw-flex-col 2lg:tw-relative 2lg:tw-mx-8"
                data-action="mouseover->navbar#handleOver mouseout->navbar#handleAway click->navbar#handleClick">
                <div class="tw-flex tw-items-center tw-cursor-pointer">
                  <div data-view-component="true"
                    class="nav-label dark:!tw-text-moon-50 tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
                    Cryptocurrencies
                  </div>
                  <i data-view-component="true"
                    class="far nav-items-toggle fa-plus tw-text-lg tw-p-2 2lg:!tw-hidden tw-text-gray-700 dark:tw-text-moon-50"></i>

                </div>
                <div data-view-component="true"
                  class="2lg:tw-hidden tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-sm">


                  <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                </div>
                <div data-view-component="true" class="tw-inline-block tw-text-left">
                  <div class="tw-z-[2000]">
                    <div x-transition:enter="tw-transition tw-ease-out tw-duration-100"
                      x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100"
                      x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95"
                      x-transition:leave="tw-transition tw-ease-in tw-duration-75"
                      x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95"
                      x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" data-view-component="true"
                      class="nav-items 2lg:tw-hidden dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-4 tw-z-[2000]">

                      <div data-view-component="true">

                        <a href="/" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">
                          <i data-view-component="true"
                            class="tw-mr-2 fas fa-ranking-star fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>


                          By Market Cap


                        </a> <a href="/en/categories" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">
                          <i data-view-component="true"
                            class="tw-mr-2 fas fa-shapes fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>


                          Categories


                        </a> <a href="/en/chains" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">
                          <i data-view-component="true"
                            class="tw-mr-2 fas fa-link fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>


                          Chains


                        </a>
                      </div>
                      <div data-view-component="true">
                        <div data-view-component="true"
                          class="tw-p-2 tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-xs">

                          <span class="tw-shrink-0 tw-basis-auto">Popular</span>
                          <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                        </div>
                        <a href="/en/highlights" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">
                          <i data-view-component="true"
                            class="tw-mr-2 fas fa-list-ol fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>


                          Highlights


                        </a> <a href="/en/new-cryptocurrencies" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">
                          <i data-view-component="true"
                            class="tw-mr-2 fas fa-sparkles fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>


                          New Cryptocurrencies


                        </a> <a href="/en/crypto-gainers-losers" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">
                          <i data-view-component="true"
                            class="tw-mr-2 fas fa-trophy-star fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>


                          Gainers &amp; Losers


                        </a>
                      </div>
                      <div data-view-component="true">
                        <div data-view-component="true"
                          class="tw-p-2 tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-xs">

                          <span class="tw-shrink-0 tw-basis-auto">Tools</span>
                          <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                        </div>
                        <a href="/en/all-cryptocurrencies" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">

                          All Coins

                        </a>
                        <a href="/en/compare-cryptocurrencies" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">

                          Compare Coins and NFT

                        </a>
                        <a href="/en/converter" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">

                          Converter

                        </a>
                        <a href="/en/global-charts" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">

                          Global Chart

                        </a>

                        <div data-view-component="true"
                          class="tw-mt-2 2lg:tw-hidden tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-sm">


                          <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>


              <!-- Exchanges -->
              <div class="tw-flex tw-flex-col 2lg:tw-relative 2lg:tw-mr-8"
                data-action="mouseover->navbar#handleOver mouseout->navbar#handleAway click->navbar#handleClick">
                <div class="tw-flex tw-items-center tw-cursor-pointer">
                  <div data-view-component="true"
                    class="nav-label dark:!tw-text-moon-50 tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
                    Exchanges
                  </div>
                  <i data-view-component="true"
                    class="far nav-items-toggle fa-plus tw-text-lg tw-p-2 2lg:!tw-hidden tw-text-gray-700 dark:tw-text-moon-50"></i>

                </div>
                <div data-view-component="true"
                  class="2lg:tw-hidden tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-sm">


                  <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                </div>
                <div data-view-component="true" class="tw-inline-block tw-text-left">
                  <div class="tw-z-[2000]">
                    <div x-transition:enter="tw-transition tw-ease-out tw-duration-100"
                      x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100"
                      x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95"
                      x-transition:leave="tw-transition tw-ease-in tw-duration-75"
                      x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95"
                      x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" data-view-component="true"
                      class="nav-items 2lg:tw-hidden dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-4 tw-z-[2000]">

                      <div data-view-component="true">

                        <a href="/en/exchanges" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">
                          <i data-view-component="true"
                            class="tw-mr-2 fas fa-building-columns fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>


                          Crypto Exchanges


                        </a> <a href="/en/exchanges/decentralized" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">
                          <i data-view-component="true"
                            class="tw-mr-2 fas fa-cubes fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>


                          Decentralized Exchanges


                        </a> <a href="/en/exchanges/derivatives" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">
                          <i data-view-component="true"
                            class="tw-mr-2 fas fa-chart-line fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>


                          Derivatives


                        </a>
                        <div data-view-component="true"
                          class="tw-mt-2 2lg:tw-hidden tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-sm">


                          <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>


              <!-- NFT -->
              <div class="tw-flex tw-flex-col 2lg:tw-relative 2lg:tw-mr-8"
                data-action="mouseover->navbar#handleOver mouseout->navbar#handleAway click->navbar#handleClick">
                <div class="tw-flex tw-items-center tw-cursor-pointer">
                  <div data-view-component="true"
                    class="nav-label dark:!tw-text-moon-50 tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
                    NFT
                  </div>
                  <i data-view-component="true"
                    class="far nav-items-toggle fa-plus tw-text-lg tw-p-2 2lg:!tw-hidden tw-text-gray-700 dark:tw-text-moon-50"></i>

                </div>
                <div data-view-component="true"
                  class="2lg:tw-hidden tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-sm">


                  <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                </div>
                <div data-view-component="true" class="tw-inline-block tw-text-left">
                  <div class="tw-z-[2000]">
                    <div x-transition:enter="tw-transition tw-ease-out tw-duration-100"
                      x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100"
                      x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95"
                      x-transition:leave="tw-transition tw-ease-in tw-duration-75"
                      x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95"
                      x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" data-view-component="true"
                      class="nav-items 2lg:tw-hidden dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-4 tw-z-[2000]">

                      <div data-view-component="true">

                        <a href="/en/nft" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">
                          <i data-view-component="true"
                            class="tw-mr-2 fas fa-image fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>


                          NFT Floor Price


                        </a> <a href="/en/categories/non-fungible-tokens-nft" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">
                          <i data-view-component="true"
                            class="tw-mr-2 fas fa-hexagon-image fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>


                          NFT Related Coins


                        </a> <a href="/en/nft-portfolio" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">
                          <i data-view-component="true"
                            class="tw-mr-2 fas fa-star fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>


                          NFT Watchlist


                        </a> <a href="/en/nft/global-stats" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">
                          <i data-view-component="true"
                            class="tw-mr-2 fas fa-globe fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>


                          NFT Global Chart


                        </a>
                        <div data-view-component="true"
                          class="tw-mt-2 2lg:tw-hidden tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-sm">


                          <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>


              <!-- Learn -->
              <div class="tw-flex tw-flex-col 2lg:tw-relative 2lg:tw-mr-8"
                data-action="mouseover->navbar#handleOver mouseout->navbar#handleAway click->navbar#handleClick">
                <div class="tw-flex tw-items-center tw-cursor-pointer">
                  <div data-view-component="true"
                    class="nav-label dark:!tw-text-moon-50 tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
                    Learn
                  </div>
                  <i data-view-component="true"
                    class="far nav-items-toggle fa-plus tw-text-lg tw-p-2 2lg:!tw-hidden tw-text-gray-700 dark:tw-text-moon-50"></i>

                </div>
                <div data-view-component="true"
                  class="2lg:tw-hidden tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-sm">


                  <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                </div>
                <div data-view-component="true" class="tw-inline-block tw-text-left">
                  <div class="tw-z-[2000]">
                    <div x-transition:enter="tw-transition tw-ease-out tw-duration-100"
                      x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100"
                      x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95"
                      x-transition:leave="tw-transition tw-ease-in tw-duration-75"
                      x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95"
                      x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" data-view-component="true"
                      class="nav-items 2lg:tw-hidden dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-4 tw-z-[2000]">

                      <div data-view-component="true">

                        <a href="/learn" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">
                          <i data-view-component="true"
                            class="tw-mr-2 fas fa-book-open-cover fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>


                          Learn Crypto


                        </a> <a href="/research" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">
                          <i data-view-component="true"
                            class="tw-mr-2 fas fa-lightbulb-on fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>


                          Research Insights


                        </a> <a href="/en/news" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">
                          <i data-view-component="true"
                            class="tw-mr-2 fas fa-newspaper fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>


                          News


                        </a> <a href="/en/publications/reports" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">
                          <i data-view-component="true"
                            class="tw-mr-2 fas fa-chart-user fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>


                          Reports


                        </a> <a href="https://landing.coingecko.com/earn/" target="_blank" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">
                          <i data-view-component="true"
                            class="tw-mr-2 fas fa-graduation-cap fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>


                          Learn &amp; Earn

                          <i data-view-component="true"
                            class="tw-ml-2 tw-ml-auto fas fa-arrow-up-right-from-square fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>

                        </a> <a href="https://www.youtube.com/@CoinGecko?sub_confirmation=1" target="_blank"
                          data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">
                          <i data-view-component="true"
                            class="tw-mr-2 fab fa-youtube fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>


                          Videos

                          <i data-view-component="true"
                            class="tw-ml-2 tw-ml-auto fas fa-arrow-up-right-from-square fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>

                        </a> <a href="https://newsletter.coingecko.com/landing/subscribe" target="_blank"
                          data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">
                          <i data-view-component="true"
                            class="tw-mr-2 fas fa-envelope fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>


                          Newsletter

                          <i data-view-component="true"
                            class="tw-ml-2 tw-ml-auto fas fa-arrow-up-right-from-square fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>

                        </a> <a href="/en/glossary" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">
                          <i data-view-component="true"
                            class="tw-mr-2 fas fa-arrow-down-a-z fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>


                          Glossary


                        </a>
                        <div data-view-component="true"
                          class="tw-mt-2 2lg:tw-hidden tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-sm">


                          <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>


              <!-- Products -->
              <div class="tw-flex tw-flex-col 2lg:tw-relative 2lg:tw-mr-8"
                data-action="mouseover->navbar#handleOver mouseout->navbar#handleAway click->navbar#handleClick">
                <div class="tw-flex tw-items-center tw-cursor-pointer">
                  <div data-view-component="true"
                    class="nav-label dark:!tw-text-moon-50 tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
                    Products
                  </div>
                  <i data-view-component="true"
                    class="far nav-items-toggle fa-plus tw-text-lg tw-p-2 2lg:!tw-hidden tw-text-gray-700 dark:tw-text-moon-50"></i>

                </div>
                <div data-view-component="true"
                  class="2lg:tw-hidden tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-sm">


                  <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                </div>
                <div data-view-component="true" class="tw-inline-block tw-text-left">
                  <div class="tw-z-[2000]">
                    <div x-transition:enter="tw-transition tw-ease-out tw-duration-100"
                      x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100"
                      x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95"
                      x-transition:leave="tw-transition tw-ease-in tw-duration-75"
                      x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95"
                      x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" data-view-component="true"
                      class="nav-items 2lg:tw-hidden dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-4 tw-z-[2000]">

                      <div data-view-component="true">

                        <a href="/en/portfolio" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">
                          <i data-view-component="true"
                            class="tw-mr-2 fas fa-star fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>


                          Crypto Portfolio


                        </a> <a href="/en/mobile" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">
                          <i data-view-component="true"
                            class="tw-mr-2 fas fa-mobile-screen-button fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>


                          CoinGecko App


                        </a> <a href="/en/premium/pricing" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">
                          <i data-view-component="true"
                            class="tw-mr-2 fas fa-crown fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>


                          CoinGecko Premium


                        </a>
                      </div>
                      <div data-view-component="true">
                        <div data-view-component="true"
                          class="tw-p-2 tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-xs">

                          <span class="tw-shrink-0 tw-basis-auto">For Developers</span>
                          <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                        </div>
                        <a href="/en/widgets" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">

                          Crypto Widget

                        </a>

                      </div>
                      <div data-view-component="true">
                        <div data-view-component="true"
                          class="tw-p-2 tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-xs">

                          <span class="tw-shrink-0 tw-basis-auto">On-Chain</span>
                          <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                        </div>
                        <a href="https://www.geckoterminal.com?utm_source=coingecko&amp;utm_medium=referral&amp;utm_campaign=desktop_navigation"
                          target="_blank" rel="noopener" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">


                          GeckoTerminal

                          <i data-view-component="true"
                            class="tw-ml-2 tw-ml-auto fas fa-arrow-up-right-from-square fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>

                        </a>
                        <div data-view-component="true"
                          class="tw-mt-2 2lg:tw-hidden tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-sm">


                          <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <!-- API -->
              <div class="tw-flex tw-flex-col 2lg:tw-relative 2lg:tw-mr-8"
                data-action="mouseover->navbar#handleOver mouseout->navbar#handleAway click->navbar#handleClick">
                <div class="tw-flex tw-items-center tw-cursor-pointer">
                  <div data-view-component="true"
                    class="nav-label dark:!tw-text-moon-50 tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
                    API
                  </div>
                  <i data-view-component="true"
                    class="far nav-items-toggle fa-plus tw-text-lg tw-p-2 2lg:!tw-hidden tw-text-gray-700 dark:tw-text-moon-50"></i>

                </div>
                <div data-view-component="true"
                  class="2lg:tw-hidden tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-sm">


                  <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                </div>
                <div data-view-component="true" class="tw-inline-block tw-text-left">
                  <div class="tw-z-[2000]">
                    <div x-transition:enter="tw-transition tw-ease-out tw-duration-100"
                      x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100"
                      x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95"
                      x-transition:leave="tw-transition tw-ease-in tw-duration-75"
                      x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95"
                      x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100" data-view-component="true"
                      class="nav-items 2lg:tw-hidden dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-4 tw-z-[2000]">

                      <div data-view-component="true">

                        <a href="/en/api" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">


                          Crypto API


                        </a> <a href="/en/api/dex" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">


                          On-chain DEX API


                        </a> <a href="/en/api/nft" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">


                          NFT API


                        </a>
                      </div>
                      <div data-view-component="true">
                        <div data-view-component="true"
                          class="tw-p-2 tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-xs">

                          <span class="tw-shrink-0 tw-basis-auto">Resources</span>
                          <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                        </div>
                        <a href="/en/api/pricing" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">

                          Pricing

                        </a>
                        <a href="https://docs.coingecko.com/reference/introduction" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">

                          Documentation

                        </a>
                        <a href="/learn/category/api" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">

                          Learn API

                        </a>

                      </div>
                      <div data-view-component="true">
                        <div data-view-component="true"
                          class="tw-p-2 tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-xs">

                          <span class="tw-shrink-0 tw-basis-auto">Enterprise</span>
                          <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                        </div>
                        <a href="https://landing.coingecko.com/api-for-business/" target="_blank" rel="noopener"
                          data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">


                          API for Business

                          <i data-view-component="true"
                            class="tw-ml-2 tw-ml-auto fas fa-arrow-up-right-from-square fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>

                        </a> <a href="https://landing.coingecko.com/api-for-business/resources/" target="_blank"
                          rel="noopener" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">


                          Case Studies

                          <i data-view-component="true"
                            class="tw-ml-2 tw-ml-auto fas fa-arrow-up-right-from-square fa-fw tw-text-gray-400 dark:tw-text-moon-500"></i>

                        </a>
                        <div data-view-component="true"
                          class="tw-mt-2 2lg:tw-hidden tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-sm">


                          <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>


              <!-- Candy -->
              <div class="tw-flex tw-flex-col 2lg:tw-flex-row 2lg:tw-flex-1 tw-justify-end">
                <a class="tw-no-underline tw-flex tw-items-center tw-py-4 2lg:tw-py-0 2lg:tw-gap-x-1"
                  data-login-state-target="candyItem" data-url="/en/candy" href="/en/candy">
                  <div class="fa-fw tw-mr-2 2lg:tw-mr-0 tw-px-0.5">
                    <img height="25" width="15" alt="" class="tw-align-middle"
                      src="https://img.icons8.com/?size=100&id=104&format=png&color=a4a3c6">
                  </div>
                  <div
                    class="tw-hidden 2lg:tw-block dark:!tw-text-moon-50 tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
                    Candy
                  </div>

                  <div
                    class="tw-block 2lg:tw-hidden dark:!tw-text-moon-50 tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
                    <div class="fa-fw tw-mr-2 2lg:tw-mr-0 tw-px-0.5">
                      <img height="25" width="15" alt="" class="tw-align-middle"
                        src="https://img.icons8.com/?size=100&id=104&format=png&color=a4a3c6">
                    </div>
                    My Candies
                  </div>
                </a>
                <div
                  class="2lg:tw-hidden tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-sm">


                  <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                </div>
              </div>


              <!-- Portfolio -->
              <div class="tw-flex tw-flex-col 2lg:tw-relative 2lg:tw-ml-4" data-action="click->navbar#handleClick"
                data-login-state-target="portfolioItem">
                <div class="tw-flex tw-items-center 2lg:tw-cursor-pointer tw-no-underline">
                  <img height="25" width="15" alt="" class="tw-align-middle tw-mr-2 2lg:tw-mr-0.5"
                    src="https://img.icons8.com/?size=100&id=59863&format=png&color=F1A41F">
                  <a class="nav-label tw-no-underline tw-hidden 2lg:tw-block" href="">
                    <div data-view-component="true"
                      class="dark:!tw-text-moon-50 tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
                      Portfolio
                    </div>
                  </a>
                  <div data-view-component="true"
                    class="nav-label dark:!tw-text-moon-50 tw-block 2lg:tw-hidden tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
                    My Portfolio
                  </div>
                  <i data-view-component="true"
                    class="far nav-items-toggle fa-plus tw-text-lg tw-p-2 2lg:!tw-hidden tw-text-gray-700 dark:tw-text-moon-50"></i>

                </div>
                <div data-view-component="true"
                  class="2lg:tw-hidden tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-sm">


                  <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                </div>
                <div data-view-component="true" class="tw-inline-block tw-text-left">
                  <div class="tw-z-[2000]">
                    <div x-transition:enter="tw-transition tw-ease-out tw-duration-100"
                      x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100"
                      x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95"
                      x-transition:leave="tw-transition tw-ease-in tw-duration-75"
                      x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95"
                      x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100"
                      data-login-state-target="portfolioMenu" data-view-component="true"
                      class="nav-items 2lg:tw-hidden 2lg:!tw-left-[unset] 2lg:!tw-right-0 2lg:tw-max-h-[28rem] 2lg:tw-overflow-y-auto dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">

                      <div data-view-component="true" class="2lg:tw-hidden">

                        <a href="/en/portfolio" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">

                          My Coins

                        </a>
                        <a href="/en/nft-portfolio" data-view-component="true"
                          class="dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">

                          My NFTs

                        </a>

                      </div>

                    </div>
                  </div>
                </div>
              </div>


              <!-- My Account -->
              <div class="tw-flex tw-flex-col tw-hidden" data-action="click->navbar#handleClick"
                data-login-state-target="loggedInItem">
                <div class=" 2lg:tw-hidden tw-flex tw-items-center tw-cursor-pointer">
                  <i data-view-component="true"
                    class="fas fa-user-circle fa-fw tw-mr-2 tw-text-gray-900 dark:tw-text-moon-200"></i>

                  <div data-view-component="true"
                    class="nav-label dark:!tw-text-moon-50 tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-sm tw-leading-5">
                    My Account
                  </div>
                  <i data-view-component="true"
                    class="far nav-items-toggle fa-plus tw-text-lg tw-p-2 2lg:!tw-hidden tw-text-gray-700 dark:tw-text-moon-50"></i>

                </div>
                <div data-view-component="true"
                  class="2lg:tw-hidden tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-sm">


                  <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                </div>
                <div data-view-component="true" class="tw-inline-block tw-text-left">
                  <div class="tw-z-[2000]">
                    <div x-transition:enter="tw-transition tw-ease-out tw-duration-100"
                      x-transition:enter-end="tw-transform tw-opacity-100 tw-scale-100"
                      x-transition:enter-start="tw-transform tw-opacity-0 tw-scale-95"
                      x-transition:leave="tw-transition tw-ease-in tw-duration-75"
                      x-transition:leave-end="tw-transform tw-opacity-0 tw-scale-95"
                      x-transition:leave-start="tw-transform tw-opacity-100 tw-scale-100"
                      data-navbar-target="accountMenu" data-view-component="true"
                      class="nav-items 2lg:tw-hidden 2lg:!tw-w-52 dark:tw-bg-moon-800 dark:tw-ring-moon-700 focus:tw-outline-none tw-bg-white tw-mt-2 tw-origin-top-left tw-ring-2 tw-ring-gray-200 tw-rounded-md tw-shadow-lg tw-w-56 tw-p-2 tw-z-[2000]">

                      <div data-view-component="true">

                        <span data-action="click->application#navigateToUrl" data-url="/account/security"
                          data-view-component="true"
                          class="tw-cursor-pointer dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">

                          Login and Security

                        </span>
                        <span data-action="click->application#navigateToUrl" data-url="/en/developers/dashboard"
                          data-login-state-target="developerItem" data-view-component="true"
                          class="tw-cursor-pointer tw-hidden dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">

                          Developer's Dashboard

                        </span>
                        <span data-action="click->application#navigateToUrl" data-url="/en/premium/pricing"
                          data-login-state-target="subscribeButton" data-view-component="true"
                          class="tw-cursor-pointer dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">

                          Upgrade to Premium

                        </span>
                        <span data-action="click->application#navigateToUrl" data-url="/account/subscriptions"
                          data-login-state-target="premiumItem" data-view-component="true"
                          class="tw-cursor-pointer tw-hidden dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">

                          Manage Subscription

                        </span>
                        <span data-action="click->application#navigateToUrl"
                          data-url="/account/premium-newsletter?locale=en" data-login-state-target="premiumItem"
                          data-view-component="true"
                          class="tw-cursor-pointer tw-hidden dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">

                          Premium Newsletter

                        </span>
                        <span data-action="click->application#navigateToUrl" data-url="/account/sign_out?locale=en"
                          data-method="delete" data-view-component="true"
                          class="tw-cursor-pointer dark:tw-text-moon-100 dark:hover:tw-bg-moon-700 dark:hover:tw-text-moon-50 hover:tw-bg-gray-100 hover:tw-text-gray-900 tw-flex tw-items-center tw-py-3 tw-px-2 tw-rounded-lg tw-font-semibold tw-text-gray-700 tw-text-sm">

                          Sign Out

                        </span>

                        <div data-view-component="true"
                          class="tw-mt-2 2lg:tw-hidden tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-sm">


                          <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>


              <div class="2lg:tw-hidden tw-mt-8 tw-grid tw-grid-cols-1 tw-gap-2"
                data-login-state-target="loggedOutItem">
                <button data-action="click->auth#openSignUpModal" data-analytics-origin="navbar_sign_up" type="button"
                  data-view-component="true"
                  class="tw-bg-primary-500 dark:tw-bg-primary-400 tw-shadow-primaryShadow !tw-mb-1 hover:tw-bg-primary-600 dark:hover:tw-bg-primary-300 hover:tw-shadow-primaryHover active:!tw-shadow-primaryActive tw-transition-all tw-duration-150 active:tw-translate-y-2 tw-items-center tw-justify-center tw-font-semibold tw-text-inline tw-rounded-lg tw-select-none focus:tw-outline-none tw-px-4 tw-py-2 tw-flex tw-w-full">

                  <div data-view-component="true"
                    class="tw-text-white hover:tw-text-white focus:tw-text-white dark:tw-text-primary-900 dark:hover:tw-text-primary-900 dark:focus:tw-text-primary-900 tw-font-semibold tw-text-sm tw-leading-5">

                    Create an account

                  </div>
                </button>
                <button data-action="click->auth#openSignInModal" data-analytics-origin="navbar_login" type="button"
                  data-view-component="true"
                  class="tw-bg-white dark:tw-bg-moon-800 !tw-border-t-2 !tw-border-x-2 !tw-border-slate-300 dark:!tw-border-moon-500 tw-shadow-secondaryShadow dark:tw-shadow-secondaryShadowDark !tw-mb-1 hover:tw-bg-slate-100 dark:hover:tw-bg-moon-700 hover:tw-shadow-secondaryHover dark:hover:tw-shadow-secondaryHoverDark active:!tw-shadow-secondaryActive dark:active:!tw-shadow-secondaryActiveDark tw-transition-all tw-duration-150 active:tw-translate-y-2 tw-items-center tw-justify-center tw-font-semibold tw-text-inline tw-rounded-lg tw-select-none focus:tw-outline-none tw-px-4 tw-py-2 tw-flex tw-w-full">

                  <div data-view-component="true"
                    class="tw-text-slate-900 hover:tw-text-slate-900 focus:tw-text-slate-900 dark:tw-text-moon-50 dark:hover:tw-text-moon-50 dark:focus:tw-text-moon-50 tw-font-semibold tw-text-sm tw-leading-5">

                    Log in

                  </div>
                </button>
              </div>
              <div class="2lg:tw-hidden tw-mt-8 tw-grid tw-grid-cols-3 tw-gap-x-2">
                <button onclick="Modal.show('language_selector')" type="button" data-view-component="true"
                  class="tw-bg-white dark:tw-bg-moon-800 !tw-border-t-2 !tw-border-x-2 !tw-border-slate-300 dark:!tw-border-moon-500 tw-shadow-secondaryShadow dark:tw-shadow-secondaryShadowDark !tw-mb-1 hover:tw-bg-slate-100 dark:hover:tw-bg-moon-700 hover:tw-shadow-secondaryHover dark:hover:tw-shadow-secondaryHoverDark active:!tw-shadow-secondaryActive dark:active:!tw-shadow-secondaryActiveDark tw-transition-all tw-duration-150 active:tw-translate-y-2 tw-items-center tw-justify-center tw-font-semibold tw-text-inline tw-rounded-lg tw-select-none focus:tw-outline-none tw-px-4 tw-py-2 tw-flex tw-w-full">

                  <div data-view-component="true"
                    class="tw-text-slate-900 hover:tw-text-slate-900 focus:tw-text-slate-900 dark:tw-text-moon-50 dark:hover:tw-text-moon-50 dark:focus:tw-text-moon-50 tw-font-semibold tw-text-sm tw-leading-5">

                    EN

                  </div>
                </button>
                <button onclick="Modal.show('currency_selector')" type="button" data-view-component="true"
                  class="tw-bg-white dark:tw-bg-moon-800 !tw-border-t-2 !tw-border-x-2 !tw-border-slate-300 dark:!tw-border-moon-500 tw-shadow-secondaryShadow dark:tw-shadow-secondaryShadowDark !tw-mb-1 hover:tw-bg-slate-100 dark:hover:tw-bg-moon-700 hover:tw-shadow-secondaryHover dark:hover:tw-shadow-secondaryHoverDark active:!tw-shadow-secondaryActive dark:active:!tw-shadow-secondaryActiveDark tw-transition-all tw-duration-150 active:tw-translate-y-2 tw-items-center tw-justify-center tw-font-semibold tw-text-inline tw-rounded-lg tw-select-none focus:tw-outline-none tw-px-4 tw-py-2 tw-flex tw-w-full">

                  <div data-view-component="true"
                    class="tw-text-slate-900 hover:tw-text-slate-900 focus:tw-text-slate-900 dark:tw-text-moon-50 dark:hover:tw-text-moon-50 dark:focus:tw-text-moon-50 tw-font-semibold tw-text-sm tw-leading-5">


                    <span data-settings-target="currencyText">USD</span>


                  </div>
                </button> <button data-action="click->settings#toggleDarkMode" type="button" data-view-component="true"
                  class="tw-bg-white dark:tw-bg-moon-800 !tw-border-t-2 !tw-border-x-2 !tw-border-slate-300 dark:!tw-border-moon-500 tw-shadow-secondaryShadow dark:tw-shadow-secondaryShadowDark !tw-mb-1 hover:tw-bg-slate-100 dark:hover:tw-bg-moon-700 hover:tw-shadow-secondaryHover dark:hover:tw-shadow-secondaryHoverDark active:!tw-shadow-secondaryActive dark:active:!tw-shadow-secondaryActiveDark tw-transition-all tw-duration-150 active:tw-translate-y-2 tw-items-center tw-justify-center tw-font-semibold tw-text-inline tw-rounded-lg tw-select-none focus:tw-outline-none tw-px-4 tw-py-2 tw-flex tw-w-full">

                  <div data-view-component="true"
                    class="tw-text-slate-900 hover:tw-text-slate-900 focus:tw-text-slate-900 dark:tw-text-moon-50 dark:hover:tw-text-moon-50 dark:focus:tw-text-moon-50 tw-font-semibold tw-text-sm tw-leading-5">


                    <i data-settings-target="darkModeButton" data-view-component="true" class="fas fa-fw fa-moon"></i>



                  </div>
                </button>
              </div>
            </div>

            <!-- Search -->
            <div data-controller="search-v2 button-ads targeting-ads"
              class="tw-flex flex-column tw-justify-center h-100 search-container tw-relative tw-py-2 2lg:tw-py-0">
              <div class="tw-relative tw-w-full" data-action="keydown->search-v2#onKeydown">
                <!-- Fake input to trigger search popover -->
                <div id="search-bar"
                  class="tw-flex tw-items-center tw-justify-between tw-bg-gray-100 tw-p-2.5 tw-w-full 2lg:tw-w-52 tw-text-xs tw-text-inline tw-rounded-lg hover:tw-bg-gray-200 dark:tw-bg-moon-800 dark:hover:tw-bg-moon-700"
                  data-action="click->search-v2#showSearchPopup click->button-ads#sendImpression"
                  data-search-v2-target="searchbar inputOverlay" data-index-trending-coins-target="searchbar">
                  <div style="display:flex;gap:3;"
                    class="tw-font-semibold tw-text-left tw-text-gray-500 dark:tw-text-moon-200">
                    <svg class="tw-px-1" width="24" height="15" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
                      <line x1="16" y1="16" x2="22" y2="22" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" />
                    </svg>
                    Search
                  </div>
                  <span
                    class="tw-hidden lg:tw-block tw-py-0.5 tw-px-2 tw-rounded-md tw-rounder-2 tw-bg-gray-300 tw-text-gray-500 dark:tw-text-moon-200 dark:tw-bg-moon-600">
                    /
                  </span>
                </div>

                <!-- Search popover -->
                <div id="search-popover"
                  class="search-results tw-w-full 2lg:tw-w-[768px] tw-max-h-[90vh] tw-right-0 tw-top-0 tw-rounded-md 2lg:tw-shadow-lg tw-hidden"
                  data-search-v2-target="searchPopup">
                  <!-- Search input field -->
                  <div
                    class="tw-flex tw-flex-row tw-items-center tw-px-2 2lg:tw-px-4 2lg:tw-py-2 tw-py-1 tw-shadow-sm 2lg:tw-shadow-none tw-rounded-lg">
                    <div>
                      <i class="far !tw-text-xs tw-ml-[2px] tw-mb-[5px] lg:tw-mb-0 lg:tw-mt-[2px] fa-search"></i>
                    </div>
                    <div class="tw-flex-1">
                      <input id="search-input-field"
                        class="tw-w-full tw-border-none tw-px-2 2lg:tw-py-2 search-input-dark dark:tw-text-white !tw-text-base 2lg:!tw-text-sm"
                        data-action="input->search-v2#onInputChanged focus->search-v2#onFocus"
                        data-search-v2-target="input"
                        placeholder="Search Token, Dex Pairs, NFT, Exchanges, Categories, Articles" autocomplete="off">
                    </div>
                    <div class="tw-flex tw-items-center">
                      <!-- TODO: remove dropdown conditionals along dropdown deprecation -->
                      <span data-action="click->search-v2#clearSearch" data-view-component="true"
                        class="tw-cursor-pointer tw-mr-2 lg:tw-hidden tw-inline-flex tw-items-center tw-px-1.5 tw-py-0.5 tw-bg-gray-100 dark:tw-bg-moon-400/20 tw-rounded-md">
                        <div data-view-component="true"
                          class="tw-text-xs tw-leading-4 tw-text-gray-700 dark:tw-text-moon-200 tw-font-medium">

                          Clear

                        </div>
                      </span><!-- TODO: remove dropdown conditionals along dropdown deprecation -->
                      <!-- TODO: remove dropdown conditionals along dropdown deprecation -->

                      <i data-action="click->search-v2#hideSearchPopup"
                        class="fas fa-times tw-text-xl 2lg:tw-text-base tw-p-3 tw-pr-0 2lg:tw-p-2 2lg:tw-pr-0 tw-text-gray-500 tw-text-base dark:tw-text-white dark:tw-opacity-60 tw-cursor-pointer"></i>
                    </div>
                  </div>
                  <div data-view-component="true"
                    class="tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-sm">


                    <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                  </div>
                  <div class="tw-flex tw-flex-col-reverse md:tw-grid md:tw-grid-cols-5">
                    <div class="md:tw-col-span-3 tw-pt-3 md:tw-pt-4 md:tw-px-4">
                      <div class="tw-mb-3" data-controller="remove-element" data-remove-element-target="element">
                        <div id="sponsored-search-desktop" class="md:tw-block" data-button-ads-target="body"
                          data-login-state-target="kevelAd"
                          data-ad-prop="{&quot;requestBody&quot;:{&quot;placements&quot;:[{&quot;count&quot;:1,&quot;siteId&quot;:1267711,&quot;adTypes&quot;:[2776],&quot;divName&quot;:&quot;multiWinner&quot;,&quot;zoneIds&quot;:[304109],&quot;networkId&quot;:11401}]},&quot;templateName&quot;:&quot;searchNew&quot;}"
                          data-cg-logo-url="https://static.coingecko.com/s/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg"
                          data-sponsored="Sponsored" data-search-v2-target="searchAd"
                          data-analytics-children-data="{&quot;event&quot;:&quot;select_ad_unit&quot;,&quot;event_properties&quot;:{&quot;ad_zone&quot;:&quot;sponsored_search&quot;}}">
                        </div>
                      </div>
                      <div class="md:tw-mb-3">
                        <div data-search-v2-target="defaultChips">
                          <div x-data="{ activeTab: 'trending' }" data-view-component="true">
                            <nav class="tw-overflow-x-auto tw-flex tw-gap-x-2.5 tw-gap-y-1.5 tw-whitespace-nowrap">
                              <a data-search-v2-target="chipTrendingCoin" data-action="click->search-v2#scrollToList"
                                data-scroll-target="search-coin-results" @click="activeTab = 'trending'"
                                :class="{ selected: activeTab === 'trending' }" id="tab-trending"
                                data-view-component="true" class="gecko-tab-chip-item selected">
                                <span data-view-component="true" class="tw-font-semibold tw-text-sm tw-leading-5">


                                  <i class="fa-solid fa-fire tw-mr-1"
                                    data-scroll-target="search-coin-results"></i>Trending


                                </span></a>

                              <a data-search-v2-target="chipTrendingNft" data-action="click->search-v2#scrollToList"
                                data-scroll-target="search-nft_contract-results" @click="activeTab = 'trending-nft'"
                                :class="{ selected: activeTab === 'trending-nft' }" id="tab-trending-nft"
                                data-view-component="true" class="gecko-tab-chip-item">
                                <span data-view-component="true" class="tw-font-semibold tw-text-sm tw-leading-5">


                                  <i class="fa-solid fa-image tw-mr-1"
                                    data-scroll-target="search-nft_contract-results"></i>NFTs


                                </span></a>

                              <a data-search-v2-target="chipTrendingCategory"
                                data-action="click->search-v2#scrollToList" data-scroll-target="search-category-results"
                                @click="activeTab = 'trending-categories'"
                                :class="{ selected: activeTab === 'trending-categories' }" id="tab-trending-categories"
                                data-view-component="true" class="gecko-tab-chip-item">
                                <span data-view-component="true" class="tw-font-semibold tw-text-sm tw-leading-5">


                                  <i class="fa-solid fa-shapes tw-mr-1"
                                    data-scroll-target="search-category-results"></i>Categories


                                </span></a>

                            </nav>

                            <div data-view-component="true"></div>
                          </div>
                        </div>
                        <div data-search-v2-target="userChips" class="tw-hidden">
                          <div x-data="{ activeTab: 'cryptocurrencies' }" data-view-component="true">
                            <nav
                              class="tw-overflow-x-auto tw-flex tw-gap-x-2.5 tw-gap-y-1.5 tw-whitespace-nowrap md:tw-flex-wrap md:tw-space-x-0">
                              <a data-search-v2-target="chipCoin" data-action="click->search-v2#scrollToList"
                                data-scroll-target="search-coin-results" @click="activeTab = 'cryptocurrencies'"
                                :class="{ selected: activeTab === 'cryptocurrencies' }" id="tab-cryptocurrencies"
                                data-view-component="true" class="tw-hidden gecko-tab-chip-item selected">
                                <span data-view-component="true" class="tw-font-semibold tw-text-sm tw-leading-5">


                                  <i class="fa-solid fa-coins tw-mr-1"
                                    data-scroll-target="search-coin-results"></i>Cryptocurrencies


                                </span></a>

                              <a data-search-v2-target="chipNft" data-action="click->search-v2#scrollToList"
                                data-scroll-target="search-nft_contract-results" @click="activeTab = 'nfts'"
                                :class="{ selected: activeTab === 'nfts' }" id="tab-nfts" data-view-component="true"
                                class="tw-hidden gecko-tab-chip-item">
                                <span data-view-component="true" class="tw-font-semibold tw-text-sm tw-leading-5">


                                  <i class="fa-solid fa-image tw-mr-1"
                                    data-scroll-target="search-nft_contract-results"></i>NFTs


                                </span></a>

                              <a data-search-v2-target="chipExchange" data-action="click->search-v2#scrollToList"
                                data-scroll-target="search-market-results" @click="activeTab = 'exchanges'"
                                :class="{ selected: activeTab === 'exchanges' }" id="tab-exchanges"
                                data-view-component="true" class="tw-hidden gecko-tab-chip-item">
                                <span data-view-component="true" class="tw-font-semibold tw-text-sm tw-leading-5">


                                  <i class="fa-solid fa-bank tw-mr-1"
                                    data-scroll-target="search-exchange-results"></i>Exchanges


                                </span></a>

                              <a data-search-v2-target="chipCategory" data-action="click->search-v2#scrollToList"
                                data-scroll-target="search-category-results" @click="activeTab = 'categories'"
                                :class="{ selected: activeTab === 'categories' }" id="tab-categories"
                                data-view-component="true" class="tw-hidden gecko-tab-chip-item">
                                <span data-view-component="true" class="tw-font-semibold tw-text-sm tw-leading-5">


                                  <i class="fa-solid fa-shapes tw-mr-1"
                                    data-scroll-target="search-category-results"></i>Categories


                                </span></a>

                              <a data-search-v2-target="chipChain" data-action="click->search-v2#scrollToList"
                                data-scroll-target="search-asset_platform-results" @click="activeTab = 'chains'"
                                :class="{ selected: activeTab === 'chains' }" id="tab-chains" data-view-component="true"
                                class="tw-hidden gecko-tab-chip-item">
                                <span data-view-component="true" class="tw-font-semibold tw-text-sm tw-leading-5">


                                  <i class="fa-solid fa-link tw-mr-1"
                                    data-scroll-target="search-chain-results"></i>Chains


                                </span></a>

                              <a data-search-v2-target="chipArticle" data-action="click->search-v2#scrollToList"
                                data-scroll-target="search-post-results" @click="activeTab = 'articles'"
                                :class="{ selected: activeTab === 'articles' }" id="tab-articles"
                                data-view-component="true" class="tw-hidden gecko-tab-chip-item">
                                <span data-view-component="true" class="tw-font-semibold tw-text-sm tw-leading-5">


                                  <i class="fa-solid fa-newspaper tw-mr-1"
                                    data-scroll-target="search-article-results"></i>Articles


                                </span></a>

                              <a data-search-v2-target="chipGt" data-action="click->search-v2#scrollToList"
                                data-scroll-target="search-gt-results" @click="activeTab = 'geckoterminal'"
                                :class="{ selected: activeTab === 'geckoterminal' }" id="tab-geckoterminal"
                                data-view-component="true" class="tw-hidden gecko-tab-chip-item">
                                <span data-view-component="true" class="tw-font-semibold tw-text-sm tw-leading-5">


                                  <i class="fa-solid fa-chart-candlestick tw-mr-1"
                                    data-scroll-target="search-gt-results"></i>GeckoTerminal


                                </span></a>

                            </nav>

                            <div data-view-component="true"></div>
                          </div>
                        </div>
                      </div>
                      <!-- Search results box -->
                      <div class="search-results-box tw-overflow-auto tw-h-full 2lg:tw-h-auto tw-pt-2 2lg:tw-pt-0"
                        data-search-v2-target="results" data-action="mouseover->search-v2#onMouseover"
                        data-url="https://www.coingecko.com/en/search_redirect"
                        data-search-trending="{&quot;coins&quot;:[{&quot;item&quot;:{&quot;id&quot;:&quot;kaito&quot;,&quot;coin_id&quot;:54411,&quot;name&quot;:&quot;KAITO&quot;,&quot;symbol&quot;:&quot;KAITO&quot;,&quot;market_cap_rank&quot;:135,&quot;thumb&quot;:&quot;https://assets.coingecko.com/coins/images/54411/standard/Qm4DW488_400x400.jpg?1739552780&quot;,&quot;small&quot;:&quot;https://assets.coingecko.com/coins/images/54411/small/Qm4DW488_400x400.jpg?1739552780&quot;,&quot;large&quot;:&quot;https://assets.coingecko.com/coins/images/54411/large/Qm4DW488_400x400.jpg?1739552780&quot;,&quot;slug&quot;:&quot;kaito&quot;,&quot;price_btc&quot;:2.6496316754567042e-05,&quot;score&quot;:0,&quot;data&quot;:{&quot;price&quot;:2.268913762362741,&quot;price_btc&quot;:&quot;0.00002649631675456704&quot;,&quot;price_change_percentage_24h&quot;:{&quot;aed&quot;:8.379561414860415,&quot;ars&quot;:8.379561414860394,&quot;aud&quot;:8.379561414860381,&quot;bch&quot;:11.278723940498441,&quot;bdt&quot;:8.379561414860355,&quot;bhd&quot;:8.379561414860405,&quot;bmd&quot;:8.379561414860389,&quot;bnb&quot;:6.064280310545707,&quot;brl&quot;:8.37956141486039,&quot;btc&quot;:8.559789536718894,&quot;cad&quot;:8.379561414860385,&quot;chf&quot;:8.379561414860403,&quot;clp&quot;:8.37956141486039,&quot;cny&quot;:8.379561414860428,&quot;czk&quot;:8.379561414860415,&quot;dkk&quot;:8.379561414860415,&quot;dot&quot;:9.986039630215695,&quot;eos&quot;:7.9779255052934595,&quot;eth&quot;:10.92743427089452,&quot;eur&quot;:8.379561414860394,&quot;gbp&quot;:8.37956141486041,&quot;gel&quot;:8.379561414860397,&quot;hkd&quot;:8.379561414860367,&quot;huf&quot;:8.37956141486042,&quot;idr&quot;:8.379561414860401,&quot;ils&quot;:8.379561414860442,&quot;inr&quot;:8.379561414860405,&quot;jpy&quot;:8.37956141486041,&quot;krw&quot;:8.37956141486033,&quot;kwd&quot;:8.379561414860397,&quot;lkr&quot;:8.37956141486039,&quot;ltc&quot;:14.512362222073019,&quot;mmk&quot;:8.379561414860389,&quot;mxn&quot;:8.379561414860405,&quot;myr&quot;:8.379561414860415,&quot;ngn&quot;:8.379561414860438,&quot;nok&quot;:8.3795614148604,&quot;nzd&quot;:8.379561414860433,&quot;php&quot;:8.379561414860403,&quot;pkr&quot;:8.379561414860415,&quot;pln&quot;:8.379561414860394,&quot;rub&quot;:8.37956141486041,&quot;sar&quot;:8.379561414860413,&quot;sek&quot;:8.379561414860403,&quot;sgd&quot;:8.379561414860422,&quot;thb&quot;:8.379561414860424,&quot;try&quot;:8.379561414860413,&quot;twd&quot;:8.379561414860435,&quot;uah&quot;:8.379561414860422,&quot;usd&quot;:8.379561414860389,&quot;vef&quot;:8.379561414860413,&quot;vnd&quot;:8.379561414860387,&quot;xag&quot;:8.3795614148604,&quot;xau&quot;:8.379561414860383,&quot;xdr&quot;:8.379561414860396,&quot;xlm&quot;:-1.8885884226970981,&quot;xrp&quot;:5.858057195109975,&quot;yfi&quot;:11.100571739522605,&quot;zar&quot;:8.379561414860394,&quot;bits&quot;:8.55978953671889,&quot;link&quot;:9.294456258255899,&quot;sats&quot;:8.559789536718895},&quot;market_cap&quot;:&quot;$548,669,970&quot;,&quot;market_cap_btc&quot;:&quot;6401.431902898116&quot;,&quot;total_volume&quot;:&quot;$766,071,272&quot;,&quot;total_volume_btc&quot;:&quot;8946.160671630654&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/coins/54411/sparkline.svg&quot;,&quot;content&quot;:null}}},{&quot;item&quot;:{&quot;id&quot;:&quot;sonic-3&quot;,&quot;coin_id&quot;:38108,&quot;name&quot;:&quot;Sonic (prev. FTM)&quot;,&quot;symbol&quot;:&quot;S&quot;,&quot;market_cap_rank&quot;:52,&quot;thumb&quot;:&quot;https://assets.coingecko.com/coins/images/38108/standard/200x200_Sonic_Logo.png?1734679256&quot;,&quot;small&quot;:&quot;https://assets.coingecko.com/coins/images/38108/small/200x200_Sonic_Logo.png?1734679256&quot;,&quot;large&quot;:&quot;https://assets.coingecko.com/coins/images/38108/large/200x200_Sonic_Logo.png?1734679256&quot;,&quot;slug&quot;:&quot;sonic&quot;,&quot;price_btc&quot;:8.396336660744576e-06,&quot;score&quot;:1,&quot;data&quot;:{&quot;price&quot;:0.718989132695605,&quot;price_btc&quot;:&quot;0.000008396336660744576&quot;,&quot;price_change_percentage_24h&quot;:{&quot;aed&quot;:-3.697403568817341,&quot;ars&quot;:-3.6974035688173488,&quot;aud&quot;:-3.697403568817352,&quot;bch&quot;:-1.074657806746269,&quot;bdt&quot;:-3.697403568817398,&quot;bhd&quot;:-3.6974035688173568,&quot;bmd&quot;:-3.6974035688173505,&quot;bnb&quot;:-5.710419582089766,&quot;brl&quot;:-3.6974035688173394,&quot;btc&quot;:-3.4909242650960195,&quot;cad&quot;:-3.69740356881736,&quot;chf&quot;:-3.6974035688173625,&quot;clp&quot;:-3.69740356881735,&quot;cny&quot;:-3.6974035688173332,&quot;czk&quot;:-3.697403568817366,&quot;dkk&quot;:-3.6974035688173443,&quot;dot&quot;:-2.2149027732102757,&quot;eos&quot;:-4.005629316251247,&quot;eth&quot;:-1.3844993778625059,&quot;eur&quot;:-3.6974035688173403,&quot;gbp&quot;:-3.697403568817338,&quot;gel&quot;:-3.6974035688173665,&quot;hkd&quot;:-3.697403568817361,&quot;huf&quot;:-3.697403568817332,&quot;idr&quot;:-3.6974035688173554,&quot;ils&quot;:-3.6974035688173235,&quot;inr&quot;:-3.6974035688173315,&quot;jpy&quot;:-3.6974035688174047,&quot;krw&quot;:-3.697403568817384,&quot;kwd&quot;:-3.697403568817355,&quot;lkr&quot;:-3.6974035688173736,&quot;ltc&quot;:1.8001626201116223,&quot;mmk&quot;:-3.697403568817343,&quot;mxn&quot;:-3.697403568817334,&quot;myr&quot;:-3.6974035688173283,&quot;ngn&quot;:-3.697403568817337,&quot;nok&quot;:-3.6974035688173537,&quot;nzd&quot;:-3.6974035688173377,&quot;php&quot;:-3.6974035688173568,&quot;pkr&quot;:-3.6974035688173346,&quot;pln&quot;:-3.697403568817361,&quot;rub&quot;:-3.6974035688173443,&quot;sar&quot;:-3.697403568817361,&quot;sek&quot;:-3.697403568817342,&quot;sgd&quot;:-3.697403568817334,&quot;thb&quot;:-3.6974035688173186,&quot;try&quot;:-3.6974035688173617,&quot;twd&quot;:-3.6974035688173332,&quot;uah&quot;:-3.697403568817352,&quot;usd&quot;:-3.6974035688173505,&quot;vef&quot;:-3.6974035688173443,&quot;vnd&quot;:-3.6974035688173488,&quot;xag&quot;:-3.697403568817325,&quot;xau&quot;:-3.6974035688173563,&quot;xdr&quot;:-3.697403568817359,&quot;xlm&quot;:-12.797128454179726,&quot;xrp&quot;:-5.890341548812959,&quot;yfi&quot;:-1.2826283804672238,&quot;zar&quot;:-3.6974035688173688,&quot;bits&quot;:-3.4909242650960293,&quot;link&quot;:-2.889000452087736,&quot;sats&quot;:-3.490924265096027},&quot;market_cap&quot;:&quot;$2,282,812,837&quot;,&quot;market_cap_btc&quot;:&quot;26657.77909835754&quot;,&quot;total_volume&quot;:&quot;$210,734,773&quot;,&quot;total_volume_btc&quot;:&quot;2460.955279795902&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/coins/38108/sparkline.svg&quot;,&quot;content&quot;:null}}},{&quot;item&quot;:{&quot;id&quot;:&quot;hedera-hashgraph&quot;,&quot;coin_id&quot;:3688,&quot;name&quot;:&quot;Hedera&quot;,&quot;symbol&quot;:&quot;HBAR&quot;,&quot;market_cap_rank&quot;:13,&quot;thumb&quot;:&quot;https://assets.coingecko.com/coins/images/3688/standard/hbar.png?1696504364&quot;,&quot;small&quot;:&quot;https://assets.coingecko.com/coins/images/3688/small/hbar.png?1696504364&quot;,&quot;large&quot;:&quot;https://assets.coingecko.com/coins/images/3688/large/hbar.png?1696504364&quot;,&quot;slug&quot;:&quot;hedera&quot;,&quot;price_btc&quot;:2.9126245729055897e-06,&quot;score&quot;:2,&quot;data&quot;:{&quot;price&quot;:0.24941179709147004,&quot;price_btc&quot;:&quot;0.000002912624572905589&quot;,&quot;price_change_percentage_24h&quot;:{&quot;aed&quot;:10.129119637377372,&quot;ars&quot;:10.129119637377388,&quot;aud&quot;:10.129119637377372,&quot;bch&quot;:13.128422797557038,&quot;bdt&quot;:10.129119637377329,&quot;bhd&quot;:10.129119637377396,&quot;bmd&quot;:10.129119637377388,&quot;bnb&quot;:7.827087401766238,&quot;brl&quot;:10.129119637377379,&quot;btc&quot;:10.365243945390375,&quot;cad&quot;:10.129119637377364,&quot;chf&quot;:10.129119637377386,&quot;clp&quot;:10.129119637377364,&quot;cny&quot;:10.129119637377391,&quot;czk&quot;:10.129119637377373,&quot;dkk&quot;:10.129119637377396,&quot;dot&quot;:11.824468605445828,&quot;eos&quot;:9.776640768972985,&quot;eth&quot;:12.774096115633371,&quot;eur&quot;:10.129119637377402,&quot;gbp&quot;:10.129119637377402,&quot;gel&quot;:10.12911963737737,&quot;hkd&quot;:10.129119637377375,&quot;huf&quot;:10.129119637377395,&quot;idr&quot;:10.129119637377384,&quot;ils&quot;:10.129119637377388,&quot;inr&quot;:10.1291196373774,&quot;jpy&quot;:10.129119637377313,&quot;krw&quot;:10.129119637377334,&quot;kwd&quot;:10.129119637377386,&quot;lkr&quot;:10.129119637377372,&quot;ltc&quot;:16.415991922981906,&quot;mmk&quot;:10.129119637377386,&quot;mxn&quot;:10.129119637377414,&quot;myr&quot;:10.129119637377421,&quot;ngn&quot;:10.1291196373774,&quot;nok&quot;:10.12911963737737,&quot;nzd&quot;:10.129119637377402,&quot;php&quot;:10.129119637377384,&quot;pkr&quot;:10.129119637377396,&quot;pln&quot;:10.129119637377386,&quot;rub&quot;:10.129119637377379,&quot;sar&quot;:10.129119637377375,&quot;sek&quot;:10.129119637377402,&quot;sgd&quot;:10.1291196373774,&quot;thb&quot;:10.129119637377414,&quot;try&quot;:10.129119637377373,&quot;twd&quot;:10.129119637377395,&quot;uah&quot;:10.12911963737739,&quot;usd&quot;:10.129119637377388,&quot;vef&quot;:10.129119637377388,&quot;vnd&quot;:10.12911963737739,&quot;xag&quot;:10.129119637377404,&quot;xau&quot;:10.129119637377384,&quot;xdr&quot;:10.129119637377377,&quot;xlm&quot;:-0.2770867132833733,&quot;xrp&quot;:7.621333366745901,&quot;yfi&quot;:12.890593112344575,&quot;zar&quot;:10.12911963737734,&quot;bits&quot;:10.365243945390377,&quot;link&quot;:11.053588206832456,&quot;sats&quot;:10.365243945390393},&quot;market_cap&quot;:&quot;$10,461,280,015&quot;,&quot;market_cap_btc&quot;:&quot;122108.485566569&quot;,&quot;total_volume&quot;:&quot;$1,000,230,206&quot;,&quot;total_volume_btc&quot;:&quot;11680.66271093505&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/coins/3688/sparkline.svg&quot;,&quot;content&quot;:{&quot;title&quot;:&quot;What is Hedera?&quot;,&quot;description&quot;:&quot;Hedera is a decentralized public network where developers can build secure, fair applications with near real-time consensus. The platform is owned and governed by a council of global innovators including Avery Dennison, Boeing, Deutsche Telekom, DLA Piper, FIS (WorldPay), Google, IBM, LG Electronics, Magalu, Nomura, Swirlds, Tata Communications, University College London (UCL), Wipro, and Zain Group.&nbsp;&quot;}}}},{&quot;item&quot;:{&quot;id&quot;:&quot;bitcoin&quot;,&quot;coin_id&quot;:1,&quot;name&quot;:&quot;Bitcoin&quot;,&quot;symbol&quot;:&quot;BTC&quot;,&quot;market_cap_rank&quot;:1,&quot;thumb&quot;:&quot;https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400&quot;,&quot;small&quot;:&quot;https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1696501400&quot;,&quot;large&quot;:&quot;https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400&quot;,&quot;slug&quot;:&quot;bitcoin&quot;,&quot;price_btc&quot;:1.0,&quot;score&quot;:3,&quot;data&quot;:{&quot;price&quot;:85623.02760309391,&quot;price_btc&quot;:&quot;1.0&quot;,&quot;price_change_percentage_24h&quot;:{&quot;aed&quot;:-0.2552150394389796,&quot;ars&quot;:-0.2552150394389772,&quot;aud&quot;:-0.2552150394389804,&quot;bch&quot;:2.461276745192674,&quot;bdt&quot;:-0.25521503943903673,&quot;bhd&quot;:-0.25521503943897766,&quot;bmd&quot;:-0.2552150394389894,&quot;bnb&quot;:-2.340183221054962,&quot;brl&quot;:-0.2552150394389717,&quot;btc&quot;:0.0,&quot;cad&quot;:-0.2552150394389926,&quot;chf&quot;:-0.2552150394389986,&quot;clp&quot;:-0.2552150394390063,&quot;cny&quot;:-0.2552150394389719,&quot;czk&quot;:-0.2552150394389931,&quot;dkk&quot;:-0.2552150394389624,&quot;dot&quot;:1.2802754721523337,&quot;eos&quot;:-0.5744578432305926,&quot;eth&quot;:2.1403603625807124,&quot;eur&quot;:-0.2552150394389633,&quot;gbp&quot;:-0.2552150394389659,&quot;gel&quot;:-0.25521503943898144,&quot;hkd&quot;:-0.2552150394389804,&quot;huf&quot;:-0.2552150394389812,&quot;idr&quot;:-0.25521503943899876,&quot;ils&quot;:-0.255215039438978,&quot;inr&quot;:-0.25521503943897017,&quot;jpy&quot;:-0.255215039439031,&quot;krw&quot;:-0.25521503943901896,&quot;kwd&quot;:-0.25521503943897406,&quot;lkr&quot;:-0.2552150394389957,&quot;ltc&quot;:5.438853216685578,&quot;mmk&quot;:-0.2552150394389901,&quot;mxn&quot;:-0.25521503943896884,&quot;myr&quot;:-0.2552150394389563,&quot;ngn&quot;:-0.25521503943896456,&quot;nok&quot;:-0.25521503943899015,&quot;nzd&quot;:-0.2552150394389549,&quot;php&quot;:-0.2552150394389937,&quot;pkr&quot;:-0.2552150394389606,&quot;pln&quot;:-0.25521503943897333,&quot;rub&quot;:-0.25521503943897395,&quot;sar&quot;:-0.255215039438986,&quot;sek&quot;:-0.2552150394389746,&quot;sgd&quot;:-0.25521503943896134,&quot;thb&quot;:-0.25521503943894647,&quot;try&quot;:-0.25521503943898227,&quot;twd&quot;:-0.2552150394389707,&quot;uah&quot;:-0.2552150394389787,&quot;usd&quot;:-0.2552150394389894,&quot;vef&quot;:-0.25521503943898605,&quot;vnd&quot;:-0.2552150394389832,&quot;xag&quot;:-0.2552150394389553,&quot;xau&quot;:-0.25521503943897134,&quot;xdr&quot;:-0.2552150394389947,&quot;xlm&quot;:-9.680195626949306,&quot;xrp&quot;:-2.5265362223814867,&quot;yfi&quot;:2.245872582452903,&quot;zar&quot;:-0.2552150394390162,&quot;bits&quot;:-0.04135544985661114,&quot;link&quot;:0.5820832061723206,&quot;sats&quot;:-0.04135544985660509},&quot;market_cap&quot;:&quot;$1,698,795,854,172&quot;,&quot;market_cap_btc&quot;:&quot;19831103.0&quot;,&quot;total_volume&quot;:&quot;$27,001,542,165&quot;,&quot;total_volume_btc&quot;:&quot;315323.3172388352&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/coins/1/sparkline.svg&quot;,&quot;content&quot;:{&quot;title&quot;:&quot;About Bitcoin (BTC)&quot;,&quot;description&quot;:&quot;Bitcoin (BTC) is the first cryptocurrency built on blockchain technology, also known as a decentralized digital currency that is based on cryptography. Unlike government-issued or fiat currencies such as US Dollars or Euro which are controlled by central banks, Bitcoin can operate without the need of a central authority like a central bank or a company.&nbsp;The decentralized nature allows it to operate on a peer-to-peer network whereby users are able to send funds to each other without going through intermediaries.&quot;}}}},{&quot;item&quot;:{&quot;id&quot;:&quot;ethereum&quot;,&quot;coin_id&quot;:279,&quot;name&quot;:&quot;Ethereum&quot;,&quot;symbol&quot;:&quot;ETH&quot;,&quot;market_cap_rank&quot;:2,&quot;thumb&quot;:&quot;https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628&quot;,&quot;small&quot;:&quot;https://assets.coingecko.com/coins/images/279/small/ethereum.png?1696501628&quot;,&quot;large&quot;:&quot;https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628&quot;,&quot;slug&quot;:&quot;ethereum&quot;,&quot;price_btc&quot;:0.02593245843069821,&quot;score&quot;:4,&quot;data&quot;:{&quot;price&quot;:2220.6298471718396,&quot;price_btc&quot;:&quot;0.02593245843069821&quot;,&quot;price_change_percentage_24h&quot;:{&quot;aed&quot;:-2.346024954298134,&quot;ars&quot;:-2.3460249542981186,&quot;aud&quot;:-2.3460249542981373,&quot;bch&quot;:0.31352482620579275,&quot;bdt&quot;:-2.346024954298185,&quot;bhd&quot;:-2.346024954298133,&quot;bmd&quot;:-2.3460249542981324,&quot;bnb&quot;:-4.3872888746035095,&quot;brl&quot;:-2.3460249542981337,&quot;btc&quot;:-2.136648203096366,&quot;cad&quot;:-2.3460249542981395,&quot;chf&quot;:-2.3460249542981457,&quot;clp&quot;:-2.3460249542981635,&quot;cny&quot;:-2.3460249542981195,&quot;czk&quot;:-2.3460249542981595,&quot;dkk&quot;:-2.346024954298124,&quot;dot&quot;:-0.8427207749253688,&quot;eos&quot;:-2.6585759193166374,&quot;eth&quot;:0.0,&quot;eur&quot;:-2.3460249542981444,&quot;gbp&quot;:-2.3460249542981364,&quot;gel&quot;:-2.3460249542981515,&quot;hkd&quot;:-2.3460249542981466,&quot;huf&quot;:-2.346024954298138,&quot;idr&quot;:-2.346024954298157,&quot;ils&quot;:-2.3460249542981195,&quot;inr&quot;:-2.346024954298127,&quot;jpy&quot;:-2.346024954298197,&quot;krw&quot;:-2.346024954298184,&quot;kwd&quot;:-2.346024954298132,&quot;lkr&quot;:-2.346024954298152,&quot;ltc&quot;:3.228686541766261,&quot;mmk&quot;:-2.346024954298139,&quot;mxn&quot;:-2.346024954298121,&quot;myr&quot;:-2.346024954298107,&quot;ngn&quot;:-2.3460249542981275,&quot;nok&quot;:-2.3460249542981324,&quot;nzd&quot;:-2.3460249542981315,&quot;php&quot;:-2.346024954298143,&quot;pkr&quot;:-2.346024954298134,&quot;pln&quot;:-2.3460249542981293,&quot;rub&quot;:-2.3460249542981306,&quot;sar&quot;:-2.3460249542981275,&quot;sek&quot;:-2.3460249542981377,&quot;sgd&quot;:-2.34602495429811,&quot;thb&quot;:-2.3460249542981115,&quot;try&quot;:-2.3460249542981373,&quot;twd&quot;:-2.346024954298145,&quot;uah&quot;:-2.346024954298143,&quot;usd&quot;:-2.3460249542981324,&quot;vef&quot;:-2.34602495429814,&quot;vnd&quot;:-2.3460249542981337,&quot;xag&quot;:-2.3460249542981177,&quot;xau&quot;:-2.3460249542981364,&quot;xdr&quot;:-2.3460249542981524,&quot;xlm&quot;:-11.573442903646335,&quot;xrp&quot;:-4.569735619547888,&quot;yfi&quot;:0.10263587856561912,&quot;zar&quot;:-2.3460249542981773,&quot;bits&quot;:-2.13664820309637,&quot;link&quot;:-1.52627781648971,&quot;sats&quot;:-2.1366482030963696},&quot;market_cap&quot;:&quot;$267,688,217,142&quot;,&quot;market_cap_btc&quot;:&quot;3124570.105433568&quot;,&quot;total_volume&quot;:&quot;$15,441,273,918&quot;,&quot;total_volume_btc&quot;:&quot;180322.8009916163&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/coins/279/sparkline.svg&quot;,&quot;content&quot;:{&quot;title&quot;:&quot;What is Ethereum?&quot;,&quot;description&quot;:&quot;Ethereum is a Proof-of-Stake blockchain that powers decentralized applications (dApps) through smart contracts, without being controlled by a centralized entity. As the first blockchain to feature smart contracts, it has the largest ecosystem of decentralized applications, ranging from decentralized exchanges to crypto lending and borrowing platforms and more.&nbsp;&quot;}}}},{&quot;item&quot;:{&quot;id&quot;:&quot;story-2&quot;,&quot;coin_id&quot;:54035,&quot;name&quot;:&quot;Story&quot;,&quot;symbol&quot;:&quot;IP&quot;,&quot;market_cap_rank&quot;:70,&quot;thumb&quot;:&quot;https://assets.coingecko.com/coins/images/54035/standard/Transparent_bg.png?1738075331&quot;,&quot;small&quot;:&quot;https://assets.coingecko.com/coins/images/54035/small/Transparent_bg.png?1738075331&quot;,&quot;large&quot;:&quot;https://assets.coingecko.com/coins/images/54035/large/Transparent_bg.png?1738075331&quot;,&quot;slug&quot;:&quot;story&quot;,&quot;price_btc&quot;:6.322558037439852e-05,&quot;score&quot;:5,&quot;data&quot;:{&quot;price&quot;:5.414087956965492,&quot;price_btc&quot;:&quot;0.00006322558037439852&quot;,&quot;price_change_percentage_24h&quot;:{&quot;aed&quot;:-4.877501948520927,&quot;ars&quot;:-4.877501948520948,&quot;aud&quot;:-4.8775019485209254,&quot;bch&quot;:-2.286895486311884,&quot;bdt&quot;:-4.877501948520985,&quot;bhd&quot;:-4.877501948520932,&quot;bmd&quot;:-4.877501948520931,&quot;bnb&quot;:-6.865850330559983,&quot;brl&quot;:-4.877501948520936,&quot;btc&quot;:-4.673552855830188,&quot;cad&quot;:-4.877501948520953,&quot;chf&quot;:-4.87750194852094,&quot;clp&quot;:-4.87750194852095,&quot;cny&quot;:-4.877501948520928,&quot;czk&quot;:-4.877501948520963,&quot;dkk&quot;:-4.877501948520921,&quot;dot&quot;:-3.4131678156170464,&quot;eos&quot;:-5.181950677280285,&quot;eth&quot;:-2.5929402383433975,&quot;eur&quot;:-4.8775019485209254,&quot;gbp&quot;:-4.877501948520935,&quot;gel&quot;:-4.877501948520937,&quot;hkd&quot;:-4.877501948520946,&quot;huf&quot;:-4.877501948520928,&quot;idr&quot;:-4.877501948520942,&quot;ils&quot;:-4.877501948520923,&quot;inr&quot;:-4.877501948520928,&quot;jpy&quot;:-4.87750194852099,&quot;krw&quot;:-4.877501948520967,&quot;kwd&quot;:-4.877501948520945,&quot;lkr&quot;:-4.877501948520958,&quot;ltc&quot;:0.5526967010862489,&quot;mmk&quot;:-4.877501948520948,&quot;mxn&quot;:-4.877501948520924,&quot;myr&quot;:-4.877501948520915,&quot;ngn&quot;:-4.877501948520928,&quot;nok&quot;:-4.877501948520938,&quot;nzd&quot;:-4.877501948520936,&quot;php&quot;:-4.87750194852095,&quot;pkr&quot;:-4.877501948520921,&quot;pln&quot;:-4.877501948520938,&quot;rub&quot;:-4.877501948520934,&quot;sar&quot;:-4.877501948520955,&quot;sek&quot;:-4.877501948520935,&quot;sgd&quot;:-4.877501948520921,&quot;thb&quot;:-4.877501948520903,&quot;try&quot;:-4.877501948520941,&quot;twd&quot;:-4.877501948520924,&quot;uah&quot;:-4.877501948520947,&quot;usd&quot;:-4.877501948520931,&quot;vef&quot;:-4.877501948520927,&quot;vnd&quot;:-4.877501948520928,&quot;xag&quot;:-4.87750194852091,&quot;xau&quot;:-4.877501948520932,&quot;xdr&quot;:-4.877501948520946,&quot;xlm&quot;:-13.865718203888704,&quot;xrp&quot;:-7.0435675216149045,&quot;yfi&quot;:-2.492317574881176,&quot;zar&quot;:-4.877501948520965,&quot;bits&quot;:-4.6735528558302,&quot;link&quot;:-4.079005056997634,&quot;sats&quot;:-4.67355285583019},&quot;market_cap&quot;:&quot;$1,393,419,273&quot;,&quot;market_cap_btc&quot;:&quot;16256.70341977972&quot;,&quot;total_volume&quot;:&quot;$186,464,487&quot;,&quot;total_volume_btc&quot;:&quot;2177.527501375856&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/coins/54035/sparkline.svg&quot;,&quot;content&quot;:null}}},{&quot;item&quot;:{&quot;id&quot;:&quot;solana&quot;,&quot;coin_id&quot;:4128,&quot;name&quot;:&quot;Solana&quot;,&quot;symbol&quot;:&quot;SOL&quot;,&quot;market_cap_rank&quot;:6,&quot;thumb&quot;:&quot;https://assets.coingecko.com/coins/images/4128/standard/solana.png?1718769756&quot;,&quot;small&quot;:&quot;https://assets.coingecko.com/coins/images/4128/small/solana.png?1718769756&quot;,&quot;large&quot;:&quot;https://assets.coingecko.com/coins/images/4128/large/solana.png?1718769756&quot;,&quot;slug&quot;:&quot;solana&quot;,&quot;price_btc&quot;:0.0016799914778373123,&quot;score&quot;:6,&quot;data&quot;:{&quot;price&quot;:143.85983606797666,&quot;price_btc&quot;:&quot;0.001679991477837312&quot;,&quot;price_change_percentage_24h&quot;:{&quot;aed&quot;:-1.7799177763918494,&quot;ars&quot;:-1.7799177763918457,&quot;aud&quot;:-1.7799177763918514,&quot;bch&quot;:0.895049607133738,&quot;bdt&quot;:-1.7799177763919045,&quot;bhd&quot;:-1.7799177763918466,&quot;bmd&quot;:-1.7799177763918457,&quot;bnb&quot;:-3.833015051732131,&quot;brl&quot;:-1.7799177763918457,&quot;btc&quot;:-1.5693272529735827,&quot;cad&quot;:-1.779917776391866,&quot;chf&quot;:-1.7799177763918532,&quot;clp&quot;:-1.7799177763918588,&quot;cny&quot;:-1.7799177763918508,&quot;czk&quot;:-1.7799177763918765,&quot;dkk&quot;:-1.7799177763918372,&quot;dot&quot;:-0.2678988336300721,&quot;eos&quot;:-2.094280622029391,&quot;eth&quot;:0.5790387650680613,&quot;eur&quot;:-1.7799177763918355,&quot;gbp&quot;:-1.7799177763918441,&quot;gel&quot;:-1.7799177763918526,&quot;hkd&quot;:-1.7799177763918619,&quot;huf&quot;:-1.7799177763918546,&quot;idr&quot;:-1.7799177763918692,&quot;ils&quot;:-1.779917776391851,&quot;inr&quot;:-1.7799177763918383,&quot;jpy&quot;:-1.7799177763919145,&quot;krw&quot;:-1.7799177763918823,&quot;kwd&quot;:-1.7799177763918514,&quot;lkr&quot;:-1.7799177763918768,&quot;ltc&quot;:3.8271107266474402,&quot;mmk&quot;:-1.779917776391852,&quot;mxn&quot;:-1.7799177763918415,&quot;myr&quot;:-1.779917776391841,&quot;ngn&quot;:-1.779917776391836,&quot;nok&quot;:-1.7799177763918574,&quot;nzd&quot;:-1.7799177763918428,&quot;php&quot;:-1.7799177763918532,&quot;pkr&quot;:-1.7799177763918337,&quot;pln&quot;:-1.7799177763918619,&quot;rub&quot;:-1.7799177763918526,&quot;sar&quot;:-1.7799177763918466,&quot;sek&quot;:-1.779917776391849,&quot;sgd&quot;:-1.7799177763918321,&quot;thb&quot;:-1.779917776391828,&quot;try&quot;:-1.7799177763918717,&quot;twd&quot;:-1.7799177763918361,&quot;uah&quot;:-1.7799177763918594,&quot;usd&quot;:-1.7799177763918457,&quot;vef&quot;:-1.7799177763918477,&quot;vnd&quot;:-1.7799177763918428,&quot;xag&quot;:-1.7799177763918397,&quot;xau&quot;:-1.7799177763918441,&quot;xdr&quot;:-1.7799177763918674,&quot;xlm&quot;:-11.06082773701991,&quot;xrp&quot;:-4.016519453693036,&quot;yfi&quot;:0.6829381209646008,&quot;zar&quot;:-1.7799177763918987,&quot;bits&quot;:-1.5693272529735722,&quot;link&quot;:-0.9554185049548158,&quot;sats&quot;:-1.5693272529735753},&quot;market_cap&quot;:&quot;$73,019,319,356&quot;,&quot;market_cap_btc&quot;:&quot;852475.649420331&quot;,&quot;total_volume&quot;:&quot;$3,152,969,561&quot;,&quot;total_volume_btc&quot;:&quot;36820.29770523767&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/coins/4128/sparkline.svg&quot;,&quot;content&quot;:{&quot;title&quot;:&quot;About Solana (SOL)&quot;,&quot;description&quot;:&quot;Solana is a Layer 1 blockchain that offers users fast speeds and affordable costs. It supports smart contracts and facilitates the creation of decentralized applications (dApps). Projects built on Solana include a variety of DeFi platforms as well as NFT marketplaces, where users can buy Solana-based NFT projects. Its high performance means Solana doesn’t require a traditional scaling Layer 2 solution; instead, Layer 2s on Solana focus on interoperability and connecting Solana to other chains.&nbsp;&quot;}}}}],&quot;nft&quot;:[{&quot;id&quot;:&quot;nakamigos&quot;,&quot;name&quot;:&quot;Nakamigos&quot;,&quot;symbol&quot;:&quot;NKMGS&quot;,&quot;thumb&quot;:&quot;https://assets.coingecko.com/nft_contracts/images/3134/standard/nakamigos.png?1707289851&quot;,&quot;nft_contract_id&quot;:3134,&quot;native_currency_symbol&quot;:&quot;eth&quot;,&quot;floor_price_in_native_currency&quot;:0.1648,&quot;floor_price_24h_percentage_change&quot;:48.31023918975824,&quot;data&quot;:{&quot;floor_price&quot;:&quot;0.16 ETH&quot;,&quot;floor_price_in_usd_24h_percentage_change&quot;:&quot;48.31023918975824&quot;,&quot;h24_volume&quot;:&quot;18.85 ETH&quot;,&quot;h24_average_sale_price&quot;:&quot;0.16 ETH&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/nft/3134/sparkline.svg&quot;,&quot;content&quot;:null}},{&quot;id&quot;:&quot;chronoforge&quot;,&quot;name&quot;:&quot;PXQuest Adventurer&quot;,&quot;symbol&quot;:&quot;PXQ&quot;,&quot;thumb&quot;:&quot;https://assets.coingecko.com/nft_contracts/images/3660/standard/chronoforge.png?1707290130&quot;,&quot;nft_contract_id&quot;:3660,&quot;native_currency_symbol&quot;:&quot;eth&quot;,&quot;floor_price_in_native_currency&quot;:0.32,&quot;floor_price_24h_percentage_change&quot;:25.51068595995748,&quot;data&quot;:{&quot;floor_price&quot;:&quot;0.32 ETH&quot;,&quot;floor_price_in_usd_24h_percentage_change&quot;:&quot;25.51068595995748&quot;,&quot;h24_volume&quot;:&quot;6.15 ETH&quot;,&quot;h24_average_sale_price&quot;:&quot;0.41 ETH&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/nft/3660/sparkline.svg&quot;,&quot;content&quot;:null}},{&quot;id&quot;:&quot;kanpai-pandas&quot;,&quot;name&quot;:&quot;Kanpai Pandas&quot;,&quot;symbol&quot;:&quot;YKPS&quot;,&quot;thumb&quot;:&quot;https://assets.coingecko.com/nft_contracts/images/1554/standard/kanpai-pandas.png?1707287899&quot;,&quot;nft_contract_id&quot;:1554,&quot;native_currency_symbol&quot;:&quot;eth&quot;,&quot;floor_price_in_native_currency&quot;:0.564,&quot;floor_price_24h_percentage_change&quot;:23.8576192257457,&quot;data&quot;:{&quot;floor_price&quot;:&quot;0.56 ETH&quot;,&quot;floor_price_in_usd_24h_percentage_change&quot;:&quot;23.8576192257457&quot;,&quot;h24_volume&quot;:&quot;13.79 ETH&quot;,&quot;h24_average_sale_price&quot;:&quot;0.49 ETH&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/nft/1554/sparkline.svg&quot;,&quot;content&quot;:null}},{&quot;id&quot;:&quot;rektguy&quot;,&quot;name&quot;:&quot;rektguy&quot;,&quot;symbol&quot;:&quot;Rektguy&quot;,&quot;thumb&quot;:&quot;https://assets.coingecko.com/nft_contracts/images/396/standard/rektguy.gif?1707287298&quot;,&quot;nft_contract_id&quot;:396,&quot;native_currency_symbol&quot;:&quot;eth&quot;,&quot;floor_price_in_native_currency&quot;:0.29999,&quot;floor_price_24h_percentage_change&quot;:18.56702822125518,&quot;data&quot;:{&quot;floor_price&quot;:&quot;0.30 ETH&quot;,&quot;floor_price_in_usd_24h_percentage_change&quot;:&quot;18.56702822125518&quot;,&quot;h24_volume&quot;:&quot;5.94 ETH&quot;,&quot;h24_average_sale_price&quot;:&quot;0.28 ETH&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/nft/396/sparkline.svg&quot;,&quot;content&quot;:null}},{&quot;id&quot;:&quot;digidaigaku&quot;,&quot;name&quot;:&quot;DigiDaigaku&quot;,&quot;symbol&quot;:&quot;dida&quot;,&quot;thumb&quot;:&quot;https://assets.coingecko.com/nft_contracts/images/1297/standard/fe93ea8b5aed4dfcebd9feadc13a8574.png?1707287755&quot;,&quot;nft_contract_id&quot;:1297,&quot;native_currency_symbol&quot;:&quot;eth&quot;,&quot;floor_price_in_native_currency&quot;:2.29,&quot;floor_price_24h_percentage_change&quot;:14.52916961110899,&quot;data&quot;:{&quot;floor_price&quot;:&quot;2.29 ETH&quot;,&quot;floor_price_in_usd_24h_percentage_change&quot;:&quot;14.52916961110899&quot;,&quot;h24_volume&quot;:&quot;5.85 ETH&quot;,&quot;h24_average_sale_price&quot;:&quot;1.95 ETH&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/nft/1297/sparkline.svg&quot;,&quot;content&quot;:null}},{&quot;id&quot;:&quot;claynosaurz&quot;,&quot;name&quot;:&quot;Claynosaurz&quot;,&quot;symbol&quot;:&quot;CLAYNOSAURZ&quot;,&quot;thumb&quot;:&quot;https://assets.coingecko.com/nft_contracts/images/2446/standard/claynosaurz.gif?1707288361&quot;,&quot;nft_contract_id&quot;:2446,&quot;native_currency_symbol&quot;:&quot;sol&quot;,&quot;floor_price_in_native_currency&quot;:15.5,&quot;floor_price_24h_percentage_change&quot;:14.30681764920942,&quot;data&quot;:{&quot;floor_price&quot;:&quot;15.50 SOL&quot;,&quot;floor_price_in_usd_24h_percentage_change&quot;:&quot;14.30681764920942&quot;,&quot;h24_volume&quot;:&quot;252.66 SOL&quot;,&quot;h24_average_sale_price&quot;:&quot;14.86 SOL&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/nft/2446/sparkline.svg&quot;,&quot;content&quot;:null}},{&quot;id&quot;:&quot;quantum-cats&quot;,&quot;name&quot;:&quot;Quantum Cats&quot;,&quot;symbol&quot;:&quot;QUANTUM_CATS&quot;,&quot;thumb&quot;:&quot;https://assets.coingecko.com/nft_contracts/images/4067/standard/quantum-cats.png?1707290320&quot;,&quot;nft_contract_id&quot;:4067,&quot;native_currency_symbol&quot;:&quot;btc&quot;,&quot;floor_price_in_native_currency&quot;:0.205,&quot;floor_price_24h_percentage_change&quot;:10.8759055998956,&quot;data&quot;:{&quot;floor_price&quot;:&quot;0.21 BTC&quot;,&quot;floor_price_in_usd_24h_percentage_change&quot;:&quot;10.8759055998956&quot;,&quot;h24_volume&quot;:&quot;2.49 BTC&quot;,&quot;h24_average_sale_price&quot;:&quot;0.19 BTC&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/nft/4067/sparkline.svg&quot;,&quot;content&quot;:null}}],&quot;exchanges&quot;:[]}"
                        data-search-trending-categories="[{&quot;id&quot;:508,&quot;name&quot;:&quot;Binance HODLer Airdrops&quot;,&quot;market_cap_1h_change&quot;:1.0258962703474923,&quot;slug&quot;:&quot;binance-hodler-airdrops&quot;,&quot;coins_count&quot;:&quot;11&quot;,&quot;data&quot;:{&quot;market_cap&quot;:3673668476.488437,&quot;market_cap_btc&quot;:42900.73710809222,&quot;total_volume&quot;:1473669409.3576264,&quot;total_volume_btc&quot;:17209.365602723312,&quot;market_cap_change_percentage_24h&quot;:{&quot;aed&quot;:0.2284518949133642,&quot;ars&quot;:0.22845189491337356,&quot;aud&quot;:0.22845189491338694,&quot;bch&quot;:0.21375094618867158,&quot;bdt&quot;:0.22845189491336296,&quot;bhd&quot;:0.2284518949133677,&quot;bmd&quot;:0.22845189491337692,&quot;bnb&quot;:-3.183374337801085,&quot;brl&quot;:0.22845189491338092,&quot;btc&quot;:-1.3056689228461882,&quot;cad&quot;:0.22845189491342782,&quot;chf&quot;:0.22845189491337972,&quot;clp&quot;:0.22845189491337378,&quot;cny&quot;:0.22845189491340137,&quot;czk&quot;:0.22845189491334464,&quot;dkk&quot;:0.22845189491336584,&quot;dot&quot;:0.8298626093271693,&quot;eos&quot;:-0.7868075365493804,&quot;eth&quot;:0.8661359066478506,&quot;eur&quot;:0.2284518949133717,&quot;gbp&quot;:0.2284518949133731,&quot;gel&quot;:0.22845189491338355,&quot;hkd&quot;:0.22845189491337398,&quot;huf&quot;:0.22845189491337298,&quot;idr&quot;:0.22845189491337617,&quot;ils&quot;:0.22845189491336168,&quot;inr&quot;:0.22845189491338258,&quot;jpy&quot;:0.2284518949133571,&quot;krw&quot;:0.2284518949134046,&quot;kwd&quot;:0.22845189491335552,&quot;lkr&quot;:0.22845189491341958,&quot;ltc&quot;:4.192587803859231,&quot;mmk&quot;:0.2284518949133629,&quot;mxn&quot;:0.22845189491335285,&quot;myr&quot;:0.2284518949133633,&quot;ngn&quot;:0.22845189491341103,&quot;nok&quot;:0.22845189491335727,&quot;nzd&quot;:0.22845189491345264,&quot;php&quot;:0.22845189491338827,&quot;pkr&quot;:0.228451894913408,&quot;pln&quot;:0.2284518949133868,&quot;rub&quot;:0.2284518949133815,&quot;sar&quot;:0.2284518949133912,&quot;sek&quot;:0.22845189491338663,&quot;sgd&quot;:0.22845189491345003,&quot;thb&quot;:0.22844896748220692,&quot;try&quot;:0.22845189491336246,&quot;twd&quot;:0.22845189491336407,&quot;uah&quot;:0.22845189491337084,&quot;usd&quot;:0.22845189491337692,&quot;vef&quot;:0.22845189491338636,&quot;vnd&quot;:0.22845189491336815,&quot;xag&quot;:0.22845189491336923,&quot;xau&quot;:0.22845189491335205,&quot;xdr&quot;:0.22845189491339205,&quot;xlm&quot;:-12.453573059321661,&quot;xrp&quot;:-4.5399800759937134,&quot;yfi&quot;:1.7692884773304947,&quot;zar&quot;:0.22845189491338502,&quot;bits&quot;:-1.3056689228461813,&quot;link&quot;:0.25715327108071884,&quot;sats&quot;:-1.305668922846189},&quot;sparkline&quot;:&quot;https://www.coingecko.com/categories/508/sparkline.svg&quot;}},{&quot;id&quot;:251,&quot;name&quot;:&quot;Solana Meme&quot;,&quot;market_cap_1h_change&quot;:0.20303947595912714,&quot;slug&quot;:&quot;solana-meme-coins&quot;,&quot;coins_count&quot;:&quot;1234&quot;,&quot;data&quot;:{&quot;market_cap&quot;:9003950090.213072,&quot;market_cap_btc&quot;:105147.23857821959,&quot;total_volume&quot;:2689015255.889881,&quot;total_volume_btc&quot;:31402.05418940018,&quot;market_cap_change_percentage_24h&quot;:{&quot;aed&quot;:-1.9885881073853056,&quot;ars&quot;:-1.9885881073853247,&quot;aud&quot;:-1.988588107385348,&quot;bch&quot;:-1.9417475646760753,&quot;bdt&quot;:-1.9885881073852592,&quot;bhd&quot;:-1.9885881073853269,&quot;bmd&quot;:-1.9885881073853195,&quot;bnb&quot;:-5.31075298597811,&quot;brl&quot;:-1.9885881073853287,&quot;btc&quot;:-3.4810042382948185,&quot;cad&quot;:-1.988588107385261,&quot;chf&quot;:-1.9885881073853175,&quot;clp&quot;:-1.9885881073853355,&quot;cny&quot;:-1.9885881073853127,&quot;czk&quot;:-1.9885881073853435,&quot;dkk&quot;:-1.9885881073853227,&quot;dot&quot;:-1.3644561667958812,&quot;eos&quot;:-2.972583735072518,&quot;eth&quot;:-1.3723449155332164,&quot;eur&quot;:-1.9885881073853189,&quot;gbp&quot;:-1.9885881073853195,&quot;gel&quot;:-1.9885881073852993,&quot;hkd&quot;:-1.9885881073853318,&quot;huf&quot;:-1.9885881073853213,&quot;idr&quot;:-1.9885881073853184,&quot;ils&quot;:-1.9885881073853078,&quot;inr&quot;:-1.988588107385316,&quot;jpy&quot;:-1.9885881073853522,&quot;krw&quot;:-1.9885881073853238,&quot;kwd&quot;:-1.9885881073853064,&quot;lkr&quot;:-1.9885881073853067,&quot;ltc&quot;:1.9462669450816417,&quot;mmk&quot;:-1.988588107385315,&quot;mxn&quot;:-1.9885881073853195,&quot;myr&quot;:-1.9885881073853429,&quot;ngn&quot;:-1.9885881073853287,&quot;nok&quot;:-1.9885881073853175,&quot;nzd&quot;:-1.9885881073852858,&quot;php&quot;:-1.9885881073853184,&quot;pkr&quot;:-1.9885881073853084,&quot;pln&quot;:-1.988588107385306,&quot;rub&quot;:-1.9885881073853244,&quot;sar&quot;:-1.9885881073853318,&quot;sek&quot;:-1.9885881073853324,&quot;sgd&quot;:-1.988588107385287,&quot;thb&quot;:-1.9885909700620996,&quot;try&quot;:-1.9885881073853306,&quot;twd&quot;:-1.9885881073853133,&quot;uah&quot;:-1.9885881073853247,&quot;usd&quot;:-1.9885881073853195,&quot;vef&quot;:-1.9885881073853202,&quot;vnd&quot;:-1.9885881073853202,&quot;xag&quot;:-1.9885881073853278,&quot;xau&quot;:-1.9885881073853504,&quot;xdr&quot;:-1.9885881073853207,&quot;xlm&quot;:-14.395140337654915,&quot;xrp&quot;:-6.616164988294887,&quot;yfi&quot;:-0.4605504982565209,&quot;zar&quot;:-1.98858810738537,&quot;bits&quot;:-3.481004238294826,&quot;link&quot;:-1.949487139281792,&quot;sats&quot;:-3.481004238294822},&quot;sparkline&quot;:&quot;https://www.coingecko.com/categories/251/sparkline.svg&quot;}},{&quot;id&quot;:491,&quot;name&quot;:&quot;RWA Protocol&quot;,&quot;market_cap_1h_change&quot;:0.1568903960179309,&quot;slug&quot;:&quot;rwa-protocol&quot;,&quot;coins_count&quot;:&quot;49&quot;,&quot;data&quot;:{&quot;market_cap&quot;:6303997737.031189,&quot;market_cap_btc&quot;:73615.5747721996,&quot;total_volume&quot;:408851855.11762017,&quot;total_volume_btc&quot;:4774.409123652066,&quot;market_cap_change_percentage_24h&quot;:{&quot;aed&quot;:2.6968617579993146,&quot;ars&quot;:2.696861757999327,&quot;aud&quot;:2.696861757999338,&quot;bch&quot;:2.808718968909923,&quot;bdt&quot;:2.6968617579993266,&quot;bhd&quot;:2.696861757999358,&quot;bmd&quot;:2.69686175799933,&quot;bnb&quot;:-0.7646518924230218,&quot;brl&quot;:2.6968617579993532,&quot;btc&quot;:1.1620574371858465,&quot;cad&quot;:2.7110616075286025,&quot;chf&quot;:2.7041379665153435,&quot;clp&quot;:2.696861757999346,&quot;cny&quot;:2.6968617579993226,&quot;czk&quot;:2.696861757999327,&quot;dkk&quot;:2.696861757999349,&quot;dot&quot;:3.403525693505656,&quot;eos&quot;:1.7087997112776283,&quot;eth&quot;:3.4229544910261422,&quot;eur&quot;:2.696861757999338,&quot;gbp&quot;:2.696861757999338,&quot;gel&quot;:2.6968617579993417,&quot;hkd&quot;:2.6968617579993377,&quot;huf&quot;:2.696861757999345,&quot;idr&quot;:2.6968617579993364,&quot;ils&quot;:2.6968617579993435,&quot;inr&quot;:2.6968617579993337,&quot;jpy&quot;:2.696861757999329,&quot;krw&quot;:2.696861757999313,&quot;kwd&quot;:2.696861757999301,&quot;lkr&quot;:2.6968617579993346,&quot;ltc&quot;:6.847697609982172,&quot;mmk&quot;:2.6968617579993306,&quot;mxn&quot;:2.6968617579992973,&quot;myr&quot;:2.6968617579993346,&quot;ngn&quot;:2.6968617579992915,&quot;nok&quot;:2.696861757999343,&quot;nzd&quot;:2.696861757999394,&quot;php&quot;:2.6968617579993497,&quot;pkr&quot;:2.6968617579993257,&quot;pln&quot;:2.6968617579993355,&quot;rub&quot;:2.696861757999328,&quot;sar&quot;:2.696861757999358,&quot;sek&quot;:2.696861757999336,&quot;sgd&quot;:2.696861757999388,&quot;thb&quot;:2.6968647575268783,&quot;try&quot;:2.696861757999331,&quot;twd&quot;:2.696861757999345,&quot;uah&quot;:2.696861757999315,&quot;usd&quot;:2.69686175799933,&quot;vef&quot;:2.696861757999336,&quot;vnd&quot;:2.696861757999365,&quot;xag&quot;:2.6968617579993217,&quot;xau&quot;:2.6968617579993266,&quot;xdr&quot;:2.69686175799934,&quot;xlm&quot;:-10.32095570625598,&quot;xrp&quot;:-2.106606003272048,&quot;yfi&quot;:4.317586986024515,&quot;zar&quot;:2.6968617579993244,&quot;bits&quot;:1.1620574371858543,&quot;link&quot;:2.732011776150547,&quot;sats&quot;:1.1620574371858448},&quot;sparkline&quot;:&quot;https://www.coingecko.com/categories/491/sparkline.svg&quot;}},{&quot;id&quot;:10623,&quot;name&quot;:&quot;Binance Alpha Spotlight&quot;,&quot;market_cap_1h_change&quot;:0.15403295974213865,&quot;slug&quot;:&quot;binance-alpha-spotlight&quot;,&quot;coins_count&quot;:&quot;98&quot;,&quot;data&quot;:{&quot;market_cap&quot;:8895484273.399624,&quot;market_cap_btc&quot;:103877.92238830491,&quot;total_volume&quot;:1268401738.6684165,&quot;total_volume_btc&quot;:14811.890316145085,&quot;market_cap_change_percentage_24h&quot;:{&quot;aed&quot;:-1.0388885403893144,&quot;ars&quot;:-1.0388885403892907,&quot;aud&quot;:-1.0388885403892851,&quot;bch&quot;:-0.931100301031325,&quot;bdt&quot;:-1.0388885403892907,&quot;bhd&quot;:-1.0388885403892831,&quot;bmd&quot;:-1.0388885403892874,&quot;bnb&quot;:-4.374484510065813,&quot;brl&quot;:-1.0388885403892827,&quot;btc&quot;:-2.5178620831118343,&quot;cad&quot;:-1.0252052313969862,&quot;chf&quot;:-1.0318770147240546,&quot;clp&quot;:-1.0388885403892818,&quot;cny&quot;:-1.0388885403892911,&quot;czk&quot;:-1.0388885403892945,&quot;dkk&quot;:-1.0388885403892738,&quot;dot&quot;:-0.357930551128435,&quot;eos&quot;:-1.99100836820886,&quot;eth&quot;:-0.3392085048649065,&quot;eur&quot;:-1.0388885403892878,&quot;gbp&quot;:-1.0388885403892816,&quot;gel&quot;:-1.0388885403892818,&quot;hkd&quot;:-1.0388885403892911,&quot;huf&quot;:-1.0388885403892785,&quot;idr&quot;:-1.038888540389282,&quot;ils&quot;:-1.0388885403892631,&quot;inr&quot;:-1.038888540389288,&quot;jpy&quot;:-1.038888540389281,&quot;krw&quot;:-1.0388885403893178,&quot;kwd&quot;:-1.038888540389323,&quot;lkr&quot;:-1.038888540389305,&quot;ltc&quot;:2.960954515833681,&quot;mmk&quot;:-1.03888854038928,&quot;mxn&quot;:-1.0388885403893373,&quot;myr&quot;:-1.0388885403892802,&quot;ngn&quot;:-1.0388885403893242,&quot;nok&quot;:-1.0388885403892867,&quot;nzd&quot;:-1.0388885403892338,&quot;php&quot;:-1.0388885403892896,&quot;pkr&quot;:-1.0388885403893027,&quot;pln&quot;:-1.0388885403892945,&quot;rub&quot;:-1.0388885403892916,&quot;sar&quot;:-1.038888540389261,&quot;sek&quot;:-1.038888540389277,&quot;sgd&quot;:-1.0388885403892307,&quot;thb&quot;:-1.0388856499739845,&quot;try&quot;:-1.0388885403892816,&quot;twd&quot;:-1.0388885403892911,&quot;uah&quot;:-1.038888540389299,&quot;usd&quot;:-1.0388885403892874,&quot;vef&quot;:-1.0388885403892774,&quot;vnd&quot;:-1.038888540389265,&quot;xag&quot;:-1.0388885403893022,&quot;xau&quot;:-1.0388885403892862,&quot;xdr&quot;:-1.0388885403892913,&quot;xlm&quot;:-13.583163633008564,&quot;xrp&quot;:-5.667623054555665,&quot;yfi&quot;:0.5228804094151431,&quot;zar&quot;:-1.0388885403893016,&quot;bits&quot;:-2.517862083111831,&quot;link&quot;:-1.0050171561568426,&quot;sats&quot;:-2.5178620831118304},&quot;sparkline&quot;:&quot;https://www.coingecko.com/categories/10623/sparkline.svg&quot;}},{&quot;id&quot;:45,&quot;name&quot;:&quot;Decentralized Finance (DeFi)&quot;,&quot;market_cap_1h_change&quot;:0.11048756442478254,&quot;slug&quot;:&quot;decentralized-finance-defi&quot;,&quot;coins_count&quot;:&quot;1085&quot;,&quot;data&quot;:{&quot;market_cap&quot;:97181833185.75279,&quot;market_cap_btc&quot;:1134879.8357465435,&quot;total_volume&quot;:5092892298.761326,&quot;total_volume_btc&quot;:59474.29253002023,&quot;market_cap_change_percentage_24h&quot;:{&quot;aed&quot;:-0.45032970724791677,&quot;ars&quot;:-0.4503297072479009,&quot;aud&quot;:-0.4503297072479156,&quot;bch&quot;:-0.4649310960837518,&quot;bdt&quot;:-0.45032970724791216,&quot;bhd&quot;:-0.45032970724790417,&quot;bmd&quot;:-0.4503297072478923,&quot;bnb&quot;:-3.8390498774346726,&quot;brl&quot;:-0.4503297072479003,&quot;btc&quot;:-1.9740609303674186,&quot;cad&quot;:-0.45032970724785093,&quot;chf&quot;:-0.4503297072478986,&quot;clp&quot;:-0.45032970724790644,&quot;cny&quot;:-0.4503297072478818,&quot;czk&quot;:-0.4503297072479237,&quot;dkk&quot;:-0.4503297072479118,&quot;dot&quot;:0.14700804663851683,&quot;eos&quot;:-1.4587134521120158,&quot;eth&quot;:0.18303568869460582,&quot;eur&quot;:-0.4503297072478934,&quot;gbp&quot;:-0.45032970724789706,&quot;gel&quot;:-0.4503297072478981,&quot;hkd&quot;:-0.45032970724790633,&quot;huf&quot;:-0.45032970724789184,&quot;idr&quot;:-0.45032970724790894,&quot;ils&quot;:-0.45032970724793625,&quot;inr&quot;:-0.4503297072479032,&quot;jpy&quot;:-0.4503297072479171,&quot;krw&quot;:-0.45032970724787635,&quot;kwd&quot;:-0.4503297072479032,&quot;lkr&quot;:-0.4503297072478727,&quot;ltc&quot;:3.4869597077874155,&quot;mmk&quot;:-0.4503297072479243,&quot;mxn&quot;:-0.4503297072479344,&quot;myr&quot;:-0.45032970724791754,&quot;ngn&quot;:-0.45032970724787147,&quot;nok&quot;:-0.450329707247908,&quot;nzd&quot;:-0.4503297072478437,&quot;php&quot;:-0.45032970724789395,&quot;pkr&quot;:-0.45032970724786625,&quot;pln&quot;:-0.4503297072478889,&quot;rub&quot;:-0.4503297072478946,&quot;sar&quot;:-0.4503297072478728,&quot;sek&quot;:-0.45032970724790217,&quot;sgd&quot;:-0.4503297072478374,&quot;thb&quot;:-0.45033261485350184,&quot;try&quot;:-0.4503297072479146,&quot;twd&quot;:-0.4503297072479112,&quot;uah&quot;:-0.450329707247898,&quot;usd&quot;:-0.4503297072478923,&quot;vef&quot;:-0.4503297072478904,&quot;vnd&quot;:-0.45032970724791915,&quot;xag&quot;:-0.45032970724791277,&quot;xau&quot;:-0.4503297072479233,&quot;xdr&quot;:-0.4503297072478857,&quot;xlm&quot;:-13.046467619886092,&quot;xrp&quot;:-5.186468214255129,&quot;yfi&quot;:1.0800717990575248,&quot;zar&quot;:-0.45032970724789834,&quot;bits&quot;:-1.9740609303674186,&quot;link&quot;:-0.42182270668679595,&quot;sats&quot;:-1.9740609303674268},&quot;sparkline&quot;:&quot;https://www.coingecko.com/categories/45/sparkline.svg&quot;}},{&quot;id&quot;:113,&quot;name&quot;:&quot;Meme&quot;,&quot;market_cap_1h_change&quot;:0.09230666336068075,&quot;slug&quot;:&quot;meme-token&quot;,&quot;coins_count&quot;:&quot;4335&quot;,&quot;data&quot;:{&quot;market_cap&quot;:61925957699.21943,&quot;market_cap_btc&quot;:723169.7465750196,&quot;total_volume&quot;:5577826672.597947,&quot;total_volume_btc&quot;:65137.71689820611,&quot;market_cap_change_percentage_24h&quot;:{&quot;aed&quot;:-0.03860979942848675,&quot;ars&quot;:-0.038609799428495274,&quot;aud&quot;:-0.038609799428488724,&quot;bch&quot;:0.03371356739854956,&quot;bdt&quot;:-0.0386097994285044,&quot;bhd&quot;:-0.03860979942849232,&quot;bmd&quot;:-0.03860979942849044,&quot;bnb&quot;:-3.4200543295618515,&quot;brl&quot;:-0.038609799428492374,&quot;btc&quot;:-1.557478166205677,&quot;cad&quot;:-0.03860979942852792,&quot;chf&quot;:-0.038609799428488155,&quot;clp&quot;:-0.0386097994284964,&quot;cny&quot;:-0.03860979942848049,&quot;czk&quot;:-0.03860979942849546,&quot;dkk&quot;:-0.03860979942848072,&quot;dot&quot;:0.6077199776592653,&quot;eos&quot;:-1.0235256450582355,&quot;eth&quot;:0.5924222499163786,&quot;eur&quot;:-0.038609799428481945,&quot;gbp&quot;:-0.03860979942848103,&quot;gel&quot;:-0.038609799428471835,&quot;hkd&quot;:-0.03860979942849151,&quot;huf&quot;:-0.038609799428493505,&quot;idr&quot;:-0.03860979942850844,&quot;ils&quot;:-0.038609799428485046,&quot;inr&quot;:-0.03860979942850329,&quot;jpy&quot;:-0.03860979942850197,&quot;krw&quot;:-0.038609799428566696,&quot;kwd&quot;:-0.038609799428474416,&quot;lkr&quot;:-0.038609799428495566,&quot;ltc&quot;:3.9889659736718937,&quot;mmk&quot;:-0.0386097994285499,&quot;mxn&quot;:-0.03860979942853454,&quot;myr&quot;:-0.03860979942848895,&quot;ngn&quot;:-0.03860979942845917,&quot;nok&quot;:-0.03860979942850557,&quot;nzd&quot;:-0.03860979942845113,&quot;php&quot;:-0.03860979942849969,&quot;pkr&quot;:-0.038609799428488134,&quot;pln&quot;:-0.03860979942850989,&quot;rub&quot;:-0.038609799428506404,&quot;sar&quot;:-0.038609799428490806,&quot;sek&quot;:-0.038609799428494636,&quot;sgd&quot;:-0.03860979942851216,&quot;thb&quot;:-0.03861271905943945,&quot;try&quot;:-0.03860979942850189,&quot;twd&quot;:-0.03860979942848958,&quot;uah&quot;:-0.03860979942849686,&quot;usd&quot;:-0.03860979942849044,&quot;vef&quot;:-0.03860979942850314,&quot;vnd&quot;:-0.038609799428540814,&quot;xag&quot;:-0.03860979942849191,&quot;xau&quot;:-0.03860979942847488,&quot;xdr&quot;:-0.03860979942848953,&quot;xlm&quot;:-12.71185837669832,&quot;xrp&quot;:-4.748431558555464,&quot;yfi&quot;:1.5199399789075039,&quot;zar&quot;:-0.03860979942848655,&quot;bits&quot;:-1.5574781662056876,&quot;link&quot;:0.0018627615575626424,&quot;sats&quot;:-1.5574781662056862},&quot;sparkline&quot;:&quot;https://www.coingecko.com/categories/113/sparkline.svg&quot;}}]">
                        <div class="scroll-container">
                          <div
                            class="tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-xs tw-my-2"
                            id="search-coin-results">
                            <span class="tw-shrink-0 tw-basis-auto">Trending Search 🔥</span>
                            <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                          </div>
                          <div class="list-reset relevant-results">
                            <div class="results-item search-selected dark:tw-bg-moon-700 tw-bg-gray-100 tw-rounded-lg"
                              data-action="click->analytics-tracker#trackEvent click->targeting-ads#addSearchItemToInterest click->search-v2#storeRecentlySearched mouseenter->search-v2#renderSmartResult mouseenter->search-v2#addSelectIconToResult mouseleave->search-v2#removeSelectIconInResult"
                              data-smart-result="{&quot;id&quot;:&quot;kaito&quot;,&quot;coin_id&quot;:54411,&quot;name&quot;:&quot;KAITO&quot;,&quot;symbol&quot;:&quot;KAITO&quot;,&quot;market_cap_rank&quot;:135,&quot;thumb&quot;:&quot;https://assets.coingecko.com/coins/images/54411/standard/Qm4DW488_400x400.jpg?1739552780&quot;,&quot;small&quot;:&quot;https://assets.coingecko.com/coins/images/54411/small/Qm4DW488_400x400.jpg?1739552780&quot;,&quot;large&quot;:&quot;https://assets.coingecko.com/coins/images/54411/large/Qm4DW488_400x400.jpg?1739552780&quot;,&quot;slug&quot;:&quot;kaito&quot;,&quot;price_btc&quot;:0.000026496316754567042,&quot;score&quot;:0,&quot;data&quot;:{&quot;price&quot;:2.268913762362741,&quot;price_btc&quot;:&quot;0.00002649631675456704&quot;,&quot;price_change_percentage_24h&quot;:{&quot;aed&quot;:8.379561414860415,&quot;ars&quot;:8.379561414860394,&quot;aud&quot;:8.379561414860381,&quot;bch&quot;:11.278723940498441,&quot;bdt&quot;:8.379561414860355,&quot;bhd&quot;:8.379561414860405,&quot;bmd&quot;:8.379561414860389,&quot;bnb&quot;:6.064280310545707,&quot;brl&quot;:8.37956141486039,&quot;btc&quot;:8.559789536718894,&quot;cad&quot;:8.379561414860385,&quot;chf&quot;:8.379561414860403,&quot;clp&quot;:8.37956141486039,&quot;cny&quot;:8.379561414860428,&quot;czk&quot;:8.379561414860415,&quot;dkk&quot;:8.379561414860415,&quot;dot&quot;:9.986039630215695,&quot;eos&quot;:7.9779255052934595,&quot;eth&quot;:10.92743427089452,&quot;eur&quot;:8.379561414860394,&quot;gbp&quot;:8.37956141486041,&quot;gel&quot;:8.379561414860397,&quot;hkd&quot;:8.379561414860367,&quot;huf&quot;:8.37956141486042,&quot;idr&quot;:8.379561414860401,&quot;ils&quot;:8.379561414860442,&quot;inr&quot;:8.379561414860405,&quot;jpy&quot;:8.37956141486041,&quot;krw&quot;:8.37956141486033,&quot;kwd&quot;:8.379561414860397,&quot;lkr&quot;:8.37956141486039,&quot;ltc&quot;:14.512362222073019,&quot;mmk&quot;:8.379561414860389,&quot;mxn&quot;:8.379561414860405,&quot;myr&quot;:8.379561414860415,&quot;ngn&quot;:8.379561414860438,&quot;nok&quot;:8.3795614148604,&quot;nzd&quot;:8.379561414860433,&quot;php&quot;:8.379561414860403,&quot;pkr&quot;:8.379561414860415,&quot;pln&quot;:8.379561414860394,&quot;rub&quot;:8.37956141486041,&quot;sar&quot;:8.379561414860413,&quot;sek&quot;:8.379561414860403,&quot;sgd&quot;:8.379561414860422,&quot;thb&quot;:8.379561414860424,&quot;try&quot;:8.379561414860413,&quot;twd&quot;:8.379561414860435,&quot;uah&quot;:8.379561414860422,&quot;usd&quot;:8.379561414860389,&quot;vef&quot;:8.379561414860413,&quot;vnd&quot;:8.379561414860387,&quot;xag&quot;:8.3795614148604,&quot;xau&quot;:8.379561414860383,&quot;xdr&quot;:8.379561414860396,&quot;xlm&quot;:-1.8885884226970981,&quot;xrp&quot;:5.858057195109975,&quot;yfi&quot;:11.100571739522605,&quot;zar&quot;:8.379561414860394,&quot;bits&quot;:8.55978953671889,&quot;link&quot;:9.294456258255899,&quot;sats&quot;:8.559789536718895},&quot;market_cap&quot;:&quot;$548,669,970&quot;,&quot;market_cap_btc&quot;:&quot;6401.431902898116&quot;,&quot;total_volume&quot;:&quot;$766,071,272&quot;,&quot;total_volume_btc&quot;:&quot;8946.160671630654&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/coins/54411/sparkline.svg&quot;,&quot;content&quot;:null}}"
                              data-type="Coin" data-interest-data-key="adTargetingCoins"
                              data-interest-data-value="kaito" data-is-coin-search-result="false"
                              data-analytics-event="select_search_highlights"
                              data-analytics-event-properties="{&quot;search_category&quot;:&quot;trending_coin&quot;,&quot;coin_name&quot;:&quot;kaito&quot;}">
                              <a href="https://www.coingecko.com/en/search_redirect?id=kaito&amp;type=coin&amp;source=trending"
                                class="tw-flex tw-justify-between tw-px-2 tw-py-3 tw-rounded-lg">
                                <div class="tw-flex tw-items-center">
                                  <img
                                    src="https://assets.coingecko.com/coins/images/54411/standard/Qm4DW488_400x400.jpg?1739552780"
                                    class="tw-w-6 tw-mr-2" loading="lazy">
                                  <div
                                    class="tw-text-gray-700 tw-text-sm tw-font-semibold hover:tw-text-gray-900 dark:tw-text-moon-100 dark:hover:tw-text-moon-50 tw-mr-1">
                                    KAITO</div>
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular tw-flex-grow tw-mt-0.5">
                                    KAITO</div>
                                </div>
                                <div class="tw-flex tw-items-center md:tw-hidden" id="rightText">

                                  <span
                                    class="tw-text-success-500 dark:tw-text-success-400 tw-break-words tw-text-xs gecko-up"
                                    data-json="{&quot;aed&quot;:8.379561414860415,&quot;ars&quot;:8.379561414860394,&quot;aud&quot;:8.379561414860381,&quot;bch&quot;:11.278723940498441,&quot;bdt&quot;:8.379561414860355,&quot;bhd&quot;:8.379561414860405,&quot;bmd&quot;:8.379561414860389,&quot;bnb&quot;:6.064280310545707,&quot;brl&quot;:8.37956141486039,&quot;btc&quot;:8.559789536718894,&quot;cad&quot;:8.379561414860385,&quot;chf&quot;:8.379561414860403,&quot;clp&quot;:8.37956141486039,&quot;cny&quot;:8.379561414860428,&quot;czk&quot;:8.379561414860415,&quot;dkk&quot;:8.379561414860415,&quot;dot&quot;:9.986039630215695,&quot;eos&quot;:7.9779255052934595,&quot;eth&quot;:10.92743427089452,&quot;eur&quot;:8.379561414860394,&quot;gbp&quot;:8.37956141486041,&quot;gel&quot;:8.379561414860397,&quot;hkd&quot;:8.379561414860367,&quot;huf&quot;:8.37956141486042,&quot;idr&quot;:8.379561414860401,&quot;ils&quot;:8.379561414860442,&quot;inr&quot;:8.379561414860405,&quot;jpy&quot;:8.37956141486041,&quot;krw&quot;:8.37956141486033,&quot;kwd&quot;:8.379561414860397,&quot;lkr&quot;:8.37956141486039,&quot;ltc&quot;:14.512362222073019,&quot;mmk&quot;:8.379561414860389,&quot;mxn&quot;:8.379561414860405,&quot;myr&quot;:8.379561414860415,&quot;ngn&quot;:8.379561414860438,&quot;nok&quot;:8.3795614148604,&quot;nzd&quot;:8.379561414860433,&quot;php&quot;:8.379561414860403,&quot;pkr&quot;:8.379561414860415,&quot;pln&quot;:8.379561414860394,&quot;rub&quot;:8.37956141486041,&quot;sar&quot;:8.379561414860413,&quot;sek&quot;:8.379561414860403,&quot;sgd&quot;:8.379561414860422,&quot;thb&quot;:8.379561414860424,&quot;try&quot;:8.379561414860413,&quot;twd&quot;:8.379561414860435,&quot;uah&quot;:8.379561414860422,&quot;usd&quot;:8.379561414860389,&quot;vef&quot;:8.379561414860413,&quot;vnd&quot;:8.379561414860387,&quot;xag&quot;:8.3795614148604,&quot;xau&quot;:8.379561414860383,&quot;xdr&quot;:8.379561414860396,&quot;xlm&quot;:-1.8885884226970981,&quot;xrp&quot;:5.858057195109975,&quot;yfi&quot;:11.100571739522605,&quot;zar&quot;:8.379561414860394,&quot;bits&quot;:8.55978953671889,&quot;link&quot;:9.294456258255899,&quot;sats&quot;:8.559789536718895}"
                                    data-up-class="tw-text-success-500 dark:tw-text-success-400"
                                    data-down-class="tw-text-danger-500" data-24h="false"
                                    data-percent-change-target="percent" data-show-solid-arrow="true"
                                    data-is-caret="true" data-formatted="true">
                                    <i class="fas fa-caret-up tw-mr-1"></i>8.38%</span>
                                </div>
                                <div class="tw-hidden tw-flex-row tw-items-center tw-gap-1 md:tw-flex"
                                  id="rightTextButton">
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium">
                                    Select
                                  </div>
                                  <span
                                    class="tw-inline-flex tw-items-center tw-rounded-md tw-bg-gray-400 dark:tw-bg-moon-500 tw-px-1.5 tw-py-0.5 !tw-px-2">
                                    <div
                                      class="tw-text-xs tw-leading-4 tw-text-white dark:tw-text-moon-50 tw-font-medium">
                                      <i class="far fa-fa-regular fa-arrow-turn-down-left"></i>
                                    </div>
                                  </span>
                                </div>
                              </a>
                            </div>
                            <div class="results-item"
                              data-action="click->analytics-tracker#trackEvent click->targeting-ads#addSearchItemToInterest click->search-v2#storeRecentlySearched mouseenter->search-v2#renderSmartResult mouseenter->search-v2#addSelectIconToResult mouseleave->search-v2#removeSelectIconInResult"
                              data-smart-result="{&quot;id&quot;:&quot;sonic-3&quot;,&quot;coin_id&quot;:38108,&quot;name&quot;:&quot;Sonic (prev. FTM)&quot;,&quot;symbol&quot;:&quot;S&quot;,&quot;market_cap_rank&quot;:52,&quot;thumb&quot;:&quot;https://assets.coingecko.com/coins/images/38108/standard/200x200_Sonic_Logo.png?1734679256&quot;,&quot;small&quot;:&quot;https://assets.coingecko.com/coins/images/38108/small/200x200_Sonic_Logo.png?1734679256&quot;,&quot;large&quot;:&quot;https://assets.coingecko.com/coins/images/38108/large/200x200_Sonic_Logo.png?1734679256&quot;,&quot;slug&quot;:&quot;sonic&quot;,&quot;price_btc&quot;:0.000008396336660744576,&quot;score&quot;:1,&quot;data&quot;:{&quot;price&quot;:0.718989132695605,&quot;price_btc&quot;:&quot;0.000008396336660744576&quot;,&quot;price_change_percentage_24h&quot;:{&quot;aed&quot;:-3.697403568817341,&quot;ars&quot;:-3.6974035688173488,&quot;aud&quot;:-3.697403568817352,&quot;bch&quot;:-1.074657806746269,&quot;bdt&quot;:-3.697403568817398,&quot;bhd&quot;:-3.6974035688173568,&quot;bmd&quot;:-3.6974035688173505,&quot;bnb&quot;:-5.710419582089766,&quot;brl&quot;:-3.6974035688173394,&quot;btc&quot;:-3.4909242650960195,&quot;cad&quot;:-3.69740356881736,&quot;chf&quot;:-3.6974035688173625,&quot;clp&quot;:-3.69740356881735,&quot;cny&quot;:-3.6974035688173332,&quot;czk&quot;:-3.697403568817366,&quot;dkk&quot;:-3.6974035688173443,&quot;dot&quot;:-2.2149027732102757,&quot;eos&quot;:-4.005629316251247,&quot;eth&quot;:-1.3844993778625059,&quot;eur&quot;:-3.6974035688173403,&quot;gbp&quot;:-3.697403568817338,&quot;gel&quot;:-3.6974035688173665,&quot;hkd&quot;:-3.697403568817361,&quot;huf&quot;:-3.697403568817332,&quot;idr&quot;:-3.6974035688173554,&quot;ils&quot;:-3.6974035688173235,&quot;inr&quot;:-3.6974035688173315,&quot;jpy&quot;:-3.6974035688174047,&quot;krw&quot;:-3.697403568817384,&quot;kwd&quot;:-3.697403568817355,&quot;lkr&quot;:-3.6974035688173736,&quot;ltc&quot;:1.8001626201116223,&quot;mmk&quot;:-3.697403568817343,&quot;mxn&quot;:-3.697403568817334,&quot;myr&quot;:-3.6974035688173283,&quot;ngn&quot;:-3.697403568817337,&quot;nok&quot;:-3.6974035688173537,&quot;nzd&quot;:-3.6974035688173377,&quot;php&quot;:-3.6974035688173568,&quot;pkr&quot;:-3.6974035688173346,&quot;pln&quot;:-3.697403568817361,&quot;rub&quot;:-3.6974035688173443,&quot;sar&quot;:-3.697403568817361,&quot;sek&quot;:-3.697403568817342,&quot;sgd&quot;:-3.697403568817334,&quot;thb&quot;:-3.6974035688173186,&quot;try&quot;:-3.6974035688173617,&quot;twd&quot;:-3.6974035688173332,&quot;uah&quot;:-3.697403568817352,&quot;usd&quot;:-3.6974035688173505,&quot;vef&quot;:-3.6974035688173443,&quot;vnd&quot;:-3.6974035688173488,&quot;xag&quot;:-3.697403568817325,&quot;xau&quot;:-3.6974035688173563,&quot;xdr&quot;:-3.697403568817359,&quot;xlm&quot;:-12.797128454179726,&quot;xrp&quot;:-5.890341548812959,&quot;yfi&quot;:-1.2826283804672238,&quot;zar&quot;:-3.6974035688173688,&quot;bits&quot;:-3.4909242650960293,&quot;link&quot;:-2.889000452087736,&quot;sats&quot;:-3.490924265096027},&quot;market_cap&quot;:&quot;$2,282,812,837&quot;,&quot;market_cap_btc&quot;:&quot;26657.77909835754&quot;,&quot;total_volume&quot;:&quot;$210,734,773&quot;,&quot;total_volume_btc&quot;:&quot;2460.955279795902&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/coins/38108/sparkline.svg&quot;,&quot;content&quot;:null}}"
                              data-type="Coin" data-interest-data-key="adTargetingCoins"
                              data-interest-data-value="sonic-3" data-is-coin-search-result="false"
                              data-analytics-event="select_search_highlights"
                              data-analytics-event-properties="{&quot;search_category&quot;:&quot;trending_coin&quot;,&quot;coin_name&quot;:&quot;sonic-3&quot;}">
                              <a href="https://www.coingecko.com/en/search_redirect?id=sonic-3&amp;type=coin&amp;source=trending"
                                class="tw-flex tw-justify-between tw-px-2 tw-py-3 tw-rounded-lg">
                                <div class="tw-flex tw-items-center">
                                  <img
                                    src="https://assets.coingecko.com/coins/images/38108/standard/200x200_Sonic_Logo.png?1734679256"
                                    class="tw-w-6 tw-mr-2" loading="lazy">
                                  <div
                                    class="tw-text-gray-700 tw-text-sm tw-font-semibold hover:tw-text-gray-900 dark:tw-text-moon-100 dark:hover:tw-text-moon-50 tw-mr-1">
                                    Sonic (prev. FTM)</div>
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular tw-flex-grow tw-mt-0.5">
                                    S</div>
                                </div>
                                <div class="tw-flex tw-items-center" id="rightText">

                                  <span class="tw-text-danger-500 tw-break-words tw-text-xs gecko-down"
                                    data-json="{&quot;aed&quot;:-3.697403568817341,&quot;ars&quot;:-3.6974035688173488,&quot;aud&quot;:-3.697403568817352,&quot;bch&quot;:-1.074657806746269,&quot;bdt&quot;:-3.697403568817398,&quot;bhd&quot;:-3.6974035688173568,&quot;bmd&quot;:-3.6974035688173505,&quot;bnb&quot;:-5.710419582089766,&quot;brl&quot;:-3.6974035688173394,&quot;btc&quot;:-3.4909242650960195,&quot;cad&quot;:-3.69740356881736,&quot;chf&quot;:-3.6974035688173625,&quot;clp&quot;:-3.69740356881735,&quot;cny&quot;:-3.6974035688173332,&quot;czk&quot;:-3.697403568817366,&quot;dkk&quot;:-3.6974035688173443,&quot;dot&quot;:-2.2149027732102757,&quot;eos&quot;:-4.005629316251247,&quot;eth&quot;:-1.3844993778625059,&quot;eur&quot;:-3.6974035688173403,&quot;gbp&quot;:-3.697403568817338,&quot;gel&quot;:-3.6974035688173665,&quot;hkd&quot;:-3.697403568817361,&quot;huf&quot;:-3.697403568817332,&quot;idr&quot;:-3.6974035688173554,&quot;ils&quot;:-3.6974035688173235,&quot;inr&quot;:-3.6974035688173315,&quot;jpy&quot;:-3.6974035688174047,&quot;krw&quot;:-3.697403568817384,&quot;kwd&quot;:-3.697403568817355,&quot;lkr&quot;:-3.6974035688173736,&quot;ltc&quot;:1.8001626201116223,&quot;mmk&quot;:-3.697403568817343,&quot;mxn&quot;:-3.697403568817334,&quot;myr&quot;:-3.6974035688173283,&quot;ngn&quot;:-3.697403568817337,&quot;nok&quot;:-3.6974035688173537,&quot;nzd&quot;:-3.6974035688173377,&quot;php&quot;:-3.6974035688173568,&quot;pkr&quot;:-3.6974035688173346,&quot;pln&quot;:-3.697403568817361,&quot;rub&quot;:-3.6974035688173443,&quot;sar&quot;:-3.697403568817361,&quot;sek&quot;:-3.697403568817342,&quot;sgd&quot;:-3.697403568817334,&quot;thb&quot;:-3.6974035688173186,&quot;try&quot;:-3.6974035688173617,&quot;twd&quot;:-3.6974035688173332,&quot;uah&quot;:-3.697403568817352,&quot;usd&quot;:-3.6974035688173505,&quot;vef&quot;:-3.6974035688173443,&quot;vnd&quot;:-3.6974035688173488,&quot;xag&quot;:-3.697403568817325,&quot;xau&quot;:-3.6974035688173563,&quot;xdr&quot;:-3.697403568817359,&quot;xlm&quot;:-12.797128454179726,&quot;xrp&quot;:-5.890341548812959,&quot;yfi&quot;:-1.2826283804672238,&quot;zar&quot;:-3.6974035688173688,&quot;bits&quot;:-3.4909242650960293,&quot;link&quot;:-2.889000452087736,&quot;sats&quot;:-3.490924265096027}"
                                    data-up-class="tw-text-success-500 dark:tw-text-success-400"
                                    data-down-class="tw-text-danger-500" data-24h="false"
                                    data-percent-change-target="percent" data-show-solid-arrow="true"
                                    data-is-caret="true" data-formatted="true">
                                    <i class="fas fa-caret-down tw-mr-1"></i>3.70%</span>
                                </div>
                                <div class="tw-hidden tw-flex-row tw-items-center tw-gap-1" id="rightTextButton">
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium">
                                    Select
                                  </div>
                                  <span
                                    class="tw-inline-flex tw-items-center tw-rounded-md tw-bg-gray-400 dark:tw-bg-moon-500 tw-px-1.5 tw-py-0.5 !tw-px-2">
                                    <div
                                      class="tw-text-xs tw-leading-4 tw-text-white dark:tw-text-moon-50 tw-font-medium">
                                      <i class="far fa-fa-regular fa-arrow-turn-down-left"></i>
                                    </div>
                                  </span>
                                </div>
                              </a>
                            </div>
                            <div class="results-item"
                              data-action="click->analytics-tracker#trackEvent click->targeting-ads#addSearchItemToInterest click->search-v2#storeRecentlySearched mouseenter->search-v2#renderSmartResult mouseenter->search-v2#addSelectIconToResult mouseleave->search-v2#removeSelectIconInResult"
                              data-smart-result="{&quot;id&quot;:&quot;hedera-hashgraph&quot;,&quot;coin_id&quot;:3688,&quot;name&quot;:&quot;Hedera&quot;,&quot;symbol&quot;:&quot;HBAR&quot;,&quot;market_cap_rank&quot;:13,&quot;thumb&quot;:&quot;https://assets.coingecko.com/coins/images/3688/standard/hbar.png?1696504364&quot;,&quot;small&quot;:&quot;https://assets.coingecko.com/coins/images/3688/small/hbar.png?1696504364&quot;,&quot;large&quot;:&quot;https://assets.coingecko.com/coins/images/3688/large/hbar.png?1696504364&quot;,&quot;slug&quot;:&quot;hedera&quot;,&quot;price_btc&quot;:0.0000029126245729055897,&quot;score&quot;:2,&quot;data&quot;:{&quot;price&quot;:0.24941179709147004,&quot;price_btc&quot;:&quot;0.000002912624572905589&quot;,&quot;price_change_percentage_24h&quot;:{&quot;aed&quot;:10.129119637377372,&quot;ars&quot;:10.129119637377388,&quot;aud&quot;:10.129119637377372,&quot;bch&quot;:13.128422797557038,&quot;bdt&quot;:10.129119637377329,&quot;bhd&quot;:10.129119637377396,&quot;bmd&quot;:10.129119637377388,&quot;bnb&quot;:7.827087401766238,&quot;brl&quot;:10.129119637377379,&quot;btc&quot;:10.365243945390375,&quot;cad&quot;:10.129119637377364,&quot;chf&quot;:10.129119637377386,&quot;clp&quot;:10.129119637377364,&quot;cny&quot;:10.129119637377391,&quot;czk&quot;:10.129119637377373,&quot;dkk&quot;:10.129119637377396,&quot;dot&quot;:11.824468605445828,&quot;eos&quot;:9.776640768972985,&quot;eth&quot;:12.774096115633371,&quot;eur&quot;:10.129119637377402,&quot;gbp&quot;:10.129119637377402,&quot;gel&quot;:10.12911963737737,&quot;hkd&quot;:10.129119637377375,&quot;huf&quot;:10.129119637377395,&quot;idr&quot;:10.129119637377384,&quot;ils&quot;:10.129119637377388,&quot;inr&quot;:10.1291196373774,&quot;jpy&quot;:10.129119637377313,&quot;krw&quot;:10.129119637377334,&quot;kwd&quot;:10.129119637377386,&quot;lkr&quot;:10.129119637377372,&quot;ltc&quot;:16.415991922981906,&quot;mmk&quot;:10.129119637377386,&quot;mxn&quot;:10.129119637377414,&quot;myr&quot;:10.129119637377421,&quot;ngn&quot;:10.1291196373774,&quot;nok&quot;:10.12911963737737,&quot;nzd&quot;:10.129119637377402,&quot;php&quot;:10.129119637377384,&quot;pkr&quot;:10.129119637377396,&quot;pln&quot;:10.129119637377386,&quot;rub&quot;:10.129119637377379,&quot;sar&quot;:10.129119637377375,&quot;sek&quot;:10.129119637377402,&quot;sgd&quot;:10.1291196373774,&quot;thb&quot;:10.129119637377414,&quot;try&quot;:10.129119637377373,&quot;twd&quot;:10.129119637377395,&quot;uah&quot;:10.12911963737739,&quot;usd&quot;:10.129119637377388,&quot;vef&quot;:10.129119637377388,&quot;vnd&quot;:10.12911963737739,&quot;xag&quot;:10.129119637377404,&quot;xau&quot;:10.129119637377384,&quot;xdr&quot;:10.129119637377377,&quot;xlm&quot;:-0.2770867132833733,&quot;xrp&quot;:7.621333366745901,&quot;yfi&quot;:12.890593112344575,&quot;zar&quot;:10.12911963737734,&quot;bits&quot;:10.365243945390377,&quot;link&quot;:11.053588206832456,&quot;sats&quot;:10.365243945390393},&quot;market_cap&quot;:&quot;$10,461,280,015&quot;,&quot;market_cap_btc&quot;:&quot;122108.485566569&quot;,&quot;total_volume&quot;:&quot;$1,000,230,206&quot;,&quot;total_volume_btc&quot;:&quot;11680.66271093505&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/coins/3688/sparkline.svg&quot;,&quot;content&quot;:{&quot;title&quot;:&quot;What is Hedera?&quot;,&quot;description&quot;:&quot;Hedera is a decentralized public network where developers can build secure, fair applications with near real-time consensus. The platform is owned and governed by a council of global innovators including Avery Dennison, Boeing, Deutsche Telekom, DLA Piper, FIS (WorldPay), Google, IBM, LG Electronics, Magalu, Nomura, Swirlds, Tata Communications, University College London (UCL), Wipro, and Zain Group.&nbsp;&quot;}}}"
                              data-type="Coin" data-interest-data-key="adTargetingCoins"
                              data-interest-data-value="hedera-hashgraph" data-is-coin-search-result="false"
                              data-analytics-event="select_search_highlights"
                              data-analytics-event-properties="{&quot;search_category&quot;:&quot;trending_coin&quot;,&quot;coin_name&quot;:&quot;hedera-hashgraph&quot;}">
                              <a href="https://www.coingecko.com/en/search_redirect?id=hedera-hashgraph&amp;type=coin&amp;source=trending"
                                class="tw-flex tw-justify-between tw-px-2 tw-py-3 tw-rounded-lg">
                                <div class="tw-flex tw-items-center">
                                  <img src="https://assets.coingecko.com/coins/images/3688/standard/hbar.png?1696504364"
                                    class="tw-w-6 tw-mr-2" loading="lazy">
                                  <div
                                    class="tw-text-gray-700 tw-text-sm tw-font-semibold hover:tw-text-gray-900 dark:tw-text-moon-100 dark:hover:tw-text-moon-50 tw-mr-1">
                                    Hedera</div>
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular tw-flex-grow tw-mt-0.5">
                                    HBAR</div>
                                </div>
                                <div class="tw-flex tw-items-center" id="rightText">

                                  <span
                                    class="tw-text-success-500 dark:tw-text-success-400 tw-break-words tw-text-xs gecko-up"
                                    data-json="{&quot;aed&quot;:10.129119637377372,&quot;ars&quot;:10.129119637377388,&quot;aud&quot;:10.129119637377372,&quot;bch&quot;:13.128422797557038,&quot;bdt&quot;:10.129119637377329,&quot;bhd&quot;:10.129119637377396,&quot;bmd&quot;:10.129119637377388,&quot;bnb&quot;:7.827087401766238,&quot;brl&quot;:10.129119637377379,&quot;btc&quot;:10.365243945390375,&quot;cad&quot;:10.129119637377364,&quot;chf&quot;:10.129119637377386,&quot;clp&quot;:10.129119637377364,&quot;cny&quot;:10.129119637377391,&quot;czk&quot;:10.129119637377373,&quot;dkk&quot;:10.129119637377396,&quot;dot&quot;:11.824468605445828,&quot;eos&quot;:9.776640768972985,&quot;eth&quot;:12.774096115633371,&quot;eur&quot;:10.129119637377402,&quot;gbp&quot;:10.129119637377402,&quot;gel&quot;:10.12911963737737,&quot;hkd&quot;:10.129119637377375,&quot;huf&quot;:10.129119637377395,&quot;idr&quot;:10.129119637377384,&quot;ils&quot;:10.129119637377388,&quot;inr&quot;:10.1291196373774,&quot;jpy&quot;:10.129119637377313,&quot;krw&quot;:10.129119637377334,&quot;kwd&quot;:10.129119637377386,&quot;lkr&quot;:10.129119637377372,&quot;ltc&quot;:16.415991922981906,&quot;mmk&quot;:10.129119637377386,&quot;mxn&quot;:10.129119637377414,&quot;myr&quot;:10.129119637377421,&quot;ngn&quot;:10.1291196373774,&quot;nok&quot;:10.12911963737737,&quot;nzd&quot;:10.129119637377402,&quot;php&quot;:10.129119637377384,&quot;pkr&quot;:10.129119637377396,&quot;pln&quot;:10.129119637377386,&quot;rub&quot;:10.129119637377379,&quot;sar&quot;:10.129119637377375,&quot;sek&quot;:10.129119637377402,&quot;sgd&quot;:10.1291196373774,&quot;thb&quot;:10.129119637377414,&quot;try&quot;:10.129119637377373,&quot;twd&quot;:10.129119637377395,&quot;uah&quot;:10.12911963737739,&quot;usd&quot;:10.129119637377388,&quot;vef&quot;:10.129119637377388,&quot;vnd&quot;:10.12911963737739,&quot;xag&quot;:10.129119637377404,&quot;xau&quot;:10.129119637377384,&quot;xdr&quot;:10.129119637377377,&quot;xlm&quot;:-0.2770867132833733,&quot;xrp&quot;:7.621333366745901,&quot;yfi&quot;:12.890593112344575,&quot;zar&quot;:10.12911963737734,&quot;bits&quot;:10.365243945390377,&quot;link&quot;:11.053588206832456,&quot;sats&quot;:10.365243945390393}"
                                    data-up-class="tw-text-success-500 dark:tw-text-success-400"
                                    data-down-class="tw-text-danger-500" data-24h="false"
                                    data-percent-change-target="percent" data-show-solid-arrow="true"
                                    data-is-caret="true" data-formatted="true">
                                    <i class="fas fa-caret-up tw-mr-1"></i>10.13%</span>
                                </div>
                                <div class="tw-hidden tw-flex-row tw-items-center tw-gap-1" id="rightTextButton">
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium">
                                    Select
                                  </div>
                                  <span
                                    class="tw-inline-flex tw-items-center tw-rounded-md tw-bg-gray-400 dark:tw-bg-moon-500 tw-px-1.5 tw-py-0.5 !tw-px-2">
                                    <div
                                      class="tw-text-xs tw-leading-4 tw-text-white dark:tw-text-moon-50 tw-font-medium">
                                      <i class="far fa-fa-regular fa-arrow-turn-down-left"></i>
                                    </div>
                                  </span>
                                </div>
                              </a>
                            </div>
                            <div class="results-item"
                              data-action="click->analytics-tracker#trackEvent click->targeting-ads#addSearchItemToInterest click->search-v2#storeRecentlySearched mouseenter->search-v2#renderSmartResult mouseenter->search-v2#addSelectIconToResult mouseleave->search-v2#removeSelectIconInResult"
                              data-smart-result="{&quot;id&quot;:&quot;bitcoin&quot;,&quot;coin_id&quot;:1,&quot;name&quot;:&quot;Bitcoin&quot;,&quot;symbol&quot;:&quot;BTC&quot;,&quot;market_cap_rank&quot;:1,&quot;thumb&quot;:&quot;https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400&quot;,&quot;small&quot;:&quot;https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1696501400&quot;,&quot;large&quot;:&quot;https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400&quot;,&quot;slug&quot;:&quot;bitcoin&quot;,&quot;price_btc&quot;:1,&quot;score&quot;:3,&quot;data&quot;:{&quot;price&quot;:85623.02760309391,&quot;price_btc&quot;:&quot;1.0&quot;,&quot;price_change_percentage_24h&quot;:{&quot;aed&quot;:-0.2552150394389796,&quot;ars&quot;:-0.2552150394389772,&quot;aud&quot;:-0.2552150394389804,&quot;bch&quot;:2.461276745192674,&quot;bdt&quot;:-0.25521503943903673,&quot;bhd&quot;:-0.25521503943897766,&quot;bmd&quot;:-0.2552150394389894,&quot;bnb&quot;:-2.340183221054962,&quot;brl&quot;:-0.2552150394389717,&quot;btc&quot;:0,&quot;cad&quot;:-0.2552150394389926,&quot;chf&quot;:-0.2552150394389986,&quot;clp&quot;:-0.2552150394390063,&quot;cny&quot;:-0.2552150394389719,&quot;czk&quot;:-0.2552150394389931,&quot;dkk&quot;:-0.2552150394389624,&quot;dot&quot;:1.2802754721523337,&quot;eos&quot;:-0.5744578432305926,&quot;eth&quot;:2.1403603625807124,&quot;eur&quot;:-0.2552150394389633,&quot;gbp&quot;:-0.2552150394389659,&quot;gel&quot;:-0.25521503943898144,&quot;hkd&quot;:-0.2552150394389804,&quot;huf&quot;:-0.2552150394389812,&quot;idr&quot;:-0.25521503943899876,&quot;ils&quot;:-0.255215039438978,&quot;inr&quot;:-0.25521503943897017,&quot;jpy&quot;:-0.255215039439031,&quot;krw&quot;:-0.25521503943901896,&quot;kwd&quot;:-0.25521503943897406,&quot;lkr&quot;:-0.2552150394389957,&quot;ltc&quot;:5.438853216685578,&quot;mmk&quot;:-0.2552150394389901,&quot;mxn&quot;:-0.25521503943896884,&quot;myr&quot;:-0.2552150394389563,&quot;ngn&quot;:-0.25521503943896456,&quot;nok&quot;:-0.25521503943899015,&quot;nzd&quot;:-0.2552150394389549,&quot;php&quot;:-0.2552150394389937,&quot;pkr&quot;:-0.2552150394389606,&quot;pln&quot;:-0.25521503943897333,&quot;rub&quot;:-0.25521503943897395,&quot;sar&quot;:-0.255215039438986,&quot;sek&quot;:-0.2552150394389746,&quot;sgd&quot;:-0.25521503943896134,&quot;thb&quot;:-0.25521503943894647,&quot;try&quot;:-0.25521503943898227,&quot;twd&quot;:-0.2552150394389707,&quot;uah&quot;:-0.2552150394389787,&quot;usd&quot;:-0.2552150394389894,&quot;vef&quot;:-0.25521503943898605,&quot;vnd&quot;:-0.2552150394389832,&quot;xag&quot;:-0.2552150394389553,&quot;xau&quot;:-0.25521503943897134,&quot;xdr&quot;:-0.2552150394389947,&quot;xlm&quot;:-9.680195626949306,&quot;xrp&quot;:-2.5265362223814867,&quot;yfi&quot;:2.245872582452903,&quot;zar&quot;:-0.2552150394390162,&quot;bits&quot;:-0.04135544985661114,&quot;link&quot;:0.5820832061723206,&quot;sats&quot;:-0.04135544985660509},&quot;market_cap&quot;:&quot;$1,698,795,854,172&quot;,&quot;market_cap_btc&quot;:&quot;19831103.0&quot;,&quot;total_volume&quot;:&quot;$27,001,542,165&quot;,&quot;total_volume_btc&quot;:&quot;315323.3172388352&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/coins/1/sparkline.svg&quot;,&quot;content&quot;:{&quot;title&quot;:&quot;About Bitcoin (BTC)&quot;,&quot;description&quot;:&quot;Bitcoin (BTC) is the first cryptocurrency built on blockchain technology, also known as a decentralized digital currency that is based on cryptography. Unlike government-issued or fiat currencies such as US Dollars or Euro which are controlled by central banks, Bitcoin can operate without the need of a central authority like a central bank or a company.&nbsp;The decentralized nature allows it to operate on a peer-to-peer network whereby users are able to send funds to each other without going through intermediaries.&quot;}}}"
                              data-type="Coin" data-interest-data-key="adTargetingCoins"
                              data-interest-data-value="bitcoin" data-is-coin-search-result="false"
                              data-analytics-event="select_search_highlights"
                              data-analytics-event-properties="{&quot;search_category&quot;:&quot;trending_coin&quot;,&quot;coin_name&quot;:&quot;bitcoin&quot;}">
                              <a href="https://www.coingecko.com/en/search_redirect?id=bitcoin&amp;type=coin&amp;source=trending"
                                class="tw-flex tw-justify-between tw-px-2 tw-py-3 tw-rounded-lg">
                                <div class="tw-flex tw-items-center">
                                  <img src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"
                                    class="tw-w-6 tw-mr-2" loading="lazy">
                                  <div
                                    class="tw-text-gray-700 tw-text-sm tw-font-semibold hover:tw-text-gray-900 dark:tw-text-moon-100 dark:hover:tw-text-moon-50 tw-mr-1">
                                    Bitcoin</div>
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular tw-flex-grow tw-mt-0.5">
                                    BTC</div>
                                </div>
                                <div class="tw-flex tw-items-center" id="rightText">

                                  <span class="tw-text-danger-500 tw-break-words tw-text-xs gecko-down"
                                    data-json="{&quot;aed&quot;:-0.2552150394389796,&quot;ars&quot;:-0.2552150394389772,&quot;aud&quot;:-0.2552150394389804,&quot;bch&quot;:2.461276745192674,&quot;bdt&quot;:-0.25521503943903673,&quot;bhd&quot;:-0.25521503943897766,&quot;bmd&quot;:-0.2552150394389894,&quot;bnb&quot;:-2.340183221054962,&quot;brl&quot;:-0.2552150394389717,&quot;btc&quot;:0,&quot;cad&quot;:-0.2552150394389926,&quot;chf&quot;:-0.2552150394389986,&quot;clp&quot;:-0.2552150394390063,&quot;cny&quot;:-0.2552150394389719,&quot;czk&quot;:-0.2552150394389931,&quot;dkk&quot;:-0.2552150394389624,&quot;dot&quot;:1.2802754721523337,&quot;eos&quot;:-0.5744578432305926,&quot;eth&quot;:2.1403603625807124,&quot;eur&quot;:-0.2552150394389633,&quot;gbp&quot;:-0.2552150394389659,&quot;gel&quot;:-0.25521503943898144,&quot;hkd&quot;:-0.2552150394389804,&quot;huf&quot;:-0.2552150394389812,&quot;idr&quot;:-0.25521503943899876,&quot;ils&quot;:-0.255215039438978,&quot;inr&quot;:-0.25521503943897017,&quot;jpy&quot;:-0.255215039439031,&quot;krw&quot;:-0.25521503943901896,&quot;kwd&quot;:-0.25521503943897406,&quot;lkr&quot;:-0.2552150394389957,&quot;ltc&quot;:5.438853216685578,&quot;mmk&quot;:-0.2552150394389901,&quot;mxn&quot;:-0.25521503943896884,&quot;myr&quot;:-0.2552150394389563,&quot;ngn&quot;:-0.25521503943896456,&quot;nok&quot;:-0.25521503943899015,&quot;nzd&quot;:-0.2552150394389549,&quot;php&quot;:-0.2552150394389937,&quot;pkr&quot;:-0.2552150394389606,&quot;pln&quot;:-0.25521503943897333,&quot;rub&quot;:-0.25521503943897395,&quot;sar&quot;:-0.255215039438986,&quot;sek&quot;:-0.2552150394389746,&quot;sgd&quot;:-0.25521503943896134,&quot;thb&quot;:-0.25521503943894647,&quot;try&quot;:-0.25521503943898227,&quot;twd&quot;:-0.2552150394389707,&quot;uah&quot;:-0.2552150394389787,&quot;usd&quot;:-0.2552150394389894,&quot;vef&quot;:-0.25521503943898605,&quot;vnd&quot;:-0.2552150394389832,&quot;xag&quot;:-0.2552150394389553,&quot;xau&quot;:-0.25521503943897134,&quot;xdr&quot;:-0.2552150394389947,&quot;xlm&quot;:-9.680195626949306,&quot;xrp&quot;:-2.5265362223814867,&quot;yfi&quot;:2.245872582452903,&quot;zar&quot;:-0.2552150394390162,&quot;bits&quot;:-0.04135544985661114,&quot;link&quot;:0.5820832061723206,&quot;sats&quot;:-0.04135544985660509}"
                                    data-up-class="tw-text-success-500 dark:tw-text-success-400"
                                    data-down-class="tw-text-danger-500" data-24h="false"
                                    data-percent-change-target="percent" data-show-solid-arrow="true"
                                    data-is-caret="true" data-formatted="true">
                                    <i class="fas fa-caret-down tw-mr-1"></i>0.26%</span>
                                </div>
                                <div class="tw-hidden tw-flex-row tw-items-center tw-gap-1" id="rightTextButton">
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium">
                                    Select
                                  </div>
                                  <span
                                    class="tw-inline-flex tw-items-center tw-rounded-md tw-bg-gray-400 dark:tw-bg-moon-500 tw-px-1.5 tw-py-0.5 !tw-px-2">
                                    <div
                                      class="tw-text-xs tw-leading-4 tw-text-white dark:tw-text-moon-50 tw-font-medium">
                                      <i class="far fa-fa-regular fa-arrow-turn-down-left"></i>
                                    </div>
                                  </span>
                                </div>
                              </a>
                            </div>
                            <div class="results-item"
                              data-action="click->analytics-tracker#trackEvent click->targeting-ads#addSearchItemToInterest click->search-v2#storeRecentlySearched mouseenter->search-v2#renderSmartResult mouseenter->search-v2#addSelectIconToResult mouseleave->search-v2#removeSelectIconInResult"
                              data-smart-result="{&quot;id&quot;:&quot;ethereum&quot;,&quot;coin_id&quot;:279,&quot;name&quot;:&quot;Ethereum&quot;,&quot;symbol&quot;:&quot;ETH&quot;,&quot;market_cap_rank&quot;:2,&quot;thumb&quot;:&quot;https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628&quot;,&quot;small&quot;:&quot;https://assets.coingecko.com/coins/images/279/small/ethereum.png?1696501628&quot;,&quot;large&quot;:&quot;https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628&quot;,&quot;slug&quot;:&quot;ethereum&quot;,&quot;price_btc&quot;:0.02593245843069821,&quot;score&quot;:4,&quot;data&quot;:{&quot;price&quot;:2220.6298471718396,&quot;price_btc&quot;:&quot;0.02593245843069821&quot;,&quot;price_change_percentage_24h&quot;:{&quot;aed&quot;:-2.346024954298134,&quot;ars&quot;:-2.3460249542981186,&quot;aud&quot;:-2.3460249542981373,&quot;bch&quot;:0.31352482620579275,&quot;bdt&quot;:-2.346024954298185,&quot;bhd&quot;:-2.346024954298133,&quot;bmd&quot;:-2.3460249542981324,&quot;bnb&quot;:-4.3872888746035095,&quot;brl&quot;:-2.3460249542981337,&quot;btc&quot;:-2.136648203096366,&quot;cad&quot;:-2.3460249542981395,&quot;chf&quot;:-2.3460249542981457,&quot;clp&quot;:-2.3460249542981635,&quot;cny&quot;:-2.3460249542981195,&quot;czk&quot;:-2.3460249542981595,&quot;dkk&quot;:-2.346024954298124,&quot;dot&quot;:-0.8427207749253688,&quot;eos&quot;:-2.6585759193166374,&quot;eth&quot;:0,&quot;eur&quot;:-2.3460249542981444,&quot;gbp&quot;:-2.3460249542981364,&quot;gel&quot;:-2.3460249542981515,&quot;hkd&quot;:-2.3460249542981466,&quot;huf&quot;:-2.346024954298138,&quot;idr&quot;:-2.346024954298157,&quot;ils&quot;:-2.3460249542981195,&quot;inr&quot;:-2.346024954298127,&quot;jpy&quot;:-2.346024954298197,&quot;krw&quot;:-2.346024954298184,&quot;kwd&quot;:-2.346024954298132,&quot;lkr&quot;:-2.346024954298152,&quot;ltc&quot;:3.228686541766261,&quot;mmk&quot;:-2.346024954298139,&quot;mxn&quot;:-2.346024954298121,&quot;myr&quot;:-2.346024954298107,&quot;ngn&quot;:-2.3460249542981275,&quot;nok&quot;:-2.3460249542981324,&quot;nzd&quot;:-2.3460249542981315,&quot;php&quot;:-2.346024954298143,&quot;pkr&quot;:-2.346024954298134,&quot;pln&quot;:-2.3460249542981293,&quot;rub&quot;:-2.3460249542981306,&quot;sar&quot;:-2.3460249542981275,&quot;sek&quot;:-2.3460249542981377,&quot;sgd&quot;:-2.34602495429811,&quot;thb&quot;:-2.3460249542981115,&quot;try&quot;:-2.3460249542981373,&quot;twd&quot;:-2.346024954298145,&quot;uah&quot;:-2.346024954298143,&quot;usd&quot;:-2.3460249542981324,&quot;vef&quot;:-2.34602495429814,&quot;vnd&quot;:-2.3460249542981337,&quot;xag&quot;:-2.3460249542981177,&quot;xau&quot;:-2.3460249542981364,&quot;xdr&quot;:-2.3460249542981524,&quot;xlm&quot;:-11.573442903646335,&quot;xrp&quot;:-4.569735619547888,&quot;yfi&quot;:0.10263587856561912,&quot;zar&quot;:-2.3460249542981773,&quot;bits&quot;:-2.13664820309637,&quot;link&quot;:-1.52627781648971,&quot;sats&quot;:-2.1366482030963696},&quot;market_cap&quot;:&quot;$267,688,217,142&quot;,&quot;market_cap_btc&quot;:&quot;3124570.105433568&quot;,&quot;total_volume&quot;:&quot;$15,441,273,918&quot;,&quot;total_volume_btc&quot;:&quot;180322.8009916163&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/coins/279/sparkline.svg&quot;,&quot;content&quot;:{&quot;title&quot;:&quot;What is Ethereum?&quot;,&quot;description&quot;:&quot;Ethereum is a Proof-of-Stake blockchain that powers decentralized applications (dApps) through smart contracts, without being controlled by a centralized entity. As the first blockchain to feature smart contracts, it has the largest ecosystem of decentralized applications, ranging from decentralized exchanges to crypto lending and borrowing platforms and more.&nbsp;&quot;}}}"
                              data-type="Coin" data-interest-data-key="adTargetingCoins"
                              data-interest-data-value="ethereum" data-is-coin-search-result="false"
                              data-analytics-event="select_search_highlights"
                              data-analytics-event-properties="{&quot;search_category&quot;:&quot;trending_coin&quot;,&quot;coin_name&quot;:&quot;ethereum&quot;}">
                              <a href="https://www.coingecko.com/en/search_redirect?id=ethereum&amp;type=coin&amp;source=trending"
                                class="tw-flex tw-justify-between tw-px-2 tw-py-3 tw-rounded-lg">
                                <div class="tw-flex tw-items-center">
                                  <img
                                    src="https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628"
                                    class="tw-w-6 tw-mr-2" loading="lazy">
                                  <div
                                    class="tw-text-gray-700 tw-text-sm tw-font-semibold hover:tw-text-gray-900 dark:tw-text-moon-100 dark:hover:tw-text-moon-50 tw-mr-1">
                                    Ethereum</div>
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular tw-flex-grow tw-mt-0.5">
                                    ETH</div>
                                </div>
                                <div class="tw-flex tw-items-center" id="rightText">

                                  <span class="tw-text-danger-500 tw-break-words tw-text-xs gecko-down"
                                    data-json="{&quot;aed&quot;:-2.346024954298134,&quot;ars&quot;:-2.3460249542981186,&quot;aud&quot;:-2.3460249542981373,&quot;bch&quot;:0.31352482620579275,&quot;bdt&quot;:-2.346024954298185,&quot;bhd&quot;:-2.346024954298133,&quot;bmd&quot;:-2.3460249542981324,&quot;bnb&quot;:-4.3872888746035095,&quot;brl&quot;:-2.3460249542981337,&quot;btc&quot;:-2.136648203096366,&quot;cad&quot;:-2.3460249542981395,&quot;chf&quot;:-2.3460249542981457,&quot;clp&quot;:-2.3460249542981635,&quot;cny&quot;:-2.3460249542981195,&quot;czk&quot;:-2.3460249542981595,&quot;dkk&quot;:-2.346024954298124,&quot;dot&quot;:-0.8427207749253688,&quot;eos&quot;:-2.6585759193166374,&quot;eth&quot;:0,&quot;eur&quot;:-2.3460249542981444,&quot;gbp&quot;:-2.3460249542981364,&quot;gel&quot;:-2.3460249542981515,&quot;hkd&quot;:-2.3460249542981466,&quot;huf&quot;:-2.346024954298138,&quot;idr&quot;:-2.346024954298157,&quot;ils&quot;:-2.3460249542981195,&quot;inr&quot;:-2.346024954298127,&quot;jpy&quot;:-2.346024954298197,&quot;krw&quot;:-2.346024954298184,&quot;kwd&quot;:-2.346024954298132,&quot;lkr&quot;:-2.346024954298152,&quot;ltc&quot;:3.228686541766261,&quot;mmk&quot;:-2.346024954298139,&quot;mxn&quot;:-2.346024954298121,&quot;myr&quot;:-2.346024954298107,&quot;ngn&quot;:-2.3460249542981275,&quot;nok&quot;:-2.3460249542981324,&quot;nzd&quot;:-2.3460249542981315,&quot;php&quot;:-2.346024954298143,&quot;pkr&quot;:-2.346024954298134,&quot;pln&quot;:-2.3460249542981293,&quot;rub&quot;:-2.3460249542981306,&quot;sar&quot;:-2.3460249542981275,&quot;sek&quot;:-2.3460249542981377,&quot;sgd&quot;:-2.34602495429811,&quot;thb&quot;:-2.3460249542981115,&quot;try&quot;:-2.3460249542981373,&quot;twd&quot;:-2.346024954298145,&quot;uah&quot;:-2.346024954298143,&quot;usd&quot;:-2.3460249542981324,&quot;vef&quot;:-2.34602495429814,&quot;vnd&quot;:-2.3460249542981337,&quot;xag&quot;:-2.3460249542981177,&quot;xau&quot;:-2.3460249542981364,&quot;xdr&quot;:-2.3460249542981524,&quot;xlm&quot;:-11.573442903646335,&quot;xrp&quot;:-4.569735619547888,&quot;yfi&quot;:0.10263587856561912,&quot;zar&quot;:-2.3460249542981773,&quot;bits&quot;:-2.13664820309637,&quot;link&quot;:-1.52627781648971,&quot;sats&quot;:-2.1366482030963696}"
                                    data-up-class="tw-text-success-500 dark:tw-text-success-400"
                                    data-down-class="tw-text-danger-500" data-24h="false"
                                    data-percent-change-target="percent" data-show-solid-arrow="true"
                                    data-is-caret="true" data-formatted="true">
                                    <i class="fas fa-caret-down tw-mr-1"></i>2.35%</span>
                                </div>
                                <div class="tw-hidden tw-flex-row tw-items-center tw-gap-1" id="rightTextButton">
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium">
                                    Select
                                  </div>
                                  <span
                                    class="tw-inline-flex tw-items-center tw-rounded-md tw-bg-gray-400 dark:tw-bg-moon-500 tw-px-1.5 tw-py-0.5 !tw-px-2">
                                    <div
                                      class="tw-text-xs tw-leading-4 tw-text-white dark:tw-text-moon-50 tw-font-medium">
                                      <i class="far fa-fa-regular fa-arrow-turn-down-left"></i>
                                    </div>
                                  </span>
                                </div>
                              </a>
                            </div>
                            <div class="results-item"
                              data-action="click->analytics-tracker#trackEvent click->targeting-ads#addSearchItemToInterest click->search-v2#storeRecentlySearched mouseenter->search-v2#renderSmartResult mouseenter->search-v2#addSelectIconToResult mouseleave->search-v2#removeSelectIconInResult"
                              data-smart-result="{&quot;id&quot;:&quot;story-2&quot;,&quot;coin_id&quot;:54035,&quot;name&quot;:&quot;Story&quot;,&quot;symbol&quot;:&quot;IP&quot;,&quot;market_cap_rank&quot;:70,&quot;thumb&quot;:&quot;https://assets.coingecko.com/coins/images/54035/standard/Transparent_bg.png?1738075331&quot;,&quot;small&quot;:&quot;https://assets.coingecko.com/coins/images/54035/small/Transparent_bg.png?1738075331&quot;,&quot;large&quot;:&quot;https://assets.coingecko.com/coins/images/54035/large/Transparent_bg.png?1738075331&quot;,&quot;slug&quot;:&quot;story&quot;,&quot;price_btc&quot;:0.00006322558037439852,&quot;score&quot;:5,&quot;data&quot;:{&quot;price&quot;:5.414087956965492,&quot;price_btc&quot;:&quot;0.00006322558037439852&quot;,&quot;price_change_percentage_24h&quot;:{&quot;aed&quot;:-4.877501948520927,&quot;ars&quot;:-4.877501948520948,&quot;aud&quot;:-4.8775019485209254,&quot;bch&quot;:-2.286895486311884,&quot;bdt&quot;:-4.877501948520985,&quot;bhd&quot;:-4.877501948520932,&quot;bmd&quot;:-4.877501948520931,&quot;bnb&quot;:-6.865850330559983,&quot;brl&quot;:-4.877501948520936,&quot;btc&quot;:-4.673552855830188,&quot;cad&quot;:-4.877501948520953,&quot;chf&quot;:-4.87750194852094,&quot;clp&quot;:-4.87750194852095,&quot;cny&quot;:-4.877501948520928,&quot;czk&quot;:-4.877501948520963,&quot;dkk&quot;:-4.877501948520921,&quot;dot&quot;:-3.4131678156170464,&quot;eos&quot;:-5.181950677280285,&quot;eth&quot;:-2.5929402383433975,&quot;eur&quot;:-4.8775019485209254,&quot;gbp&quot;:-4.877501948520935,&quot;gel&quot;:-4.877501948520937,&quot;hkd&quot;:-4.877501948520946,&quot;huf&quot;:-4.877501948520928,&quot;idr&quot;:-4.877501948520942,&quot;ils&quot;:-4.877501948520923,&quot;inr&quot;:-4.877501948520928,&quot;jpy&quot;:-4.87750194852099,&quot;krw&quot;:-4.877501948520967,&quot;kwd&quot;:-4.877501948520945,&quot;lkr&quot;:-4.877501948520958,&quot;ltc&quot;:0.5526967010862489,&quot;mmk&quot;:-4.877501948520948,&quot;mxn&quot;:-4.877501948520924,&quot;myr&quot;:-4.877501948520915,&quot;ngn&quot;:-4.877501948520928,&quot;nok&quot;:-4.877501948520938,&quot;nzd&quot;:-4.877501948520936,&quot;php&quot;:-4.87750194852095,&quot;pkr&quot;:-4.877501948520921,&quot;pln&quot;:-4.877501948520938,&quot;rub&quot;:-4.877501948520934,&quot;sar&quot;:-4.877501948520955,&quot;sek&quot;:-4.877501948520935,&quot;sgd&quot;:-4.877501948520921,&quot;thb&quot;:-4.877501948520903,&quot;try&quot;:-4.877501948520941,&quot;twd&quot;:-4.877501948520924,&quot;uah&quot;:-4.877501948520947,&quot;usd&quot;:-4.877501948520931,&quot;vef&quot;:-4.877501948520927,&quot;vnd&quot;:-4.877501948520928,&quot;xag&quot;:-4.87750194852091,&quot;xau&quot;:-4.877501948520932,&quot;xdr&quot;:-4.877501948520946,&quot;xlm&quot;:-13.865718203888704,&quot;xrp&quot;:-7.0435675216149045,&quot;yfi&quot;:-2.492317574881176,&quot;zar&quot;:-4.877501948520965,&quot;bits&quot;:-4.6735528558302,&quot;link&quot;:-4.079005056997634,&quot;sats&quot;:-4.67355285583019},&quot;market_cap&quot;:&quot;$1,393,419,273&quot;,&quot;market_cap_btc&quot;:&quot;16256.70341977972&quot;,&quot;total_volume&quot;:&quot;$186,464,487&quot;,&quot;total_volume_btc&quot;:&quot;2177.527501375856&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/coins/54035/sparkline.svg&quot;,&quot;content&quot;:null}}"
                              data-type="Coin" data-interest-data-key="adTargetingCoins"
                              data-interest-data-value="story-2" data-is-coin-search-result="false"
                              data-analytics-event="select_search_highlights"
                              data-analytics-event-properties="{&quot;search_category&quot;:&quot;trending_coin&quot;,&quot;coin_name&quot;:&quot;story-2&quot;}">
                              <a href="https://www.coingecko.com/en/search_redirect?id=story-2&amp;type=coin&amp;source=trending"
                                class="tw-flex tw-justify-between tw-px-2 tw-py-3 tw-rounded-lg">
                                <div class="tw-flex tw-items-center">
                                  <img
                                    src="https://assets.coingecko.com/coins/images/54035/standard/Transparent_bg.png?1738075331"
                                    class="tw-w-6 tw-mr-2" loading="lazy">
                                  <div
                                    class="tw-text-gray-700 tw-text-sm tw-font-semibold hover:tw-text-gray-900 dark:tw-text-moon-100 dark:hover:tw-text-moon-50 tw-mr-1">
                                    Story</div>
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular tw-flex-grow tw-mt-0.5">
                                    IP</div>
                                </div>
                                <div class="tw-flex tw-items-center" id="rightText">

                                  <span class="tw-text-danger-500 tw-break-words tw-text-xs gecko-down"
                                    data-json="{&quot;aed&quot;:-4.877501948520927,&quot;ars&quot;:-4.877501948520948,&quot;aud&quot;:-4.8775019485209254,&quot;bch&quot;:-2.286895486311884,&quot;bdt&quot;:-4.877501948520985,&quot;bhd&quot;:-4.877501948520932,&quot;bmd&quot;:-4.877501948520931,&quot;bnb&quot;:-6.865850330559983,&quot;brl&quot;:-4.877501948520936,&quot;btc&quot;:-4.673552855830188,&quot;cad&quot;:-4.877501948520953,&quot;chf&quot;:-4.87750194852094,&quot;clp&quot;:-4.87750194852095,&quot;cny&quot;:-4.877501948520928,&quot;czk&quot;:-4.877501948520963,&quot;dkk&quot;:-4.877501948520921,&quot;dot&quot;:-3.4131678156170464,&quot;eos&quot;:-5.181950677280285,&quot;eth&quot;:-2.5929402383433975,&quot;eur&quot;:-4.8775019485209254,&quot;gbp&quot;:-4.877501948520935,&quot;gel&quot;:-4.877501948520937,&quot;hkd&quot;:-4.877501948520946,&quot;huf&quot;:-4.877501948520928,&quot;idr&quot;:-4.877501948520942,&quot;ils&quot;:-4.877501948520923,&quot;inr&quot;:-4.877501948520928,&quot;jpy&quot;:-4.87750194852099,&quot;krw&quot;:-4.877501948520967,&quot;kwd&quot;:-4.877501948520945,&quot;lkr&quot;:-4.877501948520958,&quot;ltc&quot;:0.5526967010862489,&quot;mmk&quot;:-4.877501948520948,&quot;mxn&quot;:-4.877501948520924,&quot;myr&quot;:-4.877501948520915,&quot;ngn&quot;:-4.877501948520928,&quot;nok&quot;:-4.877501948520938,&quot;nzd&quot;:-4.877501948520936,&quot;php&quot;:-4.87750194852095,&quot;pkr&quot;:-4.877501948520921,&quot;pln&quot;:-4.877501948520938,&quot;rub&quot;:-4.877501948520934,&quot;sar&quot;:-4.877501948520955,&quot;sek&quot;:-4.877501948520935,&quot;sgd&quot;:-4.877501948520921,&quot;thb&quot;:-4.877501948520903,&quot;try&quot;:-4.877501948520941,&quot;twd&quot;:-4.877501948520924,&quot;uah&quot;:-4.877501948520947,&quot;usd&quot;:-4.877501948520931,&quot;vef&quot;:-4.877501948520927,&quot;vnd&quot;:-4.877501948520928,&quot;xag&quot;:-4.87750194852091,&quot;xau&quot;:-4.877501948520932,&quot;xdr&quot;:-4.877501948520946,&quot;xlm&quot;:-13.865718203888704,&quot;xrp&quot;:-7.0435675216149045,&quot;yfi&quot;:-2.492317574881176,&quot;zar&quot;:-4.877501948520965,&quot;bits&quot;:-4.6735528558302,&quot;link&quot;:-4.079005056997634,&quot;sats&quot;:-4.67355285583019}"
                                    data-up-class="tw-text-success-500 dark:tw-text-success-400"
                                    data-down-class="tw-text-danger-500" data-24h="false"
                                    data-percent-change-target="percent" data-show-solid-arrow="true"
                                    data-is-caret="true" data-formatted="true">
                                    <i class="fas fa-caret-down tw-mr-1"></i>4.88%</span>
                                </div>
                                <div class="tw-hidden tw-flex-row tw-items-center tw-gap-1" id="rightTextButton">
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium">
                                    Select
                                  </div>
                                  <span
                                    class="tw-inline-flex tw-items-center tw-rounded-md tw-bg-gray-400 dark:tw-bg-moon-500 tw-px-1.5 tw-py-0.5 !tw-px-2">
                                    <div
                                      class="tw-text-xs tw-leading-4 tw-text-white dark:tw-text-moon-50 tw-font-medium">
                                      <i class="far fa-fa-regular fa-arrow-turn-down-left"></i>
                                    </div>
                                  </span>
                                </div>
                              </a>
                            </div>
                            <div class="results-item"
                              data-action="click->analytics-tracker#trackEvent click->targeting-ads#addSearchItemToInterest click->search-v2#storeRecentlySearched mouseenter->search-v2#renderSmartResult mouseenter->search-v2#addSelectIconToResult mouseleave->search-v2#removeSelectIconInResult"
                              data-smart-result="{&quot;id&quot;:&quot;solana&quot;,&quot;coin_id&quot;:4128,&quot;name&quot;:&quot;Solana&quot;,&quot;symbol&quot;:&quot;SOL&quot;,&quot;market_cap_rank&quot;:6,&quot;thumb&quot;:&quot;https://assets.coingecko.com/coins/images/4128/standard/solana.png?1718769756&quot;,&quot;small&quot;:&quot;https://assets.coingecko.com/coins/images/4128/small/solana.png?1718769756&quot;,&quot;large&quot;:&quot;https://assets.coingecko.com/coins/images/4128/large/solana.png?1718769756&quot;,&quot;slug&quot;:&quot;solana&quot;,&quot;price_btc&quot;:0.0016799914778373123,&quot;score&quot;:6,&quot;data&quot;:{&quot;price&quot;:143.85983606797666,&quot;price_btc&quot;:&quot;0.001679991477837312&quot;,&quot;price_change_percentage_24h&quot;:{&quot;aed&quot;:-1.7799177763918494,&quot;ars&quot;:-1.7799177763918457,&quot;aud&quot;:-1.7799177763918514,&quot;bch&quot;:0.895049607133738,&quot;bdt&quot;:-1.7799177763919045,&quot;bhd&quot;:-1.7799177763918466,&quot;bmd&quot;:-1.7799177763918457,&quot;bnb&quot;:-3.833015051732131,&quot;brl&quot;:-1.7799177763918457,&quot;btc&quot;:-1.5693272529735827,&quot;cad&quot;:-1.779917776391866,&quot;chf&quot;:-1.7799177763918532,&quot;clp&quot;:-1.7799177763918588,&quot;cny&quot;:-1.7799177763918508,&quot;czk&quot;:-1.7799177763918765,&quot;dkk&quot;:-1.7799177763918372,&quot;dot&quot;:-0.2678988336300721,&quot;eos&quot;:-2.094280622029391,&quot;eth&quot;:0.5790387650680613,&quot;eur&quot;:-1.7799177763918355,&quot;gbp&quot;:-1.7799177763918441,&quot;gel&quot;:-1.7799177763918526,&quot;hkd&quot;:-1.7799177763918619,&quot;huf&quot;:-1.7799177763918546,&quot;idr&quot;:-1.7799177763918692,&quot;ils&quot;:-1.779917776391851,&quot;inr&quot;:-1.7799177763918383,&quot;jpy&quot;:-1.7799177763919145,&quot;krw&quot;:-1.7799177763918823,&quot;kwd&quot;:-1.7799177763918514,&quot;lkr&quot;:-1.7799177763918768,&quot;ltc&quot;:3.8271107266474402,&quot;mmk&quot;:-1.779917776391852,&quot;mxn&quot;:-1.7799177763918415,&quot;myr&quot;:-1.779917776391841,&quot;ngn&quot;:-1.779917776391836,&quot;nok&quot;:-1.7799177763918574,&quot;nzd&quot;:-1.7799177763918428,&quot;php&quot;:-1.7799177763918532,&quot;pkr&quot;:-1.7799177763918337,&quot;pln&quot;:-1.7799177763918619,&quot;rub&quot;:-1.7799177763918526,&quot;sar&quot;:-1.7799177763918466,&quot;sek&quot;:-1.779917776391849,&quot;sgd&quot;:-1.7799177763918321,&quot;thb&quot;:-1.779917776391828,&quot;try&quot;:-1.7799177763918717,&quot;twd&quot;:-1.7799177763918361,&quot;uah&quot;:-1.7799177763918594,&quot;usd&quot;:-1.7799177763918457,&quot;vef&quot;:-1.7799177763918477,&quot;vnd&quot;:-1.7799177763918428,&quot;xag&quot;:-1.7799177763918397,&quot;xau&quot;:-1.7799177763918441,&quot;xdr&quot;:-1.7799177763918674,&quot;xlm&quot;:-11.06082773701991,&quot;xrp&quot;:-4.016519453693036,&quot;yfi&quot;:0.6829381209646008,&quot;zar&quot;:-1.7799177763918987,&quot;bits&quot;:-1.5693272529735722,&quot;link&quot;:-0.9554185049548158,&quot;sats&quot;:-1.5693272529735753},&quot;market_cap&quot;:&quot;$73,019,319,356&quot;,&quot;market_cap_btc&quot;:&quot;852475.649420331&quot;,&quot;total_volume&quot;:&quot;$3,152,969,561&quot;,&quot;total_volume_btc&quot;:&quot;36820.29770523767&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/coins/4128/sparkline.svg&quot;,&quot;content&quot;:{&quot;title&quot;:&quot;About Solana (SOL)&quot;,&quot;description&quot;:&quot;Solana is a Layer 1 blockchain that offers users fast speeds and affordable costs. It supports smart contracts and facilitates the creation of decentralized applications (dApps). Projects built on Solana include a variety of DeFi platforms as well as NFT marketplaces, where users can buy Solana-based NFT projects. Its high performance means Solana doesn’t require a traditional scaling Layer 2 solution; instead, Layer 2s on Solana focus on interoperability and connecting Solana to other chains.&nbsp;&quot;}}}"
                              data-type="Coin" data-interest-data-key="adTargetingCoins"
                              data-interest-data-value="solana" data-is-coin-search-result="false"
                              data-analytics-event="select_search_highlights"
                              data-analytics-event-properties="{&quot;search_category&quot;:&quot;trending_coin&quot;,&quot;coin_name&quot;:&quot;solana&quot;}">
                              <a href="https://www.coingecko.com/en/search_redirect?id=solana&amp;type=coin&amp;source=trending"
                                class="tw-flex tw-justify-between tw-px-2 tw-py-3 tw-rounded-lg">
                                <div class="tw-flex tw-items-center">
                                  <img
                                    src="https://assets.coingecko.com/coins/images/4128/standard/solana.png?1718769756"
                                    class="tw-w-6 tw-mr-2" loading="lazy">
                                  <div
                                    class="tw-text-gray-700 tw-text-sm tw-font-semibold hover:tw-text-gray-900 dark:tw-text-moon-100 dark:hover:tw-text-moon-50 tw-mr-1">
                                    Solana</div>
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular tw-flex-grow tw-mt-0.5">
                                    SOL</div>
                                </div>
                                <div class="tw-flex tw-items-center" id="rightText">

                                  <span class="tw-text-danger-500 tw-break-words tw-text-xs gecko-down"
                                    data-json="{&quot;aed&quot;:-1.7799177763918494,&quot;ars&quot;:-1.7799177763918457,&quot;aud&quot;:-1.7799177763918514,&quot;bch&quot;:0.895049607133738,&quot;bdt&quot;:-1.7799177763919045,&quot;bhd&quot;:-1.7799177763918466,&quot;bmd&quot;:-1.7799177763918457,&quot;bnb&quot;:-3.833015051732131,&quot;brl&quot;:-1.7799177763918457,&quot;btc&quot;:-1.5693272529735827,&quot;cad&quot;:-1.779917776391866,&quot;chf&quot;:-1.7799177763918532,&quot;clp&quot;:-1.7799177763918588,&quot;cny&quot;:-1.7799177763918508,&quot;czk&quot;:-1.7799177763918765,&quot;dkk&quot;:-1.7799177763918372,&quot;dot&quot;:-0.2678988336300721,&quot;eos&quot;:-2.094280622029391,&quot;eth&quot;:0.5790387650680613,&quot;eur&quot;:-1.7799177763918355,&quot;gbp&quot;:-1.7799177763918441,&quot;gel&quot;:-1.7799177763918526,&quot;hkd&quot;:-1.7799177763918619,&quot;huf&quot;:-1.7799177763918546,&quot;idr&quot;:-1.7799177763918692,&quot;ils&quot;:-1.779917776391851,&quot;inr&quot;:-1.7799177763918383,&quot;jpy&quot;:-1.7799177763919145,&quot;krw&quot;:-1.7799177763918823,&quot;kwd&quot;:-1.7799177763918514,&quot;lkr&quot;:-1.7799177763918768,&quot;ltc&quot;:3.8271107266474402,&quot;mmk&quot;:-1.779917776391852,&quot;mxn&quot;:-1.7799177763918415,&quot;myr&quot;:-1.779917776391841,&quot;ngn&quot;:-1.779917776391836,&quot;nok&quot;:-1.7799177763918574,&quot;nzd&quot;:-1.7799177763918428,&quot;php&quot;:-1.7799177763918532,&quot;pkr&quot;:-1.7799177763918337,&quot;pln&quot;:-1.7799177763918619,&quot;rub&quot;:-1.7799177763918526,&quot;sar&quot;:-1.7799177763918466,&quot;sek&quot;:-1.779917776391849,&quot;sgd&quot;:-1.7799177763918321,&quot;thb&quot;:-1.779917776391828,&quot;try&quot;:-1.7799177763918717,&quot;twd&quot;:-1.7799177763918361,&quot;uah&quot;:-1.7799177763918594,&quot;usd&quot;:-1.7799177763918457,&quot;vef&quot;:-1.7799177763918477,&quot;vnd&quot;:-1.7799177763918428,&quot;xag&quot;:-1.7799177763918397,&quot;xau&quot;:-1.7799177763918441,&quot;xdr&quot;:-1.7799177763918674,&quot;xlm&quot;:-11.06082773701991,&quot;xrp&quot;:-4.016519453693036,&quot;yfi&quot;:0.6829381209646008,&quot;zar&quot;:-1.7799177763918987,&quot;bits&quot;:-1.5693272529735722,&quot;link&quot;:-0.9554185049548158,&quot;sats&quot;:-1.5693272529735753}"
                                    data-up-class="tw-text-success-500 dark:tw-text-success-400"
                                    data-down-class="tw-text-danger-500" data-24h="false"
                                    data-percent-change-target="percent" data-show-solid-arrow="true"
                                    data-is-caret="true" data-formatted="true">
                                    <i class="fas fa-caret-down tw-mr-1"></i>1.78%</span>
                                </div>
                                <div class="tw-hidden tw-flex-row tw-items-center tw-gap-1" id="rightTextButton">
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium">
                                    Select
                                  </div>
                                  <span
                                    class="tw-inline-flex tw-items-center tw-rounded-md tw-bg-gray-400 dark:tw-bg-moon-500 tw-px-1.5 tw-py-0.5 !tw-px-2">
                                    <div
                                      class="tw-text-xs tw-leading-4 tw-text-white dark:tw-text-moon-50 tw-font-medium">
                                      <i class="far fa-fa-regular fa-arrow-turn-down-left"></i>
                                    </div>
                                  </span>
                                </div>
                              </a>
                            </div>
                          </div>

                          <div
                            class="tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-xs tw-my-2"
                            id="search-nft_contract-results">
                            <span class="tw-shrink-0 tw-basis-auto">Trending NFT 💎</span>
                            <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                          </div>
                          <div class="list-reset relevant-results">
                            <div class="results-item"
                              data-action="click->analytics-tracker#trackEvent click->targeting-ads#addSearchItemToInterest click->search-v2#storeRecentlySearched mouseenter->search-v2#renderSmartResult mouseenter->search-v2#addSelectIconToResult mouseleave->search-v2#removeSelectIconInResult"
                              data-smart-result="{&quot;id&quot;:&quot;nakamigos&quot;,&quot;name&quot;:&quot;Nakamigos&quot;,&quot;symbol&quot;:&quot;NKMGS&quot;,&quot;thumb&quot;:&quot;https://assets.coingecko.com/nft_contracts/images/3134/standard/nakamigos.png?1707289851&quot;,&quot;nft_contract_id&quot;:3134,&quot;native_currency_symbol&quot;:&quot;eth&quot;,&quot;floor_price_in_native_currency&quot;:0.1648,&quot;floor_price_24h_percentage_change&quot;:48.31023918975824,&quot;data&quot;:{&quot;floor_price&quot;:&quot;0.16 ETH&quot;,&quot;floor_price_in_usd_24h_percentage_change&quot;:&quot;48.31023918975824&quot;,&quot;h24_volume&quot;:&quot;18.85 ETH&quot;,&quot;h24_average_sale_price&quot;:&quot;0.16 ETH&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/nft/3134/sparkline.svg&quot;,&quot;content&quot;:null}}"
                              data-type="Nft" data-interest-data-key="undefined" data-interest-data-value="undefined"
                              data-is-coin-search-result="false" data-analytics-event="select_search_highlights"
                              data-analytics-event-properties="{&quot;search_category&quot;:&quot;trending_nft&quot;,&quot;nft_name&quot;:&quot;nakamigos&quot;}">
                              <a href="https://www.coingecko.com/en/search_redirect?id=nakamigos&amp;type=nft&amp;utm_source=trending_search&amp;utm_medium=coingecko"
                                class="tw-flex tw-justify-between tw-px-2 tw-py-3 tw-rounded-lg">
                                <div class="tw-flex tw-items-center">
                                  <img
                                    src="https://assets.coingecko.com/nft_contracts/images/3134/standard/nakamigos.png?1707289851"
                                    class="tw-w-6 tw-mr-2" loading="lazy">
                                  <div
                                    class="tw-text-gray-700 tw-text-sm tw-font-semibold hover:tw-text-gray-900 dark:tw-text-moon-100 dark:hover:tw-text-moon-50 tw-mr-1">
                                    Nakamigos</div>
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular tw-flex-grow tw-mt-0.5">
                                  </div>
                                </div>
                                <div class="tw-flex tw-items-center" id="rightText">

                                  <span class="tw-text-success-500 dark:tw-text-success-400 tw-break-words">
                                    <i class="fas fa-caret-up tw-mr-1"></i>
                                    48.31%
                                  </span>
                                </div>
                                <div class="tw-hidden tw-flex-row tw-items-center tw-gap-1" id="rightTextButton">
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium">
                                    Select
                                  </div>
                                  <span
                                    class="tw-inline-flex tw-items-center tw-rounded-md tw-bg-gray-400 dark:tw-bg-moon-500 tw-px-1.5 tw-py-0.5 !tw-px-2">
                                    <div
                                      class="tw-text-xs tw-leading-4 tw-text-white dark:tw-text-moon-50 tw-font-medium">
                                      <i class="far fa-fa-regular fa-arrow-turn-down-left"></i>
                                    </div>
                                  </span>
                                </div>
                              </a>
                            </div>
                            <div class="results-item"
                              data-action="click->analytics-tracker#trackEvent click->targeting-ads#addSearchItemToInterest click->search-v2#storeRecentlySearched mouseenter->search-v2#renderSmartResult mouseenter->search-v2#addSelectIconToResult mouseleave->search-v2#removeSelectIconInResult"
                              data-smart-result="{&quot;id&quot;:&quot;chronoforge&quot;,&quot;name&quot;:&quot;PXQuest Adventurer&quot;,&quot;symbol&quot;:&quot;PXQ&quot;,&quot;thumb&quot;:&quot;https://assets.coingecko.com/nft_contracts/images/3660/standard/chronoforge.png?1707290130&quot;,&quot;nft_contract_id&quot;:3660,&quot;native_currency_symbol&quot;:&quot;eth&quot;,&quot;floor_price_in_native_currency&quot;:0.32,&quot;floor_price_24h_percentage_change&quot;:25.51068595995748,&quot;data&quot;:{&quot;floor_price&quot;:&quot;0.32 ETH&quot;,&quot;floor_price_in_usd_24h_percentage_change&quot;:&quot;25.51068595995748&quot;,&quot;h24_volume&quot;:&quot;6.15 ETH&quot;,&quot;h24_average_sale_price&quot;:&quot;0.41 ETH&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/nft/3660/sparkline.svg&quot;,&quot;content&quot;:null}}"
                              data-type="Nft" data-interest-data-key="undefined" data-interest-data-value="undefined"
                              data-is-coin-search-result="false" data-analytics-event="select_search_highlights"
                              data-analytics-event-properties="{&quot;search_category&quot;:&quot;trending_nft&quot;,&quot;nft_name&quot;:&quot;chronoforge&quot;}">
                              <a href="https://www.coingecko.com/en/search_redirect?id=chronoforge&amp;type=nft&amp;utm_source=trending_search&amp;utm_medium=coingecko"
                                class="tw-flex tw-justify-between tw-px-2 tw-py-3 tw-rounded-lg">
                                <div class="tw-flex tw-items-center">
                                  <img
                                    src="https://assets.coingecko.com/nft_contracts/images/3660/standard/chronoforge.png?1707290130"
                                    class="tw-w-6 tw-mr-2" loading="lazy">
                                  <div
                                    class="tw-text-gray-700 tw-text-sm tw-font-semibold hover:tw-text-gray-900 dark:tw-text-moon-100 dark:hover:tw-text-moon-50 tw-mr-1">
                                    PXQuest Adventurer</div>
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular tw-flex-grow tw-mt-0.5">
                                  </div>
                                </div>
                                <div class="tw-flex tw-items-center" id="rightText">

                                  <span class="tw-text-success-500 dark:tw-text-success-400 tw-break-words">
                                    <i class="fas fa-caret-up tw-mr-1"></i>
                                    25.51%
                                  </span>
                                </div>
                                <div class="tw-hidden tw-flex-row tw-items-center tw-gap-1" id="rightTextButton">
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium">
                                    Select
                                  </div>
                                  <span
                                    class="tw-inline-flex tw-items-center tw-rounded-md tw-bg-gray-400 dark:tw-bg-moon-500 tw-px-1.5 tw-py-0.5 !tw-px-2">
                                    <div
                                      class="tw-text-xs tw-leading-4 tw-text-white dark:tw-text-moon-50 tw-font-medium">
                                      <i class="far fa-fa-regular fa-arrow-turn-down-left"></i>
                                    </div>
                                  </span>
                                </div>
                              </a>
                            </div>
                            <div class="results-item"
                              data-action="click->analytics-tracker#trackEvent click->targeting-ads#addSearchItemToInterest click->search-v2#storeRecentlySearched mouseenter->search-v2#renderSmartResult mouseenter->search-v2#addSelectIconToResult mouseleave->search-v2#removeSelectIconInResult"
                              data-smart-result="{&quot;id&quot;:&quot;kanpai-pandas&quot;,&quot;name&quot;:&quot;Kanpai Pandas&quot;,&quot;symbol&quot;:&quot;YKPS&quot;,&quot;thumb&quot;:&quot;https://assets.coingecko.com/nft_contracts/images/1554/standard/kanpai-pandas.png?1707287899&quot;,&quot;nft_contract_id&quot;:1554,&quot;native_currency_symbol&quot;:&quot;eth&quot;,&quot;floor_price_in_native_currency&quot;:0.564,&quot;floor_price_24h_percentage_change&quot;:23.8576192257457,&quot;data&quot;:{&quot;floor_price&quot;:&quot;0.56 ETH&quot;,&quot;floor_price_in_usd_24h_percentage_change&quot;:&quot;23.8576192257457&quot;,&quot;h24_volume&quot;:&quot;13.79 ETH&quot;,&quot;h24_average_sale_price&quot;:&quot;0.49 ETH&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/nft/1554/sparkline.svg&quot;,&quot;content&quot;:null}}"
                              data-type="Nft" data-interest-data-key="undefined" data-interest-data-value="undefined"
                              data-is-coin-search-result="false" data-analytics-event="select_search_highlights"
                              data-analytics-event-properties="{&quot;search_category&quot;:&quot;trending_nft&quot;,&quot;nft_name&quot;:&quot;kanpai-pandas&quot;}">
                              <a href="https://www.coingecko.com/en/search_redirect?id=kanpai-pandas&amp;type=nft&amp;utm_source=trending_search&amp;utm_medium=coingecko"
                                class="tw-flex tw-justify-between tw-px-2 tw-py-3 tw-rounded-lg">
                                <div class="tw-flex tw-items-center">
                                  <img
                                    src="https://assets.coingecko.com/nft_contracts/images/1554/standard/kanpai-pandas.png?1707287899"
                                    class="tw-w-6 tw-mr-2" loading="lazy">
                                  <div
                                    class="tw-text-gray-700 tw-text-sm tw-font-semibold hover:tw-text-gray-900 dark:tw-text-moon-100 dark:hover:tw-text-moon-50 tw-mr-1">
                                    Kanpai Pandas</div>
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular tw-flex-grow tw-mt-0.5">
                                  </div>
                                </div>
                                <div class="tw-flex tw-items-center" id="rightText">

                                  <span class="tw-text-success-500 dark:tw-text-success-400 tw-break-words">
                                    <i class="fas fa-caret-up tw-mr-1"></i>
                                    23.86%
                                  </span>
                                </div>
                                <div class="tw-hidden tw-flex-row tw-items-center tw-gap-1" id="rightTextButton">
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium">
                                    Select
                                  </div>
                                  <span
                                    class="tw-inline-flex tw-items-center tw-rounded-md tw-bg-gray-400 dark:tw-bg-moon-500 tw-px-1.5 tw-py-0.5 !tw-px-2">
                                    <div
                                      class="tw-text-xs tw-leading-4 tw-text-white dark:tw-text-moon-50 tw-font-medium">
                                      <i class="far fa-fa-regular fa-arrow-turn-down-left"></i>
                                    </div>
                                  </span>
                                </div>
                              </a>
                            </div>
                            <div class="results-item"
                              data-action="click->analytics-tracker#trackEvent click->targeting-ads#addSearchItemToInterest click->search-v2#storeRecentlySearched mouseenter->search-v2#renderSmartResult mouseenter->search-v2#addSelectIconToResult mouseleave->search-v2#removeSelectIconInResult"
                              data-smart-result="{&quot;id&quot;:&quot;rektguy&quot;,&quot;name&quot;:&quot;rektguy&quot;,&quot;symbol&quot;:&quot;Rektguy&quot;,&quot;thumb&quot;:&quot;https://assets.coingecko.com/nft_contracts/images/396/standard/rektguy.gif?1707287298&quot;,&quot;nft_contract_id&quot;:396,&quot;native_currency_symbol&quot;:&quot;eth&quot;,&quot;floor_price_in_native_currency&quot;:0.29999,&quot;floor_price_24h_percentage_change&quot;:18.56702822125518,&quot;data&quot;:{&quot;floor_price&quot;:&quot;0.30 ETH&quot;,&quot;floor_price_in_usd_24h_percentage_change&quot;:&quot;18.56702822125518&quot;,&quot;h24_volume&quot;:&quot;5.94 ETH&quot;,&quot;h24_average_sale_price&quot;:&quot;0.28 ETH&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/nft/396/sparkline.svg&quot;,&quot;content&quot;:null}}"
                              data-type="Nft" data-interest-data-key="undefined" data-interest-data-value="undefined"
                              data-is-coin-search-result="false" data-analytics-event="select_search_highlights"
                              data-analytics-event-properties="{&quot;search_category&quot;:&quot;trending_nft&quot;,&quot;nft_name&quot;:&quot;rektguy&quot;}">
                              <a href="https://www.coingecko.com/en/search_redirect?id=rektguy&amp;type=nft&amp;utm_source=trending_search&amp;utm_medium=coingecko"
                                class="tw-flex tw-justify-between tw-px-2 tw-py-3 tw-rounded-lg">
                                <div class="tw-flex tw-items-center">
                                  <img
                                    src="https://assets.coingecko.com/nft_contracts/images/396/standard/rektguy.gif?1707287298"
                                    class="tw-w-6 tw-mr-2" loading="lazy">
                                  <div
                                    class="tw-text-gray-700 tw-text-sm tw-font-semibold hover:tw-text-gray-900 dark:tw-text-moon-100 dark:hover:tw-text-moon-50 tw-mr-1">
                                    rektguy</div>
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular tw-flex-grow tw-mt-0.5">
                                  </div>
                                </div>
                                <div class="tw-flex tw-items-center" id="rightText">

                                  <span class="tw-text-success-500 dark:tw-text-success-400 tw-break-words">
                                    <i class="fas fa-caret-up tw-mr-1"></i>
                                    18.57%
                                  </span>
                                </div>
                                <div class="tw-hidden tw-flex-row tw-items-center tw-gap-1" id="rightTextButton">
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium">
                                    Select
                                  </div>
                                  <span
                                    class="tw-inline-flex tw-items-center tw-rounded-md tw-bg-gray-400 dark:tw-bg-moon-500 tw-px-1.5 tw-py-0.5 !tw-px-2">
                                    <div
                                      class="tw-text-xs tw-leading-4 tw-text-white dark:tw-text-moon-50 tw-font-medium">
                                      <i class="far fa-fa-regular fa-arrow-turn-down-left"></i>
                                    </div>
                                  </span>
                                </div>
                              </a>
                            </div>
                            <div class="results-item"
                              data-action="click->analytics-tracker#trackEvent click->targeting-ads#addSearchItemToInterest click->search-v2#storeRecentlySearched mouseenter->search-v2#renderSmartResult mouseenter->search-v2#addSelectIconToResult mouseleave->search-v2#removeSelectIconInResult"
                              data-smart-result="{&quot;id&quot;:&quot;digidaigaku&quot;,&quot;name&quot;:&quot;DigiDaigaku&quot;,&quot;symbol&quot;:&quot;dida&quot;,&quot;thumb&quot;:&quot;https://assets.coingecko.com/nft_contracts/images/1297/standard/fe93ea8b5aed4dfcebd9feadc13a8574.png?1707287755&quot;,&quot;nft_contract_id&quot;:1297,&quot;native_currency_symbol&quot;:&quot;eth&quot;,&quot;floor_price_in_native_currency&quot;:2.29,&quot;floor_price_24h_percentage_change&quot;:14.52916961110899,&quot;data&quot;:{&quot;floor_price&quot;:&quot;2.29 ETH&quot;,&quot;floor_price_in_usd_24h_percentage_change&quot;:&quot;14.52916961110899&quot;,&quot;h24_volume&quot;:&quot;5.85 ETH&quot;,&quot;h24_average_sale_price&quot;:&quot;1.95 ETH&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/nft/1297/sparkline.svg&quot;,&quot;content&quot;:null}}"
                              data-type="Nft" data-interest-data-key="undefined" data-interest-data-value="undefined"
                              data-is-coin-search-result="false" data-analytics-event="select_search_highlights"
                              data-analytics-event-properties="{&quot;search_category&quot;:&quot;trending_nft&quot;,&quot;nft_name&quot;:&quot;digidaigaku&quot;}">
                              <a href="https://www.coingecko.com/en/search_redirect?id=digidaigaku&amp;type=nft&amp;utm_source=trending_search&amp;utm_medium=coingecko"
                                class="tw-flex tw-justify-between tw-px-2 tw-py-3 tw-rounded-lg">
                                <div class="tw-flex tw-items-center">
                                  <img
                                    src="https://assets.coingecko.com/nft_contracts/images/1297/standard/fe93ea8b5aed4dfcebd9feadc13a8574.png?1707287755"
                                    class="tw-w-6 tw-mr-2" loading="lazy">
                                  <div
                                    class="tw-text-gray-700 tw-text-sm tw-font-semibold hover:tw-text-gray-900 dark:tw-text-moon-100 dark:hover:tw-text-moon-50 tw-mr-1">
                                    DigiDaigaku</div>
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular tw-flex-grow tw-mt-0.5">
                                  </div>
                                </div>
                                <div class="tw-flex tw-items-center" id="rightText">

                                  <span class="tw-text-success-500 dark:tw-text-success-400 tw-break-words">
                                    <i class="fas fa-caret-up tw-mr-1"></i>
                                    14.53%
                                  </span>
                                </div>
                                <div class="tw-hidden tw-flex-row tw-items-center tw-gap-1" id="rightTextButton">
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium">
                                    Select
                                  </div>
                                  <span
                                    class="tw-inline-flex tw-items-center tw-rounded-md tw-bg-gray-400 dark:tw-bg-moon-500 tw-px-1.5 tw-py-0.5 !tw-px-2">
                                    <div
                                      class="tw-text-xs tw-leading-4 tw-text-white dark:tw-text-moon-50 tw-font-medium">
                                      <i class="far fa-fa-regular fa-arrow-turn-down-left"></i>
                                    </div>
                                  </span>
                                </div>
                              </a>
                            </div>
                            <div class="results-item"
                              data-action="click->analytics-tracker#trackEvent click->targeting-ads#addSearchItemToInterest click->search-v2#storeRecentlySearched mouseenter->search-v2#renderSmartResult mouseenter->search-v2#addSelectIconToResult mouseleave->search-v2#removeSelectIconInResult"
                              data-smart-result="{&quot;id&quot;:&quot;claynosaurz&quot;,&quot;name&quot;:&quot;Claynosaurz&quot;,&quot;symbol&quot;:&quot;CLAYNOSAURZ&quot;,&quot;thumb&quot;:&quot;https://assets.coingecko.com/nft_contracts/images/2446/standard/claynosaurz.gif?1707288361&quot;,&quot;nft_contract_id&quot;:2446,&quot;native_currency_symbol&quot;:&quot;sol&quot;,&quot;floor_price_in_native_currency&quot;:15.5,&quot;floor_price_24h_percentage_change&quot;:14.30681764920942,&quot;data&quot;:{&quot;floor_price&quot;:&quot;15.50 SOL&quot;,&quot;floor_price_in_usd_24h_percentage_change&quot;:&quot;14.30681764920942&quot;,&quot;h24_volume&quot;:&quot;252.66 SOL&quot;,&quot;h24_average_sale_price&quot;:&quot;14.86 SOL&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/nft/2446/sparkline.svg&quot;,&quot;content&quot;:null}}"
                              data-type="Nft" data-interest-data-key="undefined" data-interest-data-value="undefined"
                              data-is-coin-search-result="false" data-analytics-event="select_search_highlights"
                              data-analytics-event-properties="{&quot;search_category&quot;:&quot;trending_nft&quot;,&quot;nft_name&quot;:&quot;claynosaurz&quot;}">
                              <a href="https://www.coingecko.com/en/search_redirect?id=claynosaurz&amp;type=nft&amp;utm_source=trending_search&amp;utm_medium=coingecko"
                                class="tw-flex tw-justify-between tw-px-2 tw-py-3 tw-rounded-lg">
                                <div class="tw-flex tw-items-center">
                                  <img
                                    src="https://assets.coingecko.com/nft_contracts/images/2446/standard/claynosaurz.gif?1707288361"
                                    class="tw-w-6 tw-mr-2" loading="lazy">
                                  <div
                                    class="tw-text-gray-700 tw-text-sm tw-font-semibold hover:tw-text-gray-900 dark:tw-text-moon-100 dark:hover:tw-text-moon-50 tw-mr-1">
                                    Claynosaurz</div>
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular tw-flex-grow tw-mt-0.5">
                                  </div>
                                </div>
                                <div class="tw-flex tw-items-center" id="rightText">

                                  <span class="tw-text-success-500 dark:tw-text-success-400 tw-break-words">
                                    <i class="fas fa-caret-up tw-mr-1"></i>
                                    14.31%
                                  </span>
                                </div>
                                <div class="tw-hidden tw-flex-row tw-items-center tw-gap-1" id="rightTextButton">
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium">
                                    Select
                                  </div>
                                  <span
                                    class="tw-inline-flex tw-items-center tw-rounded-md tw-bg-gray-400 dark:tw-bg-moon-500 tw-px-1.5 tw-py-0.5 !tw-px-2">
                                    <div
                                      class="tw-text-xs tw-leading-4 tw-text-white dark:tw-text-moon-50 tw-font-medium">
                                      <i class="far fa-fa-regular fa-arrow-turn-down-left"></i>
                                    </div>
                                  </span>
                                </div>
                              </a>
                            </div>
                            <div class="results-item"
                              data-action="click->analytics-tracker#trackEvent click->targeting-ads#addSearchItemToInterest click->search-v2#storeRecentlySearched mouseenter->search-v2#renderSmartResult mouseenter->search-v2#addSelectIconToResult mouseleave->search-v2#removeSelectIconInResult"
                              data-smart-result="{&quot;id&quot;:&quot;quantum-cats&quot;,&quot;name&quot;:&quot;Quantum Cats&quot;,&quot;symbol&quot;:&quot;QUANTUM_CATS&quot;,&quot;thumb&quot;:&quot;https://assets.coingecko.com/nft_contracts/images/4067/standard/quantum-cats.png?1707290320&quot;,&quot;nft_contract_id&quot;:4067,&quot;native_currency_symbol&quot;:&quot;btc&quot;,&quot;floor_price_in_native_currency&quot;:0.205,&quot;floor_price_24h_percentage_change&quot;:10.8759055998956,&quot;data&quot;:{&quot;floor_price&quot;:&quot;0.21 BTC&quot;,&quot;floor_price_in_usd_24h_percentage_change&quot;:&quot;10.8759055998956&quot;,&quot;h24_volume&quot;:&quot;2.49 BTC&quot;,&quot;h24_average_sale_price&quot;:&quot;0.19 BTC&quot;,&quot;sparkline&quot;:&quot;https://www.coingecko.com/nft/4067/sparkline.svg&quot;,&quot;content&quot;:null}}"
                              data-type="Nft" data-interest-data-key="undefined" data-interest-data-value="undefined"
                              data-is-coin-search-result="false" data-analytics-event="select_search_highlights"
                              data-analytics-event-properties="{&quot;search_category&quot;:&quot;trending_nft&quot;,&quot;nft_name&quot;:&quot;quantum-cats&quot;}">
                              <a href="https://www.coingecko.com/en/search_redirect?id=quantum-cats&amp;type=nft&amp;utm_source=trending_search&amp;utm_medium=coingecko"
                                class="tw-flex tw-justify-between tw-px-2 tw-py-3 tw-rounded-lg">
                                <div class="tw-flex tw-items-center">
                                  <img
                                    src="https://assets.coingecko.com/nft_contracts/images/4067/standard/quantum-cats.png?1707290320"
                                    class="tw-w-6 tw-mr-2" loading="lazy">
                                  <div
                                    class="tw-text-gray-700 tw-text-sm tw-font-semibold hover:tw-text-gray-900 dark:tw-text-moon-100 dark:hover:tw-text-moon-50 tw-mr-1">
                                    Quantum Cats</div>
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular tw-flex-grow tw-mt-0.5">
                                  </div>
                                </div>
                                <div class="tw-flex tw-items-center" id="rightText">

                                  <span class="tw-text-success-500 dark:tw-text-success-400 tw-break-words">
                                    <i class="fas fa-caret-up tw-mr-1"></i>
                                    10.88%
                                  </span>
                                </div>
                                <div class="tw-hidden tw-flex-row tw-items-center tw-gap-1" id="rightTextButton">
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium">
                                    Select
                                  </div>
                                  <span
                                    class="tw-inline-flex tw-items-center tw-rounded-md tw-bg-gray-400 dark:tw-bg-moon-500 tw-px-1.5 tw-py-0.5 !tw-px-2">
                                    <div
                                      class="tw-text-xs tw-leading-4 tw-text-white dark:tw-text-moon-50 tw-font-medium">
                                      <i class="far fa-fa-regular fa-arrow-turn-down-left"></i>
                                    </div>
                                  </span>
                                </div>
                              </a>
                            </div>
                          </div>

                          <div
                            class="tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-xs tw-my-2"
                            id="search-category-results">
                            <span class="tw-shrink-0 tw-basis-auto">Trending Categories ✨</span>
                            <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
                          </div>
                          <div class="list-reset relevant-results">
                            <div class="results-item"
                              data-action="click->analytics-tracker#trackEvent click->targeting-ads#addSearchItemToInterest click->search-v2#storeRecentlySearched mouseenter->search-v2#renderSmartResult mouseenter->search-v2#addSelectIconToResult mouseleave->search-v2#removeSelectIconInResult"
                              data-smart-result="{&quot;id&quot;:508,&quot;name&quot;:&quot;Binance HODLer Airdrops&quot;,&quot;market_cap_1h_change&quot;:1.0258962703474923,&quot;slug&quot;:&quot;binance-hodler-airdrops&quot;,&quot;coins_count&quot;:&quot;11&quot;,&quot;data&quot;:{&quot;market_cap&quot;:3673668476.488437,&quot;market_cap_btc&quot;:42900.73710809222,&quot;total_volume&quot;:1473669409.3576264,&quot;total_volume_btc&quot;:17209.365602723312,&quot;market_cap_change_percentage_24h&quot;:{&quot;aed&quot;:0.2284518949133642,&quot;ars&quot;:0.22845189491337356,&quot;aud&quot;:0.22845189491338694,&quot;bch&quot;:0.21375094618867158,&quot;bdt&quot;:0.22845189491336296,&quot;bhd&quot;:0.2284518949133677,&quot;bmd&quot;:0.22845189491337692,&quot;bnb&quot;:-3.183374337801085,&quot;brl&quot;:0.22845189491338092,&quot;btc&quot;:-1.3056689228461882,&quot;cad&quot;:0.22845189491342782,&quot;chf&quot;:0.22845189491337972,&quot;clp&quot;:0.22845189491337378,&quot;cny&quot;:0.22845189491340137,&quot;czk&quot;:0.22845189491334464,&quot;dkk&quot;:0.22845189491336584,&quot;dot&quot;:0.8298626093271693,&quot;eos&quot;:-0.7868075365493804,&quot;eth&quot;:0.8661359066478506,&quot;eur&quot;:0.2284518949133717,&quot;gbp&quot;:0.2284518949133731,&quot;gel&quot;:0.22845189491338355,&quot;hkd&quot;:0.22845189491337398,&quot;huf&quot;:0.22845189491337298,&quot;idr&quot;:0.22845189491337617,&quot;ils&quot;:0.22845189491336168,&quot;inr&quot;:0.22845189491338258,&quot;jpy&quot;:0.2284518949133571,&quot;krw&quot;:0.2284518949134046,&quot;kwd&quot;:0.22845189491335552,&quot;lkr&quot;:0.22845189491341958,&quot;ltc&quot;:4.192587803859231,&quot;mmk&quot;:0.2284518949133629,&quot;mxn&quot;:0.22845189491335285,&quot;myr&quot;:0.2284518949133633,&quot;ngn&quot;:0.22845189491341103,&quot;nok&quot;:0.22845189491335727,&quot;nzd&quot;:0.22845189491345264,&quot;php&quot;:0.22845189491338827,&quot;pkr&quot;:0.228451894913408,&quot;pln&quot;:0.2284518949133868,&quot;rub&quot;:0.2284518949133815,&quot;sar&quot;:0.2284518949133912,&quot;sek&quot;:0.22845189491338663,&quot;sgd&quot;:0.22845189491345003,&quot;thb&quot;:0.22844896748220692,&quot;try&quot;:0.22845189491336246,&quot;twd&quot;:0.22845189491336407,&quot;uah&quot;:0.22845189491337084,&quot;usd&quot;:0.22845189491337692,&quot;vef&quot;:0.22845189491338636,&quot;vnd&quot;:0.22845189491336815,&quot;xag&quot;:0.22845189491336923,&quot;xau&quot;:0.22845189491335205,&quot;xdr&quot;:0.22845189491339205,&quot;xlm&quot;:-12.453573059321661,&quot;xrp&quot;:-4.5399800759937134,&quot;yfi&quot;:1.7692884773304947,&quot;zar&quot;:0.22845189491338502,&quot;bits&quot;:-1.3056689228461813,&quot;link&quot;:0.25715327108071884,&quot;sats&quot;:-1.305668922846189},&quot;sparkline&quot;:&quot;https://www.coingecko.com/categories/508/sparkline.svg&quot;}}"
                              data-type="Category" data-interest-data-key="adTargetingCategories"
                              data-interest-data-value="undefined" data-is-coin-search-result="false"
                              data-analytics-event="select_search_highlights"
                              data-analytics-event-properties="{&quot;search_category&quot;:&quot;trending_category&quot;}">
                              <a href="https://www.coingecko.com/en/search_redirect?id=508&amp;type=category"
                                class="tw-flex tw-justify-between tw-px-2 tw-py-3 tw-rounded-lg">
                                <div class="tw-flex tw-items-center">
                                  <i class="fas fa-list-alt dark:tw-opacity-60 tw-w-6 tw-mr-2"></i>
                                  <div
                                    class="tw-text-gray-700 tw-text-sm tw-font-semibold hover:tw-text-gray-900 dark:tw-text-moon-100 dark:hover:tw-text-moon-50 tw-mr-1">
                                    Binance HODLer Airdrops</div>
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular tw-flex-grow tw-mt-0.5">
                                  </div>
                                </div>
                                <div class="tw-flex tw-items-center" id="rightText">

                                  <span class="tw-text-success-500 dark:tw-text-success-400 tw-break-words">
                                    <i class="fas fa-caret-up tw-mr-1"></i>
                                    1.03%
                                  </span>
                                </div>
                                <div class="tw-hidden tw-flex-row tw-items-center tw-gap-1" id="rightTextButton">
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium">
                                    Select
                                  </div>
                                  <span
                                    class="tw-inline-flex tw-items-center tw-rounded-md tw-bg-gray-400 dark:tw-bg-moon-500 tw-px-1.5 tw-py-0.5 !tw-px-2">
                                    <div
                                      class="tw-text-xs tw-leading-4 tw-text-white dark:tw-text-moon-50 tw-font-medium">
                                      <i class="far fa-fa-regular fa-arrow-turn-down-left"></i>
                                    </div>
                                  </span>
                                </div>
                              </a>
                            </div>
                            <div class="results-item"
                              data-action="click->analytics-tracker#trackEvent click->targeting-ads#addSearchItemToInterest click->search-v2#storeRecentlySearched mouseenter->search-v2#renderSmartResult mouseenter->search-v2#addSelectIconToResult mouseleave->search-v2#removeSelectIconInResult"
                              data-smart-result="{&quot;id&quot;:251,&quot;name&quot;:&quot;Solana Meme&quot;,&quot;market_cap_1h_change&quot;:0.20303947595912714,&quot;slug&quot;:&quot;solana-meme-coins&quot;,&quot;coins_count&quot;:&quot;1234&quot;,&quot;data&quot;:{&quot;market_cap&quot;:9003950090.213072,&quot;market_cap_btc&quot;:105147.23857821959,&quot;total_volume&quot;:2689015255.889881,&quot;total_volume_btc&quot;:31402.05418940018,&quot;market_cap_change_percentage_24h&quot;:{&quot;aed&quot;:-1.9885881073853056,&quot;ars&quot;:-1.9885881073853247,&quot;aud&quot;:-1.988588107385348,&quot;bch&quot;:-1.9417475646760753,&quot;bdt&quot;:-1.9885881073852592,&quot;bhd&quot;:-1.9885881073853269,&quot;bmd&quot;:-1.9885881073853195,&quot;bnb&quot;:-5.31075298597811,&quot;brl&quot;:-1.9885881073853287,&quot;btc&quot;:-3.4810042382948185,&quot;cad&quot;:-1.988588107385261,&quot;chf&quot;:-1.9885881073853175,&quot;clp&quot;:-1.9885881073853355,&quot;cny&quot;:-1.9885881073853127,&quot;czk&quot;:-1.9885881073853435,&quot;dkk&quot;:-1.9885881073853227,&quot;dot&quot;:-1.3644561667958812,&quot;eos&quot;:-2.972583735072518,&quot;eth&quot;:-1.3723449155332164,&quot;eur&quot;:-1.9885881073853189,&quot;gbp&quot;:-1.9885881073853195,&quot;gel&quot;:-1.9885881073852993,&quot;hkd&quot;:-1.9885881073853318,&quot;huf&quot;:-1.9885881073853213,&quot;idr&quot;:-1.9885881073853184,&quot;ils&quot;:-1.9885881073853078,&quot;inr&quot;:-1.988588107385316,&quot;jpy&quot;:-1.9885881073853522,&quot;krw&quot;:-1.9885881073853238,&quot;kwd&quot;:-1.9885881073853064,&quot;lkr&quot;:-1.9885881073853067,&quot;ltc&quot;:1.9462669450816417,&quot;mmk&quot;:-1.988588107385315,&quot;mxn&quot;:-1.9885881073853195,&quot;myr&quot;:-1.9885881073853429,&quot;ngn&quot;:-1.9885881073853287,&quot;nok&quot;:-1.9885881073853175,&quot;nzd&quot;:-1.9885881073852858,&quot;php&quot;:-1.9885881073853184,&quot;pkr&quot;:-1.9885881073853084,&quot;pln&quot;:-1.988588107385306,&quot;rub&quot;:-1.9885881073853244,&quot;sar&quot;:-1.9885881073853318,&quot;sek&quot;:-1.9885881073853324,&quot;sgd&quot;:-1.988588107385287,&quot;thb&quot;:-1.9885909700620996,&quot;try&quot;:-1.9885881073853306,&quot;twd&quot;:-1.9885881073853133,&quot;uah&quot;:-1.9885881073853247,&quot;usd&quot;:-1.9885881073853195,&quot;vef&quot;:-1.9885881073853202,&quot;vnd&quot;:-1.9885881073853202,&quot;xag&quot;:-1.9885881073853278,&quot;xau&quot;:-1.9885881073853504,&quot;xdr&quot;:-1.9885881073853207,&quot;xlm&quot;:-14.395140337654915,&quot;xrp&quot;:-6.616164988294887,&quot;yfi&quot;:-0.4605504982565209,&quot;zar&quot;:-1.98858810738537,&quot;bits&quot;:-3.481004238294826,&quot;link&quot;:-1.949487139281792,&quot;sats&quot;:-3.481004238294822},&quot;sparkline&quot;:&quot;https://www.coingecko.com/categories/251/sparkline.svg&quot;}}"
                              data-type="Category" data-interest-data-key="adTargetingCategories"
                              data-interest-data-value="undefined" data-is-coin-search-result="false"
                              data-analytics-event="select_search_highlights"
                              data-analytics-event-properties="{&quot;search_category&quot;:&quot;trending_category&quot;}">
                              <a href="https://www.coingecko.com/en/search_redirect?id=251&amp;type=category"
                                class="tw-flex tw-justify-between tw-px-2 tw-py-3 tw-rounded-lg">
                                <div class="tw-flex tw-items-center">
                                  <i class="fas fa-list-alt dark:tw-opacity-60 tw-w-6 tw-mr-2"></i>
                                  <div
                                    class="tw-text-gray-700 tw-text-sm tw-font-semibold hover:tw-text-gray-900 dark:tw-text-moon-100 dark:hover:tw-text-moon-50 tw-mr-1">
                                    Solana Meme</div>
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular tw-flex-grow tw-mt-0.5">
                                  </div>
                                </div>
                                <div class="tw-flex tw-items-center" id="rightText">

                                  <span class="tw-text-success-500 dark:tw-text-success-400 tw-break-words">
                                    <i class="fas fa-caret-up tw-mr-1"></i>
                                    0.20%
                                  </span>
                                </div>
                                <div class="tw-hidden tw-flex-row tw-items-center tw-gap-1" id="rightTextButton">
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium">
                                    Select
                                  </div>
                                  <span
                                    class="tw-inline-flex tw-items-center tw-rounded-md tw-bg-gray-400 dark:tw-bg-moon-500 tw-px-1.5 tw-py-0.5 !tw-px-2">
                                    <div
                                      class="tw-text-xs tw-leading-4 tw-text-white dark:tw-text-moon-50 tw-font-medium">
                                      <i class="far fa-fa-regular fa-arrow-turn-down-left"></i>
                                    </div>
                                  </span>
                                </div>
                              </a>
                            </div>
                            <div class="results-item"
                              data-action="click->analytics-tracker#trackEvent click->targeting-ads#addSearchItemToInterest click->search-v2#storeRecentlySearched mouseenter->search-v2#renderSmartResult mouseenter->search-v2#addSelectIconToResult mouseleave->search-v2#removeSelectIconInResult"
                              data-smart-result="{&quot;id&quot;:491,&quot;name&quot;:&quot;RWA Protocol&quot;,&quot;market_cap_1h_change&quot;:0.1568903960179309,&quot;slug&quot;:&quot;rwa-protocol&quot;,&quot;coins_count&quot;:&quot;49&quot;,&quot;data&quot;:{&quot;market_cap&quot;:6303997737.031189,&quot;market_cap_btc&quot;:73615.5747721996,&quot;total_volume&quot;:408851855.11762017,&quot;total_volume_btc&quot;:4774.409123652066,&quot;market_cap_change_percentage_24h&quot;:{&quot;aed&quot;:2.6968617579993146,&quot;ars&quot;:2.696861757999327,&quot;aud&quot;:2.696861757999338,&quot;bch&quot;:2.808718968909923,&quot;bdt&quot;:2.6968617579993266,&quot;bhd&quot;:2.696861757999358,&quot;bmd&quot;:2.69686175799933,&quot;bnb&quot;:-0.7646518924230218,&quot;brl&quot;:2.6968617579993532,&quot;btc&quot;:1.1620574371858465,&quot;cad&quot;:2.7110616075286025,&quot;chf&quot;:2.7041379665153435,&quot;clp&quot;:2.696861757999346,&quot;cny&quot;:2.6968617579993226,&quot;czk&quot;:2.696861757999327,&quot;dkk&quot;:2.696861757999349,&quot;dot&quot;:3.403525693505656,&quot;eos&quot;:1.7087997112776283,&quot;eth&quot;:3.4229544910261422,&quot;eur&quot;:2.696861757999338,&quot;gbp&quot;:2.696861757999338,&quot;gel&quot;:2.6968617579993417,&quot;hkd&quot;:2.6968617579993377,&quot;huf&quot;:2.696861757999345,&quot;idr&quot;:2.6968617579993364,&quot;ils&quot;:2.6968617579993435,&quot;inr&quot;:2.6968617579993337,&quot;jpy&quot;:2.696861757999329,&quot;krw&quot;:2.696861757999313,&quot;kwd&quot;:2.696861757999301,&quot;lkr&quot;:2.6968617579993346,&quot;ltc&quot;:6.847697609982172,&quot;mmk&quot;:2.6968617579993306,&quot;mxn&quot;:2.6968617579992973,&quot;myr&quot;:2.6968617579993346,&quot;ngn&quot;:2.6968617579992915,&quot;nok&quot;:2.696861757999343,&quot;nzd&quot;:2.696861757999394,&quot;php&quot;:2.6968617579993497,&quot;pkr&quot;:2.6968617579993257,&quot;pln&quot;:2.6968617579993355,&quot;rub&quot;:2.696861757999328,&quot;sar&quot;:2.696861757999358,&quot;sek&quot;:2.696861757999336,&quot;sgd&quot;:2.696861757999388,&quot;thb&quot;:2.6968647575268783,&quot;try&quot;:2.696861757999331,&quot;twd&quot;:2.696861757999345,&quot;uah&quot;:2.696861757999315,&quot;usd&quot;:2.69686175799933,&quot;vef&quot;:2.696861757999336,&quot;vnd&quot;:2.696861757999365,&quot;xag&quot;:2.6968617579993217,&quot;xau&quot;:2.6968617579993266,&quot;xdr&quot;:2.69686175799934,&quot;xlm&quot;:-10.32095570625598,&quot;xrp&quot;:-2.106606003272048,&quot;yfi&quot;:4.317586986024515,&quot;zar&quot;:2.6968617579993244,&quot;bits&quot;:1.1620574371858543,&quot;link&quot;:2.732011776150547,&quot;sats&quot;:1.1620574371858448},&quot;sparkline&quot;:&quot;https://www.coingecko.com/categories/491/sparkline.svg&quot;}}"
                              data-type="Category" data-interest-data-key="adTargetingCategories"
                              data-interest-data-value="undefined" data-is-coin-search-result="false"
                              data-analytics-event="select_search_highlights"
                              data-analytics-event-properties="{&quot;search_category&quot;:&quot;trending_category&quot;}">
                              <a href="https://www.coingecko.com/en/search_redirect?id=491&amp;type=category"
                                class="tw-flex tw-justify-between tw-px-2 tw-py-3 tw-rounded-lg">
                                <div class="tw-flex tw-items-center">
                                  <i class="fas fa-list-alt dark:tw-opacity-60 tw-w-6 tw-mr-2"></i>
                                  <div
                                    class="tw-text-gray-700 tw-text-sm tw-font-semibold hover:tw-text-gray-900 dark:tw-text-moon-100 dark:hover:tw-text-moon-50 tw-mr-1">
                                    RWA Protocol</div>
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular tw-flex-grow tw-mt-0.5">
                                  </div>
                                </div>
                                <div class="tw-flex tw-items-center" id="rightText">

                                  <span class="tw-text-success-500 dark:tw-text-success-400 tw-break-words">
                                    <i class="fas fa-caret-up tw-mr-1"></i>
                                    0.16%
                                  </span>
                                </div>
                                <div class="tw-hidden tw-flex-row tw-items-center tw-gap-1" id="rightTextButton">
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium">
                                    Select
                                  </div>
                                  <span
                                    class="tw-inline-flex tw-items-center tw-rounded-md tw-bg-gray-400 dark:tw-bg-moon-500 tw-px-1.5 tw-py-0.5 !tw-px-2">
                                    <div
                                      class="tw-text-xs tw-leading-4 tw-text-white dark:tw-text-moon-50 tw-font-medium">
                                      <i class="far fa-fa-regular fa-arrow-turn-down-left"></i>
                                    </div>
                                  </span>
                                </div>
                              </a>
                            </div>
                            <div class="results-item"
                              data-action="click->analytics-tracker#trackEvent click->targeting-ads#addSearchItemToInterest click->search-v2#storeRecentlySearched mouseenter->search-v2#renderSmartResult mouseenter->search-v2#addSelectIconToResult mouseleave->search-v2#removeSelectIconInResult"
                              data-smart-result="{&quot;id&quot;:10623,&quot;name&quot;:&quot;Binance Alpha Spotlight&quot;,&quot;market_cap_1h_change&quot;:0.15403295974213865,&quot;slug&quot;:&quot;binance-alpha-spotlight&quot;,&quot;coins_count&quot;:&quot;98&quot;,&quot;data&quot;:{&quot;market_cap&quot;:8895484273.399624,&quot;market_cap_btc&quot;:103877.92238830491,&quot;total_volume&quot;:1268401738.6684165,&quot;total_volume_btc&quot;:14811.890316145085,&quot;market_cap_change_percentage_24h&quot;:{&quot;aed&quot;:-1.0388885403893144,&quot;ars&quot;:-1.0388885403892907,&quot;aud&quot;:-1.0388885403892851,&quot;bch&quot;:-0.931100301031325,&quot;bdt&quot;:-1.0388885403892907,&quot;bhd&quot;:-1.0388885403892831,&quot;bmd&quot;:-1.0388885403892874,&quot;bnb&quot;:-4.374484510065813,&quot;brl&quot;:-1.0388885403892827,&quot;btc&quot;:-2.5178620831118343,&quot;cad&quot;:-1.0252052313969862,&quot;chf&quot;:-1.0318770147240546,&quot;clp&quot;:-1.0388885403892818,&quot;cny&quot;:-1.0388885403892911,&quot;czk&quot;:-1.0388885403892945,&quot;dkk&quot;:-1.0388885403892738,&quot;dot&quot;:-0.357930551128435,&quot;eos&quot;:-1.99100836820886,&quot;eth&quot;:-0.3392085048649065,&quot;eur&quot;:-1.0388885403892878,&quot;gbp&quot;:-1.0388885403892816,&quot;gel&quot;:-1.0388885403892818,&quot;hkd&quot;:-1.0388885403892911,&quot;huf&quot;:-1.0388885403892785,&quot;idr&quot;:-1.038888540389282,&quot;ils&quot;:-1.0388885403892631,&quot;inr&quot;:-1.038888540389288,&quot;jpy&quot;:-1.038888540389281,&quot;krw&quot;:-1.0388885403893178,&quot;kwd&quot;:-1.038888540389323,&quot;lkr&quot;:-1.038888540389305,&quot;ltc&quot;:2.960954515833681,&quot;mmk&quot;:-1.03888854038928,&quot;mxn&quot;:-1.0388885403893373,&quot;myr&quot;:-1.0388885403892802,&quot;ngn&quot;:-1.0388885403893242,&quot;nok&quot;:-1.0388885403892867,&quot;nzd&quot;:-1.0388885403892338,&quot;php&quot;:-1.0388885403892896,&quot;pkr&quot;:-1.0388885403893027,&quot;pln&quot;:-1.0388885403892945,&quot;rub&quot;:-1.0388885403892916,&quot;sar&quot;:-1.038888540389261,&quot;sek&quot;:-1.038888540389277,&quot;sgd&quot;:-1.0388885403892307,&quot;thb&quot;:-1.0388856499739845,&quot;try&quot;:-1.0388885403892816,&quot;twd&quot;:-1.0388885403892911,&quot;uah&quot;:-1.038888540389299,&quot;usd&quot;:-1.0388885403892874,&quot;vef&quot;:-1.0388885403892774,&quot;vnd&quot;:-1.038888540389265,&quot;xag&quot;:-1.0388885403893022,&quot;xau&quot;:-1.0388885403892862,&quot;xdr&quot;:-1.0388885403892913,&quot;xlm&quot;:-13.583163633008564,&quot;xrp&quot;:-5.667623054555665,&quot;yfi&quot;:0.5228804094151431,&quot;zar&quot;:-1.0388885403893016,&quot;bits&quot;:-2.517862083111831,&quot;link&quot;:-1.0050171561568426,&quot;sats&quot;:-2.5178620831118304},&quot;sparkline&quot;:&quot;https://www.coingecko.com/categories/10623/sparkline.svg&quot;}}"
                              data-type="Category" data-interest-data-key="adTargetingCategories"
                              data-interest-data-value="undefined" data-is-coin-search-result="false"
                              data-analytics-event="select_search_highlights"
                              data-analytics-event-properties="{&quot;search_category&quot;:&quot;trending_category&quot;}">
                              <a href="https://www.coingecko.com/en/search_redirect?id=10623&amp;type=category"
                                class="tw-flex tw-justify-between tw-px-2 tw-py-3 tw-rounded-lg">
                                <div class="tw-flex tw-items-center">
                                  <i class="fas fa-list-alt dark:tw-opacity-60 tw-w-6 tw-mr-2"></i>
                                  <div
                                    class="tw-text-gray-700 tw-text-sm tw-font-semibold hover:tw-text-gray-900 dark:tw-text-moon-100 dark:hover:tw-text-moon-50 tw-mr-1">
                                    Binance Alpha Spotlight</div>
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular tw-flex-grow tw-mt-0.5">
                                  </div>
                                </div>
                                <div class="tw-flex tw-items-center" id="rightText">

                                  <span class="tw-text-success-500 dark:tw-text-success-400 tw-break-words">
                                    <i class="fas fa-caret-up tw-mr-1"></i>
                                    0.15%
                                  </span>
                                </div>
                                <div class="tw-hidden tw-flex-row tw-items-center tw-gap-1" id="rightTextButton">
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium">
                                    Select
                                  </div>
                                  <span
                                    class="tw-inline-flex tw-items-center tw-rounded-md tw-bg-gray-400 dark:tw-bg-moon-500 tw-px-1.5 tw-py-0.5 !tw-px-2">
                                    <div
                                      class="tw-text-xs tw-leading-4 tw-text-white dark:tw-text-moon-50 tw-font-medium">
                                      <i class="far fa-fa-regular fa-arrow-turn-down-left"></i>
                                    </div>
                                  </span>
                                </div>
                              </a>
                            </div>
                            <div class="results-item"
                              data-action="click->analytics-tracker#trackEvent click->targeting-ads#addSearchItemToInterest click->search-v2#storeRecentlySearched mouseenter->search-v2#renderSmartResult mouseenter->search-v2#addSelectIconToResult mouseleave->search-v2#removeSelectIconInResult"
                              data-smart-result="{&quot;id&quot;:45,&quot;name&quot;:&quot;Decentralized Finance (DeFi)&quot;,&quot;market_cap_1h_change&quot;:0.11048756442478254,&quot;slug&quot;:&quot;decentralized-finance-defi&quot;,&quot;coins_count&quot;:&quot;1085&quot;,&quot;data&quot;:{&quot;market_cap&quot;:97181833185.75279,&quot;market_cap_btc&quot;:1134879.8357465435,&quot;total_volume&quot;:5092892298.761326,&quot;total_volume_btc&quot;:59474.29253002023,&quot;market_cap_change_percentage_24h&quot;:{&quot;aed&quot;:-0.45032970724791677,&quot;ars&quot;:-0.4503297072479009,&quot;aud&quot;:-0.4503297072479156,&quot;bch&quot;:-0.4649310960837518,&quot;bdt&quot;:-0.45032970724791216,&quot;bhd&quot;:-0.45032970724790417,&quot;bmd&quot;:-0.4503297072478923,&quot;bnb&quot;:-3.8390498774346726,&quot;brl&quot;:-0.4503297072479003,&quot;btc&quot;:-1.9740609303674186,&quot;cad&quot;:-0.45032970724785093,&quot;chf&quot;:-0.4503297072478986,&quot;clp&quot;:-0.45032970724790644,&quot;cny&quot;:-0.4503297072478818,&quot;czk&quot;:-0.4503297072479237,&quot;dkk&quot;:-0.4503297072479118,&quot;dot&quot;:0.14700804663851683,&quot;eos&quot;:-1.4587134521120158,&quot;eth&quot;:0.18303568869460582,&quot;eur&quot;:-0.4503297072478934,&quot;gbp&quot;:-0.45032970724789706,&quot;gel&quot;:-0.4503297072478981,&quot;hkd&quot;:-0.45032970724790633,&quot;huf&quot;:-0.45032970724789184,&quot;idr&quot;:-0.45032970724790894,&quot;ils&quot;:-0.45032970724793625,&quot;inr&quot;:-0.4503297072479032,&quot;jpy&quot;:-0.4503297072479171,&quot;krw&quot;:-0.45032970724787635,&quot;kwd&quot;:-0.4503297072479032,&quot;lkr&quot;:-0.4503297072478727,&quot;ltc&quot;:3.4869597077874155,&quot;mmk&quot;:-0.4503297072479243,&quot;mxn&quot;:-0.4503297072479344,&quot;myr&quot;:-0.45032970724791754,&quot;ngn&quot;:-0.45032970724787147,&quot;nok&quot;:-0.450329707247908,&quot;nzd&quot;:-0.4503297072478437,&quot;php&quot;:-0.45032970724789395,&quot;pkr&quot;:-0.45032970724786625,&quot;pln&quot;:-0.4503297072478889,&quot;rub&quot;:-0.4503297072478946,&quot;sar&quot;:-0.4503297072478728,&quot;sek&quot;:-0.45032970724790217,&quot;sgd&quot;:-0.4503297072478374,&quot;thb&quot;:-0.45033261485350184,&quot;try&quot;:-0.4503297072479146,&quot;twd&quot;:-0.4503297072479112,&quot;uah&quot;:-0.450329707247898,&quot;usd&quot;:-0.4503297072478923,&quot;vef&quot;:-0.4503297072478904,&quot;vnd&quot;:-0.45032970724791915,&quot;xag&quot;:-0.45032970724791277,&quot;xau&quot;:-0.4503297072479233,&quot;xdr&quot;:-0.4503297072478857,&quot;xlm&quot;:-13.046467619886092,&quot;xrp&quot;:-5.186468214255129,&quot;yfi&quot;:1.0800717990575248,&quot;zar&quot;:-0.45032970724789834,&quot;bits&quot;:-1.9740609303674186,&quot;link&quot;:-0.42182270668679595,&quot;sats&quot;:-1.9740609303674268},&quot;sparkline&quot;:&quot;https://www.coingecko.com/categories/45/sparkline.svg&quot;}}"
                              data-type="Category" data-interest-data-key="adTargetingCategories"
                              data-interest-data-value="undefined" data-is-coin-search-result="false"
                              data-analytics-event="select_search_highlights"
                              data-analytics-event-properties="{&quot;search_category&quot;:&quot;trending_category&quot;}">
                              <a href="https://www.coingecko.com/en/search_redirect?id=45&amp;type=category"
                                class="tw-flex tw-justify-between tw-px-2 tw-py-3 tw-rounded-lg">
                                <div class="tw-flex tw-items-center">
                                  <i class="fas fa-list-alt dark:tw-opacity-60 tw-w-6 tw-mr-2"></i>
                                  <div
                                    class="tw-text-gray-700 tw-text-sm tw-font-semibold hover:tw-text-gray-900 dark:tw-text-moon-100 dark:hover:tw-text-moon-50 tw-mr-1">
                                    Decentralized Finance (DeFi)</div>
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular tw-flex-grow tw-mt-0.5">
                                  </div>
                                </div>
                                <div class="tw-flex tw-items-center" id="rightText">

                                  <span class="tw-text-success-500 dark:tw-text-success-400 tw-break-words">
                                    <i class="fas fa-caret-up tw-mr-1"></i>
                                    0.11%
                                  </span>
                                </div>
                                <div class="tw-hidden tw-flex-row tw-items-center tw-gap-1" id="rightTextButton">
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium">
                                    Select
                                  </div>
                                  <span
                                    class="tw-inline-flex tw-items-center tw-rounded-md tw-bg-gray-400 dark:tw-bg-moon-500 tw-px-1.5 tw-py-0.5 !tw-px-2">
                                    <div
                                      class="tw-text-xs tw-leading-4 tw-text-white dark:tw-text-moon-50 tw-font-medium">
                                      <i class="far fa-fa-regular fa-arrow-turn-down-left"></i>
                                    </div>
                                  </span>
                                </div>
                              </a>
                            </div>
                            <div class="results-item"
                              data-action="click->analytics-tracker#trackEvent click->targeting-ads#addSearchItemToInterest click->search-v2#storeRecentlySearched mouseenter->search-v2#renderSmartResult mouseenter->search-v2#addSelectIconToResult mouseleave->search-v2#removeSelectIconInResult"
                              data-smart-result="{&quot;id&quot;:113,&quot;name&quot;:&quot;Meme&quot;,&quot;market_cap_1h_change&quot;:0.09230666336068075,&quot;slug&quot;:&quot;meme-token&quot;,&quot;coins_count&quot;:&quot;4335&quot;,&quot;data&quot;:{&quot;market_cap&quot;:61925957699.21943,&quot;market_cap_btc&quot;:723169.7465750196,&quot;total_volume&quot;:5577826672.597947,&quot;total_volume_btc&quot;:65137.71689820611,&quot;market_cap_change_percentage_24h&quot;:{&quot;aed&quot;:-0.03860979942848675,&quot;ars&quot;:-0.038609799428495274,&quot;aud&quot;:-0.038609799428488724,&quot;bch&quot;:0.03371356739854956,&quot;bdt&quot;:-0.0386097994285044,&quot;bhd&quot;:-0.03860979942849232,&quot;bmd&quot;:-0.03860979942849044,&quot;bnb&quot;:-3.4200543295618515,&quot;brl&quot;:-0.038609799428492374,&quot;btc&quot;:-1.557478166205677,&quot;cad&quot;:-0.03860979942852792,&quot;chf&quot;:-0.038609799428488155,&quot;clp&quot;:-0.0386097994284964,&quot;cny&quot;:-0.03860979942848049,&quot;czk&quot;:-0.03860979942849546,&quot;dkk&quot;:-0.03860979942848072,&quot;dot&quot;:0.6077199776592653,&quot;eos&quot;:-1.0235256450582355,&quot;eth&quot;:0.5924222499163786,&quot;eur&quot;:-0.038609799428481945,&quot;gbp&quot;:-0.03860979942848103,&quot;gel&quot;:-0.038609799428471835,&quot;hkd&quot;:-0.03860979942849151,&quot;huf&quot;:-0.038609799428493505,&quot;idr&quot;:-0.03860979942850844,&quot;ils&quot;:-0.038609799428485046,&quot;inr&quot;:-0.03860979942850329,&quot;jpy&quot;:-0.03860979942850197,&quot;krw&quot;:-0.038609799428566696,&quot;kwd&quot;:-0.038609799428474416,&quot;lkr&quot;:-0.038609799428495566,&quot;ltc&quot;:3.9889659736718937,&quot;mmk&quot;:-0.0386097994285499,&quot;mxn&quot;:-0.03860979942853454,&quot;myr&quot;:-0.03860979942848895,&quot;ngn&quot;:-0.03860979942845917,&quot;nok&quot;:-0.03860979942850557,&quot;nzd&quot;:-0.03860979942845113,&quot;php&quot;:-0.03860979942849969,&quot;pkr&quot;:-0.038609799428488134,&quot;pln&quot;:-0.03860979942850989,&quot;rub&quot;:-0.038609799428506404,&quot;sar&quot;:-0.038609799428490806,&quot;sek&quot;:-0.038609799428494636,&quot;sgd&quot;:-0.03860979942851216,&quot;thb&quot;:-0.03861271905943945,&quot;try&quot;:-0.03860979942850189,&quot;twd&quot;:-0.03860979942848958,&quot;uah&quot;:-0.03860979942849686,&quot;usd&quot;:-0.03860979942849044,&quot;vef&quot;:-0.03860979942850314,&quot;vnd&quot;:-0.038609799428540814,&quot;xag&quot;:-0.03860979942849191,&quot;xau&quot;:-0.03860979942847488,&quot;xdr&quot;:-0.03860979942848953,&quot;xlm&quot;:-12.71185837669832,&quot;xrp&quot;:-4.748431558555464,&quot;yfi&quot;:1.5199399789075039,&quot;zar&quot;:-0.03860979942848655,&quot;bits&quot;:-1.5574781662056876,&quot;link&quot;:0.0018627615575626424,&quot;sats&quot;:-1.5574781662056862},&quot;sparkline&quot;:&quot;https://www.coingecko.com/categories/113/sparkline.svg&quot;}}"
                              data-type="Category" data-interest-data-key="adTargetingCategories"
                              data-interest-data-value="undefined" data-is-coin-search-result="false"
                              data-analytics-event="select_search_highlights"
                              data-analytics-event-properties="{&quot;search_category&quot;:&quot;trending_category&quot;}">
                              <a href="https://www.coingecko.com/en/search_redirect?id=113&amp;type=category"
                                class="tw-flex tw-justify-between tw-px-2 tw-py-3 tw-rounded-lg">
                                <div class="tw-flex tw-items-center">
                                  <i class="fas fa-list-alt dark:tw-opacity-60 tw-w-6 tw-mr-2"></i>
                                  <div
                                    class="tw-text-gray-700 tw-text-sm tw-font-semibold hover:tw-text-gray-900 dark:tw-text-moon-100 dark:hover:tw-text-moon-50 tw-mr-1">
                                    Meme</div>
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular tw-flex-grow tw-mt-0.5">
                                  </div>
                                </div>
                                <div class="tw-flex tw-items-center" id="rightText">

                                  <span class="tw-text-success-500 dark:tw-text-success-400 tw-break-words">
                                    <i class="fas fa-caret-up tw-mr-1"></i>
                                    0.09%
                                  </span>
                                </div>
                                <div class="tw-hidden tw-flex-row tw-items-center tw-gap-1" id="rightTextButton">
                                  <div
                                    class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium">
                                    Select
                                  </div>
                                  <span
                                    class="tw-inline-flex tw-items-center tw-rounded-md tw-bg-gray-400 dark:tw-bg-moon-500 tw-px-1.5 tw-py-0.5 !tw-px-2">
                                    <div
                                      class="tw-text-xs tw-leading-4 tw-text-white dark:tw-text-moon-50 tw-font-medium">
                                      <i class="far fa-fa-regular fa-arrow-turn-down-left"></i>
                                    </div>
                                  </span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="md:tw-col-span-2 md:tw-px-4 md:tw-border-l md:tw-border-gray-200 dark:md:tw-border-moon-700">
                      <div data-search-v2-target="smartResult" class="tw-hidden md:tw-block tw-mt-4">
                        <div>
                          <div class="tw-mb-5">
                            <div class="tailwind-reset">

                              <div
                                class="tw-text-xs tw-leading-4 tw-text-gray-900 dark:tw-text-moon-50 tw-font-semibold tw-flex-grow">
                                KAITO Stats
                              </div>
                              <div
                                class="tw-grid tw-grid-cols-1 tw-divide-y tw-divide-gray-200 dark:tw-divide-moon-700">

                                <div class="tw-flex tw-justify-between tw-py-3">
                                  <span
                                    class="tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-text-xs tw-leading-5">
                                    Rank
                                  </span>
                                  <div class="tw-pl-2 tw-text-right">
                                    <span
                                      class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-xs tw-leading-5">135</span>
                                  </div>
                                </div>

                                <div class="tw-flex tw-justify-between tw-py-3">
                                  <span
                                    class="tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-text-xs tw-leading-5">
                                    Price
                                  </span>
                                  <div class="tw-pl-2 tw-text-right">
                                    <span
                                      class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-xs tw-leading-5">
                                      <span class="no-wrap tw-text-xs" data-price-target="price" data-coin-id="54411"
                                        data-coin-symbol="KAITO" data-no-decimal=""
                                        data-price-btc="0.00002649631675456704"
                                        data-prev-price="2.2690210410324116">$2.27</span></span>
                                  </div>
                                </div>

                                <div class="tw-flex tw-justify-between tw-py-3">
                                  <span
                                    class="tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-text-xs tw-leading-5">
                                    24h%
                                  </span>
                                  <div class="tw-pl-2 tw-text-right">
                                    <span
                                      class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-xs tw-leading-5">
                                      <span
                                        class="tw-text-success-500 dark:tw-text-success-400 tw-break-words tw-text-xs"
                                        data-json="{&quot;aed&quot;:8.379561414860415,&quot;ars&quot;:8.379561414860394,&quot;aud&quot;:8.379561414860381,&quot;bch&quot;:11.278723940498441,&quot;bdt&quot;:8.379561414860355,&quot;bhd&quot;:8.379561414860405,&quot;bmd&quot;:8.379561414860389,&quot;bnb&quot;:6.064280310545707,&quot;brl&quot;:8.37956141486039,&quot;btc&quot;:8.559789536718894,&quot;cad&quot;:8.379561414860385,&quot;chf&quot;:8.379561414860403,&quot;clp&quot;:8.37956141486039,&quot;cny&quot;:8.379561414860428,&quot;czk&quot;:8.379561414860415,&quot;dkk&quot;:8.379561414860415,&quot;dot&quot;:9.986039630215695,&quot;eos&quot;:7.9779255052934595,&quot;eth&quot;:10.92743427089452,&quot;eur&quot;:8.379561414860394,&quot;gbp&quot;:8.37956141486041,&quot;gel&quot;:8.379561414860397,&quot;hkd&quot;:8.379561414860367,&quot;huf&quot;:8.37956141486042,&quot;idr&quot;:8.379561414860401,&quot;ils&quot;:8.379561414860442,&quot;inr&quot;:8.379561414860405,&quot;jpy&quot;:8.37956141486041,&quot;krw&quot;:8.37956141486033,&quot;kwd&quot;:8.379561414860397,&quot;lkr&quot;:8.37956141486039,&quot;ltc&quot;:14.512362222073019,&quot;mmk&quot;:8.379561414860389,&quot;mxn&quot;:8.379561414860405,&quot;myr&quot;:8.379561414860415,&quot;ngn&quot;:8.379561414860438,&quot;nok&quot;:8.3795614148604,&quot;nzd&quot;:8.379561414860433,&quot;php&quot;:8.379561414860403,&quot;pkr&quot;:8.379561414860415,&quot;pln&quot;:8.379561414860394,&quot;rub&quot;:8.37956141486041,&quot;sar&quot;:8.379561414860413,&quot;sek&quot;:8.379561414860403,&quot;sgd&quot;:8.379561414860422,&quot;thb&quot;:8.379561414860424,&quot;try&quot;:8.379561414860413,&quot;twd&quot;:8.379561414860435,&quot;uah&quot;:8.379561414860422,&quot;usd&quot;:8.379561414860389,&quot;vef&quot;:8.379561414860413,&quot;vnd&quot;:8.379561414860387,&quot;xag&quot;:8.3795614148604,&quot;xau&quot;:8.379561414860383,&quot;xdr&quot;:8.379561414860396,&quot;xlm&quot;:-1.8885884226970981,&quot;xrp&quot;:5.858057195109975,&quot;yfi&quot;:11.100571739522605,&quot;zar&quot;:8.379561414860394,&quot;bits&quot;:8.55978953671889,&quot;link&quot;:9.294456258255899,&quot;sats&quot;:8.559789536718895}"
                                        data-up-class="tw-text-success-500 dark:tw-text-success-400"
                                        data-down-class="tw-text-danger-500" data-24h="false"
                                        data-percent-change-target="percent" data-show-solid-arrow="true"
                                        data-is-caret="true" data-formatted="true">
                                        <i class="fas fa-caret-up tw-mr-1"></i>8.38%
                                      </span></span>
                                  </div>
                                </div>

                                <div class="tw-flex tw-justify-between tw-py-3">
                                  <span
                                    class="tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-text-xs tw-leading-5">
                                    Market Cap
                                  </span>
                                  <div class="tw-pl-2 tw-text-right">
                                    <span
                                      class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-xs tw-leading-5">
                                      <span class="no-wrap tw-text-xs" data-price-target="price" data-coin-id=""
                                        data-coin-symbol="" data-no-decimal="" data-price-btc="6401.431902898116"
                                        data-prev-price="548188784.6886634">$548,188,785</span></span>
                                  </div>
                                </div>

                                <div class="tw-flex tw-justify-between tw-py-3">
                                  <span
                                    class="tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-text-xs tw-leading-5">
                                    24h Trading Volume
                                  </span>
                                  <div class="tw-pl-2 tw-text-right">
                                    <span
                                      class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-xs tw-leading-5">
                                      <span class="no-wrap tw-text-xs" data-price-target="price" data-coin-id=""
                                        data-coin-symbol="" data-no-decimal="" data-price-btc="8946.160671630654"
                                        data-prev-price="766107492.9173981">$766,107,493</span></span>
                                  </div>
                                </div>

                                <div class="tw-flex tw-justify-between tw-py-3">
                                  <span
                                    class="tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium tw-text-xs tw-leading-5">
                                    Last 7 Days
                                  </span>
                                  <div class="tw-pl-2 tw-text-right">
                                    <span
                                      class="tw-text-gray-700 dark:tw-text-moon-100 tw-font-semibold tw-text-xs tw-leading-5"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="tw-mb-5">
                            <img loading="lazy" class="tw-h-20 tw-w-56 tw-ml-6"
                              src="https://www.coingecko.com/coins/54411/sparkline.svg">
                            <div class="tw-mt-3 tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700">
                            </div>
                          </div>

                          <div>
                            <div
                              class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-semibold tw-mb-1">

                            </div>
                            <div data-view-component="true"
                              class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-regular tw-h-28 tw-overflow-auto">

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tw-hidden md:tw-flex tw-flex-row tw-gap-4 tw-items-center tw-py-2 tw-px-4 tw-bg-gray-100 dark:tw-bg-moon-700 tailwind-reset">
                    <div class="tw-flex tw-flex-row tw-items-center tw-gap-1">
                      <!-- TODO: remove dropdown conditionals along dropdown deprecation -->
                      <span data-view-component="true"
                        class="!tw-px-2 tw-inline-flex tw-items-center tw-px-1.5 tw-py-0.5 tw-bg-gray-400 dark:tw-bg-moon-500 tw-rounded-md">
                        <div data-view-component="true"
                          class="tw-text-xs tw-leading-4 tw-text-white dark:tw-text-moon-50 tw-font-medium">

                          <i class="far fa-fa-regular fa-arrow-up"></i>

                        </div>
                      </span><!-- TODO: remove dropdown conditionals along dropdown deprecation -->
                      <!-- TODO: remove dropdown conditionals along dropdown deprecation -->

                      <!-- TODO: remove dropdown conditionals along dropdown deprecation -->
                      <span data-view-component="true"
                        class="!tw-px-2 tw-inline-flex tw-items-center tw-px-1.5 tw-py-0.5 tw-bg-gray-400 dark:tw-bg-moon-500 tw-rounded-md">
                        <div data-view-component="true"
                          class="tw-text-xs tw-leading-4 tw-text-white dark:tw-text-moon-50 tw-font-medium">

                          <i class="far fa-fa-regular fa-arrow-down"></i>

                        </div>
                      </span><!-- TODO: remove dropdown conditionals along dropdown deprecation -->
                      <!-- TODO: remove dropdown conditionals along dropdown deprecation -->

                      <div data-view-component="true"
                        class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium">
                        Move
                      </div>
                    </div>
                    <div class="tw-flex tw-flex-row tw-items-center tw-gap-1">
                      <!-- TODO: remove dropdown conditionals along dropdown deprecation -->
                      <span data-view-component="true"
                        class="!tw-px-2 tw-inline-flex tw-items-center tw-px-1.5 tw-py-0.5 tw-bg-gray-400 dark:tw-bg-moon-500 tw-rounded-md">
                        <div data-view-component="true"
                          class="tw-text-xs tw-leading-4 tw-text-white dark:tw-text-moon-50 tw-font-medium">

                          <i class="far fa-fa-regular fa-arrow-turn-down-left"></i>

                        </div>
                      </span><!-- TODO: remove dropdown conditionals along dropdown deprecation -->
                      <!-- TODO: remove dropdown conditionals along dropdown deprecation -->

                      <div data-view-component="true"
                        class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium">
                        Select
                      </div>
                    </div>
                    <div class="tw-flex tw-flex-row tw-items-center tw-gap-1">
                      <!-- TODO: remove dropdown conditionals along dropdown deprecation -->
                      <span data-view-component="true"
                        class="!tw-px-2 tw-inline-flex tw-items-center tw-px-1.5 tw-py-0.5 tw-bg-gray-400 dark:tw-bg-moon-500 tw-rounded-md">
                        <div data-view-component="true"
                          class="tw-text-xs tw-leading-4 tw-text-white dark:tw-text-moon-50 tw-font-medium">

                          ESC

                        </div>
                      </span><!-- TODO: remove dropdown conditionals along dropdown deprecation -->
                      <!-- TODO: remove dropdown conditionals along dropdown deprecation -->

                      <div data-view-component="true"
                        class="tw-text-xs tw-leading-4 tw-text-gray-500 dark:tw-text-moon-200 tw-font-medium">
                        Close
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="search-backdrop"
                class="tw-hidden 2lg:tw-hidden tw-h-screen tw-w-screen tw-fixed tw-left-0 tw-top-[3rem] tw-bg-white dark:tw-bg-moon-900"
                data-search-v2-target="searchBackdrop"></div>
            </div>

          </div>
        </div>
        <div data-view-component="true"
          class="tw-flex tw-gap-x-2 tw-items-center tw-text-gray-500 dark:tw-text-moon-200 tw-text-sm">


          <div class="tw-w-full tw-border-t tw-border-gray-200 dark:tw-border-moon-700"></div>
        </div>
      </div>


    </header>
  </div>

</template>

<style scoped>
:root {
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4
}

#nav {
  background: linear-gradient(to right, #00031d, #171248, #040422);
}

.tw-dark {
  margin: -8px;
  --tw-bg-opacity: 1;
  /* background-color: rgb(13 18 23/var(--tw-bg-opacity));
   */
  background: linear-gradient(to right, #101029, #33266d, #101028);
  font-family: Inter-Dark, Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}

body {
  font-size: 13px;
  line-height: 1.425;
  display: flex;
  flex-direction: column;
  margin: 0;
  font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}

hr {
  height: 0;
  color: inherit
}

abbr[title] {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted
}

b,
strong {
  font-weight: bolder
}

code,
kbd,
pre,
samp {
  font-family: ui-monospace, SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  font-size: 1em
}

small {
  font-size: 80%
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline
}

sub {
  bottom: -.25em
}

sup {
  top: -.5em
}

table {
  text-indent: 0;
  border-color: inherit
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0
}

button,
select {
  text-transform: none
}

[type=button],
[type=reset],
[type=submit],
button {
  -webkit-appearance: button
}

::-moz-focus-inner {
  border-style: none;
  padding: 0
}

:-moz-focusring {
  outline: 1px dotted ButtonText
}

:-moz-ui-invalid {
  box-shadow: none
}

legend {
  padding: 0
}

progress {
  vertical-align: baseline
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto
}

[type=search] {
  -webkit-appearance: textfield;
  outline-offset: -2px
}

::-webkit-search-decoration {
  -webkit-appearance: none
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit
}

summary {
  display: list-item
}

blockquote,
dd,
dl,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
pre {
  margin: 0
}

button {
  background-image: none
}

fieldset,
ol,
ul {
  margin: 0;
  padding: 0
}

*,
:after,
:before {
  box-sizing: border-box;
  border: 0 solid #e5e7eb
}

hr {
  border-top-width: 1px
}

img {
  border-style: solid
}

textarea {
  resize: vertical
}

input::-moz-placeholder,
textarea::-moz-placeholder {
  opacity: 1;
  color: #9ca3af
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  opacity: 1;
  color: #9ca3af
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  color: #9ca3af
}

[role=button],
button {
  cursor: pointer
}

table {
  border-collapse: collapse
}

a {
  text-decoration: inherit
}

button,
input,
optgroup,
select,
textarea {
  line-height: inherit
}

input,
textarea {
  outline: 0
}

code,
kbd,
pre,
samp {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace
}

audio,
canvas,
embed,
iframe,
object,
svg,
video {
  display: block;
  vertical-align: middle
}

img,
video {
  max-width: 100%;
  height: auto
}

input[disabled] {
  pointer-events: none
}

.gecko-override-links-primary a {
  cursor: pointer;
  --tw-text-opacity: 1;
  color: rgb(75 204 0/var(--tw-text-opacity))
}

.gecko-override-links-primary a:hover {
  --tw-text-opacity: 1;
  color: rgb(53 175 0/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-override-links-primary a) {
  --tw-text-opacity: 1;
  color: rgb(128 224 56/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-override-links-primary a:hover) {
  --tw-text-opacity: 1;
  color: rgb(53 175 0/var(--tw-text-opacity))
}

.gecko-override-links.undecorated a {
  cursor: pointer;
  font-weight: 600;
  --tw-text-opacity: 1;
  color: rgb(51 65 85/var(--tw-text-opacity));
  -webkit-text-decoration-line: none;
  text-decoration-line: none
}

.gecko-override-links.undecorated a:hover {
  --tw-text-opacity: 1;
  color: rgb(75 204 0/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-override-links.undecorated a) {
  --tw-text-opacity: 1;
  color: rgb(223 229 236/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-override-links.undecorated a:hover) {
  --tw-text-opacity: 1;
  color: rgb(128 224 56/var(--tw-text-opacity))
}

.gecko-override-links.regular a {
  cursor: pointer;
  font-weight: 400;
  --tw-text-opacity: 1;
  color: rgb(100 116 139/var(--tw-text-opacity))
}

.gecko-override-links.regular a:hover {
  --tw-text-opacity: 1;
  color: rgb(75 204 0/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-override-links.regular a) {
  --tw-text-opacity: 1;
  color: rgb(158 176 199/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-override-links.regular a:hover) {
  --tw-text-opacity: 1;
  color: rgb(128 224 56/var(--tw-text-opacity))
}

.gecko-override-links a {
  cursor: pointer;
  font-weight: 600;
  color: rgb(51 65 85/var(--tw-text-opacity))
}

.gecko-override-links a,
.gecko-override-links a:hover {
  --tw-text-opacity: 1;
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline
}

.gecko-override-links a:hover {
  color: rgb(75 204 0/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-override-links a) {
  --tw-text-opacity: 1;
  color: rgb(248 250 252/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-override-links a:hover) {
  --tw-text-opacity: 1;
  color: rgb(128 224 56/var(--tw-text-opacity))
}

*,
:after,
:before {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-scroll-snap-strictness: proximity;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246/0.5);
  --tw-ring-offset-shadow: 0 0 transparent;
  --tw-ring-shadow: 0 0 transparent;
  --tw-shadow: 0 0 transparent;
  --tw-shadow-colored: 0 0 transparent;

}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-scroll-snap-strictness: proximity;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246/0.5);
  --tw-ring-offset-shadow: 0 0 transparent;
  --tw-ring-shadow: 0 0 transparent;
  --tw-shadow: 0 0 transparent;
  --tw-shadow-colored: 0 0 transparent;

}

.tw-form-checkbox,
.tw-form-radio {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0;
  print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #2563eb;
  background-color: #fff;
  border-color: #64748b;
  border-width: 1px;
  --tw-shadow: 0 0 transparent
}

.tw-form-checkbox {
  border-radius: 0
}

.tw-form-radio {
  border-radius: 100%
}

.tw-form-checkbox:focus,
.tw-form-radio:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,
      /*!*/
      /*!*/
    );
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)
}

.tw-form-checkbox:checked,
.tw-form-radio:checked {
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: 50%;
  background-repeat: no-repeat
}

.tw-form-checkbox:checked {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3E%3C/svg%3E")
}

.tw-form-radio:checked {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E")
}

.tw-form-checkbox:checked:focus,
.tw-form-checkbox:checked:hover,
.tw-form-radio:checked:focus,
.tw-form-radio:checked:hover {
  border-color: transparent;
  background-color: currentColor
}

.tw-form-checkbox:indeterminate {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3E%3C/svg%3E");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: 50%;
  background-repeat: no-repeat
}

.tw-form-checkbox:indeterminate:focus,
.tw-form-checkbox:indeterminate:hover {
  border-color: transparent;
  background-color: currentColor
}

.gecko-skeleton,
.gecko-skeleton-md {
  margin-top: .25rem;
  margin-bottom: .25rem;
  height: 1rem;
  width: 10rem;
  animation: tw-pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;
  border-radius: .25rem;
  --tw-bg-opacity: 1;
  background-color: rgb(239 242 245/var(--tw-bg-opacity))
}

:is(.tw-dark .gecko-skeleton),
:is(.tw-dark .gecko-skeleton-md) {
  --tw-bg-opacity: 1;
  background-color: rgb(33 45 59/var(--tw-bg-opacity))
}

.gecko-skeleton-lg {
  margin-top: .25rem;
  margin-bottom: .25rem;
  height: 1rem;
  width: 10rem;
  animation: tw-pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;
  border-radius: .25rem;
  --tw-bg-opacity: 1;
  background-color: rgb(239 242 245/var(--tw-bg-opacity))
}

:is(.tw-dark .gecko-skeleton-lg) {
  --tw-bg-opacity: 1;
  background-color: rgb(33 45 59/var(--tw-bg-opacity))
}

.gecko-skeleton-lg {
  height: 2rem;
  width: 20rem;
  border-radius: .375rem
}

.gecko-skeleton-xl {
  margin-top: .25rem;
  margin-bottom: .25rem;
  height: 1rem;
  width: 10rem;
  animation: tw-pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;
  border-radius: .25rem;
  --tw-bg-opacity: 1;
  background-color: rgb(239 242 245/var(--tw-bg-opacity))
}

:is(.tw-dark .gecko-skeleton-xl) {
  --tw-bg-opacity: 1;
  background-color: rgb(33 45 59/var(--tw-bg-opacity))
}

.gecko-skeleton-xl {
  height: 2.75rem;
  width: 100%;
  border-radius: .5rem
}

.tw-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0
}

.tw-pointer-events-none {
  pointer-events: none
}

.tw-pointer-events-auto {
  pointer-events: auto
}

.tw-invisible {
  visibility: hidden
}

.tw-static {
  position: static
}

.\!tw-fixed {
  position: fixed !important
}

.tw-fixed {
  position: fixed
}

.tw-absolute {
  position: absolute
}

.tw-relative {
  position: relative
}

.tw-sticky {
  position: sticky
}

.tw-inset-0 {
  inset: 0
}

.tw--inset-x-2 {
  left: -.5rem;
  right: -.5rem
}

.tw--inset-x-2\.5 {
  left: -.625rem;
  right: -.625rem
}

.tw-inset-x-0 {
  left: 0;
  right: 0
}

.tw-inset-y-0 {
  top: 0;
  bottom: 0
}

.-tw-top-1 {
  top: -.25rem
}

.-tw-top-4 {
  top: -1rem
}

.tw--bottom-2 {
  bottom: -.5rem
}

.tw--bottom-2\.5 {
  bottom: -.625rem
}

.tw--left-24 {
  left: -6rem
}

.tw--left-3 {
  left: -.75rem
}

.tw--left-52 {
  left: -13rem
}

.tw--right-3 {
  right: -.75rem
}

.tw--top-px {
  top: -1px
}

.tw-bottom-0 {
  bottom: 0
}

.tw-bottom-6 {
  bottom: 1.5rem
}

.tw-bottom-\[-0\.5rem\] {
  bottom: -.5rem
}

.tw-left-0 {
  left: 0
}

.tw-left-0\.5 {
  left: .125rem
}

.tw-left-1\/2 {
  left: 50%
}

.tw-left-2 {
  left: .5rem
}

.tw-left-\[-2px\] {
  left: -2px
}

.tw-left-\[-3\.6rem\] {
  left: -3.6rem
}

.tw-left-\[16px\] {
  left: 16px
}

.tw-left-\[24px\] {
  left: 24px
}

.tw-left-\[27px\] {
  left: 27px
}

.tw-left-\[32px\] {
  left: 32px
}

.tw-left-\[34px\] {
  left: 34px
}

.tw-left-\[35px\] {
  left: 35px
}

.tw-left-\[38px\] {
  left: 38px
}

.tw-left-\[51px\] {
  left: 51px
}

.tw-left-\[56px\] {
  left: 56px
}

.tw-left-\[60px\] {
  left: 60px
}

.tw-left-\[62px\] {
  left: 62px
}

.tw-left-\[74px\] {
  left: 74px
}

.tw-right-0 {
  right: 0
}

.tw-right-1 {
  right: .25rem
}

.tw-right-2 {
  right: .5rem
}

.tw-right-3 {
  right: .75rem
}

.tw-right-\[-1\.5rem\] {
  right: -1.5rem
}

.tw-top-0 {
  top: 0
}

.tw-top-0\.5 {
  top: .125rem
}

.tw-top-4 {
  top: 1rem
}

.tw-top-48 {
  top: 12rem
}

.tw-top-\[-1\.5rem\] {
  top: -1.5rem
}

.tw-top-\[-1px\] {
  top: -1px
}

.tw-top-\[3rem\] {
  top: 3rem
}

.tw-top-\[80px\] {
  top: 80px
}

.tw-isolate {
  isolation: isolate
}

.tw-z-0 {
  z-index: 0
}

.tw-z-10 {
  z-index: 10
}

.tw-z-20 {
  z-index: 20
}

.tw-z-30 {
  z-index: 30
}

.tw-z-40 {
  z-index: 40
}

.tw-z-50 {
  z-index: 50
}

.tw-z-\[1120\] {
  z-index: 1120
}

.tw-z-\[1190\] {
  z-index: 1190
}

.tw-z-\[1200\] {
  z-index: 1200
}

.tw-z-\[1\] {
  z-index: 1
}

.tw-z-\[20000\] {
  z-index: 20000
}

.tw-z-\[2000\] {
  z-index: 2000
}

.tw-z-\[2\] {
  z-index: 2
}

.tw-z-\[5\] {
  z-index: 5
}

.-tw-order-1 {
  order: -1
}

.tw-order-1 {
  order: 1
}

.tw-order-2 {
  order: 2
}

.tw-order-3 {
  order: 3
}

.tw-order-9 {
  order: 9
}

.tw-order-first {
  order: -9999
}

.tw-col-span-1 {
  grid-column: span 1/span 1
}

.tw-col-span-12 {
  grid-column: span 12/span 12
}

.tw-col-span-2 {
  grid-column: span 2/span 2
}

.tw-col-span-3 {
  grid-column: span 3/span 3
}

.tw-col-span-4 {
  grid-column: span 4/span 4
}

.tw-col-span-7 {
  grid-column: span 7/span 7
}

.tw-col-span-8 {
  grid-column: span 8/span 8
}

.tw-col-start-1 {
  grid-column-start: 1
}

.tw-col-end-13 {
  grid-column-end: 13
}

.tw-row-span-1 {
  grid-row: span 1/span 1
}

.tw-row-span-2 {
  grid-row: span 2/span 2
}

.tw-row-span-3 {
  grid-row: span 3/span 3
}

.\!tw-float-left {
  float: left !important
}

.tw-float-left {
  float: left
}

.\!tw-m-0 {
  margin: 0 !important
}

.tw--m-1 {
  margin: -.25rem
}

.tw-m-0 {
  margin: 0
}

.tw-m-0\.5 {
  margin: .125rem
}

.tw-m-2 {
  margin: .5rem
}

.tw-m-5 {
  margin: 1.25rem
}

.tw-m-auto {
  margin: auto
}

.\!tw-my-4 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important
}

.-tw-mx-1 {
  margin-left: -.25rem;
  margin-right: -.25rem
}

.-tw-mx-\[1px\] {
  margin-left: -1px;
  margin-right: -1px
}

.tw--mx-8 {
  margin-left: -2rem;
  margin-right: -2rem
}

.tw-mx-1 {
  margin-left: .25rem;
  margin-right: .25rem
}

.tw-mx-1\.5 {
  margin-left: .375rem;
  margin-right: .375rem
}

.tw-mx-2 {
  margin-left: .5rem;
  margin-right: .5rem
}

.tw-mx-3 {
  margin-left: .75rem;
  margin-right: .75rem
}

.tw-mx-4 {
  margin-left: 1rem;
  margin-right: 1rem
}

.tw-mx-auto {
  margin-left: auto;
  margin-right: auto
}

.tw-my-0 {
  margin-top: 0;
  margin-bottom: 0
}

.tw-my-0\.5 {
  margin-top: .125rem;
  margin-bottom: .125rem
}

.tw-my-1 {
  margin-top: .25rem;
  margin-bottom: .25rem
}

.tw-my-1\.5 {
  margin-top: .375rem;
  margin-bottom: .375rem
}

.tw-my-10 {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem
}

.tw-my-12 {
  margin-top: 3rem;
  margin-bottom: 3rem
}

.tw-my-16 {
  margin-top: 4rem;
  margin-bottom: 4rem
}

.tw-my-2 {
  margin-top: .5rem;
  margin-bottom: .5rem
}

.tw-my-2\.5 {
  margin-top: .625rem;
  margin-bottom: .625rem
}

.tw-my-3 {
  margin-top: .75rem;
  margin-bottom: .75rem
}

.tw-my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem
}

.tw-my-5 {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem
}

.tw-my-6 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem
}

.tw-my-8 {
  margin-top: 2rem;
  margin-bottom: 2rem
}

.tw-my-auto {
  margin-top: auto;
  margin-bottom: auto
}

.\!-tw-mb-1 {
  margin-bottom: -.25rem !important
}

.\!-tw-mr-2 {
  margin-right: -.5rem !important
}

.\!tw-mb-0 {
  margin-bottom: 0 !important
}

.\!tw-mb-1 {
  margin-bottom: .25rem !important
}

.\!tw-mb-8 {
  margin-bottom: 2rem !important
}

.\!tw-mr-1 {
  margin-right: .25rem !important
}

.\!tw-mr-2 {
  margin-right: .5rem !important
}

.\!tw-mt-0 {
  margin-top: 0 !important
}

.\!tw-mt-12 {
  margin-top: 3rem !important
}

.\!tw-mt-2 {
  margin-top: .5rem !important
}

.\!tw-mt-5 {
  margin-top: 1.25rem !important
}

.-tw-ml-2 {
  margin-left: -.5rem
}

.-tw-ml-2\.5 {
  margin-left: -.625rem
}

.-tw-mt-5 {
  margin-top: -1.25rem
}

.tw--mb-4 {
  margin-bottom: -1rem
}

.tw--mb-px {
  margin-bottom: -1px
}

.tw--ml-0 {
  margin-left: 0
}

.tw--ml-0\.5 {
  margin-left: -.125rem
}

.tw--ml-1 {
  margin-left: -.25rem
}

.tw--ml-4 {
  margin-left: -1rem
}

.tw--ml-5 {
  margin-left: -1.25rem
}

.tw--ml-px {
  margin-left: -1px
}

.tw--mr-0 {
  margin-right: 0
}

.tw--mr-0\.5 {
  margin-right: -.125rem
}

.tw--mr-5 {
  margin-right: -1.25rem
}

.tw--mt-4 {
  margin-top: -1rem
}

.tw--mt-5 {
  margin-top: -1.25rem
}

.tw-mb-0 {
  margin-bottom: 0
}

.tw-mb-0\.5 {
  margin-bottom: .125rem
}

.tw-mb-1 {
  margin-bottom: .25rem
}

.tw-mb-10 {
  margin-bottom: 2.5rem
}

.tw-mb-12 {
  margin-bottom: 3rem
}

.tw-mb-14 {
  margin-bottom: 3.5rem
}

.tw-mb-16 {
  margin-bottom: 4rem
}

.tw-mb-2 {
  margin-bottom: .5rem
}

.tw-mb-2\.5 {
  margin-bottom: .625rem
}

.tw-mb-24 {
  margin-bottom: 6rem
}

.tw-mb-3 {
  margin-bottom: .75rem
}

.tw-mb-32 {
  margin-bottom: 8rem
}

.tw-mb-4 {
  margin-bottom: 1rem
}

.tw-mb-5 {
  margin-bottom: 1.25rem
}

.tw-mb-6 {
  margin-bottom: 1.5rem
}

.tw-mb-64 {
  margin-bottom: 16rem
}

.tw-mb-8 {
  margin-bottom: 2rem
}

.tw-mb-9 {
  margin-bottom: 2.25rem
}

.tw-mb-\[5px\] {
  margin-bottom: 5px
}

.tw-mb-\[800px\] {
  margin-bottom: 800px
}

.tw-mb-auto {
  margin-bottom: auto
}

.tw-ml-0 {
  margin-left: 0
}

.tw-ml-0\.5 {
  margin-left: .125rem
}

.tw-ml-1 {
  margin-left: .25rem
}

.tw-ml-10 {
  margin-left: 2.5rem
}

.tw-ml-12 {
  margin-left: 3rem
}

.tw-ml-2 {
  margin-left: .5rem
}

.tw-ml-2\.5 {
  margin-left: .625rem
}

.tw-ml-3 {
  margin-left: .75rem
}

.tw-ml-4 {
  margin-left: 1rem
}

.tw-ml-6 {
  margin-left: 1.5rem
}

.tw-ml-7 {
  margin-left: 1.75rem
}

.tw-ml-72 {
  margin-left: 18rem
}

.tw-ml-8 {
  margin-left: 2rem
}

.tw-ml-9 {
  margin-left: 2.25rem
}

.tw-ml-\[11px\] {
  margin-left: 11px
}

.tw-ml-\[1px\] {
  margin-left: 1px
}

.tw-ml-\[2px\] {
  margin-left: 2px
}

.tw-ml-auto {
  margin-left: auto
}

.tw-mr-0 {
  margin-right: 0
}

.tw-mr-0\.5 {
  margin-right: .125rem
}

.tw-mr-1 {
  margin-right: .25rem
}

.tw-mr-2 {
  margin-right: .5rem
}

.tw-mr-3 {
  margin-right: .75rem
}

.tw-mr-4 {
  margin-right: 1rem
}

.tw-mr-5 {
  margin-right: 1.25rem
}

.tw-mr-6 {
  margin-right: 1.5rem
}

.tw-mr-8 {
  margin-right: 2rem
}

.tw-ms-0 {
  margin-inline-start: 0
}

.tw-mt-0 {
  margin-top: 0
}

.tw-mt-0\.5 {
  margin-top: .125rem
}

.tw-mt-1 {
  margin-top: .25rem
}

.tw-mt-1\.5 {
  margin-top: .375rem
}

.tw-mt-10 {
  margin-top: 2.5rem
}

.tw-mt-12 {
  margin-top: 3rem
}

.tw-mt-16 {
  margin-top: 4rem
}

.tw-mt-2 {
  margin-top: .5rem
}

.tw-mt-2\.5 {
  margin-top: .625rem
}

.tw-mt-20 {
  margin-top: 5rem
}

.tw-mt-24 {
  margin-top: 6rem
}

.tw-mt-3 {
  margin-top: .75rem
}

.tw-mt-3\.5 {
  margin-top: .875rem
}

.tw-mt-32 {
  margin-top: 8rem
}

.tw-mt-4 {
  margin-top: 1rem
}

.tw-mt-44 {
  margin-top: 11rem
}

.tw-mt-5 {
  margin-top: 1.25rem
}

.tw-mt-6 {
  margin-top: 1.5rem
}

.tw-mt-64 {
  margin-top: 16rem
}

.tw-mt-8 {
  margin-top: 2rem
}

.tw-mt-9 {
  margin-top: 2.25rem
}

.tw-mt-\[1px\] {
  margin-top: 1px
}

.tw-mt-\[3px\] {
  margin-top: 3px
}

.tw-box-content {
  box-sizing: content-box
}

.\!tw-block {
  display: block !important
}

.tw-block {
  display: block
}

.\!tw-inline-block {
  display: inline-block !important
}

.tw-inline-block {
  display: inline-block
}

.tw-inline {
  display: inline
}

.\!tw-flex {
  display: flex !important
}

.tw-flex {
  display: flex
}

.\!tw-inline-flex {
  display: inline-flex !important
}

.tw-inline-flex {
  display: inline-flex
}

.\!tw-grid {
  display: grid !important
}

.tw-grid {
  display: grid
}

.\!tw-hidden {
  display: none !important
}

.tw-hidden {
  display: none
}

.tw-aspect-\[20\/5\] {
  aspect-ratio: 20/5
}

.tw-aspect-\[21\/11\] {
  aspect-ratio: 21/11
}

.tw-aspect-square {
  aspect-ratio: 1/1
}

.tw-aspect-video {
  aspect-ratio: 16/9
}

.tw-size-16 {
  width: 4rem;
  height: 4rem
}

.tw-size-\[70px\] {
  width: 70px;
  height: 70px
}

.tw-size-full {
  width: 100%;
  height: 100%
}

.\!tw-h-10 {
  height: 2.5rem !important
}

.\!tw-h-12 {
  height: 3rem !important
}

.\!tw-h-14 {
  height: 3.5rem !important
}

.\!tw-h-6 {
  height: 1.5rem !important
}

.\!tw-h-8 {
  height: 2rem !important
}

.\!tw-h-\[400px\] {
  height: 400px !important
}

.\!tw-h-\[450px\] {
  height: 450px !important
}

.\!tw-h-\[500px\] {
  height: 500px !important
}

.\!tw-h-\[538px\] {
  height: 538px !important
}

.\!tw-h-\[600px\] {
  height: 600px !important
}

.\!tw-h-fit {
  height: -moz-fit-content !important;
  height: fit-content !important
}

.\!tw-h-full {
  height: 100% !important
}

.tw-h-0 {
  height: 0
}

.tw-h-1 {
  height: .25rem
}

.tw-h-1\.5 {
  height: .375rem
}

.tw-h-1\/4 {
  height: 25%
}

.tw-h-10 {
  height: 2.5rem
}

.tw-h-12 {
  height: 3rem
}

.tw-h-128 {
  height: 32rem
}

.tw-h-14 {
  height: 3.5rem
}

.tw-h-16 {
  height: 4rem
}

.tw-h-2 {
  height: .5rem
}

.tw-h-20 {
  height: 5rem
}

.tw-h-24 {
  height: 6rem
}

.tw-h-28 {
  height: 7rem
}

.tw-h-3 {
  height: .75rem
}

.tw-h-3\/4 {
  height: 75%
}

.tw-h-32 {
  height: 8rem
}

.tw-h-4 {
  height: 1rem
}

.tw-h-40 {
  height: 10rem
}

.tw-h-48 {
  height: 12rem
}

.tw-h-5 {
  height: 1.25rem
}

.tw-h-50px {
  height: 3.125rem
}

.tw-h-56 {
  height: 14rem
}

.tw-h-6 {
  height: 1.5rem
}

.tw-h-64 {
  height: 16rem
}

.tw-h-7 {
  height: 1.75rem
}

.tw-h-72 {
  height: 18rem
}

.tw-h-8 {
  height: 2rem
}

.tw-h-9 {
  height: 2.25rem
}

.tw-h-96 {
  height: 24rem
}

.tw-h-\[100dvh\] {
  height: 100dvh
}

.tw-h-\[116px\] {
  height: 116px
}

.tw-h-\[14px\] {
  height: 14px
}

.tw-h-\[16\.6\%\] {
  height: 16.6%
}

.tw-h-\[168px\] {
  height: 168px
}

.tw-h-\[18px\] {
  height: 18px
}

.tw-h-\[200px\] {
  height: 200px
}

.tw-h-\[256px\] {
  height: 256px
}

.tw-h-\[25px\] {
  height: 25px
}

.tw-h-\[30px\] {
  height: 30px
}

.tw-h-\[32px\] {
  height: 32px
}

.tw-h-\[400px\] {
  height: 400px
}

.tw-h-\[40px\] {
  height: 40px
}

.tw-h-\[41px\] {
  height: 41px
}

.tw-h-\[42px\] {
  height: 42px
}

.tw-h-\[50px\] {
  height: 50px
}

.tw-h-\[54px\] {
  height: 54px
}

.tw-h-\[55px\] {
  height: 55px
}

.tw-h-\[56px\] {
  height: 56px
}

.tw-h-\[600px\] {
  height: 600px
}

.tw-h-\[617px\] {
  height: 617px
}

.tw-h-\[720px\] {
  height: 720px
}

.tw-h-\[76px\] {
  height: 76px
}

.tw-h-\[80vh\] {
  height: 80vh
}

.tw-h-\[93svh\] {
  height: 93svh
}

.tw-h-auto {
  height: auto
}

.tw-h-fit {
  height: -moz-fit-content;
  height: fit-content
}

.tw-h-full {
  height: 100%
}

.tw-h-max {
  height: -moz-max-content;
  height: max-content
}

.tw-h-min {
  height: -moz-min-content;
  height: min-content
}

.tw-h-px {
  height: 1px
}

.tw-h-screen {
  height: 100vh
}

.tw-h-svh {
  height: 100svh
}

.tw-max-h-10 {
  max-height: 2.5rem
}

.tw-max-h-48 {
  max-height: 12rem
}

.tw-max-h-5 {
  max-height: 1.25rem
}

.tw-max-h-52 {
  max-height: 13rem
}

.tw-max-h-6 {
  max-height: 1.5rem
}

.tw-max-h-7 {
  max-height: 1.75rem
}

.tw-max-h-70vh {
  max-height: 70vh
}

.tw-max-h-8 {
  max-height: 2rem
}

.tw-max-h-80 {
  max-height: 20rem
}

.tw-max-h-96 {
  max-height: 24rem
}

.tw-max-h-\[20rem\] {
  max-height: 20rem
}

.tw-max-h-\[24px\] {
  max-height: 24px
}

.tw-max-h-\[65px\] {
  max-height: 65px
}

.tw-max-h-\[80px\] {
  max-height: 80px
}

.tw-max-h-\[90vh\] {
  max-height: 90vh
}

.tw-max-h-\[inherit\] {
  max-height: inherit
}

.\!tw-min-h-32 {
  min-height: 8rem !important
}

.\!tw-min-h-svh {
  min-height: 100svh !important
}

.tw-min-h-10 {
  min-height: 2.5rem
}

.tw-min-h-7 {
  min-height: 1.75rem
}

.tw-min-h-\[1px\] {
  min-height: 1px
}

.tw-min-h-\[250px\] {
  min-height: 250px
}

.tw-min-h-\[408px\] {
  min-height: 408px
}

.tw-min-h-\[44px\] {
  min-height: 44px
}

.tw-min-h-\[52px\] {
  min-height: 52px
}

.tw-min-h-\[550px\] {
  min-height: 550px
}

.tw-min-h-\[60px\] {
  min-height: 60px
}

.tw-min-h-\[70vh\] {
  min-height: 70vh
}

.tw-min-h-screen {
  min-height: 100vh
}

.\!tw-w-44 {
  width: 11rem !important
}

.\!tw-w-48 {
  width: 12rem !important
}

.\!tw-w-80 {
  width: 20rem !important
}

.\!tw-w-96 {
  width: 24rem !important
}

.\!tw-w-fit {
  width: -moz-fit-content !important;
  width: fit-content !important
}

.\!tw-w-full {
  width: 100% !important
}

.tw-w-0 {
  width: 0
}

.tw-w-1\/12 {
  width: 8.333333%
}

.tw-w-1\/2 {
  width: 50%
}

.tw-w-1\/3 {
  width: 33.333333%
}

.tw-w-1\/5 {
  width: 20%
}

.tw-w-1\/6 {
  width: 16.666667%
}

.tw-w-10 {
  width: 2.5rem
}

.tw-w-11 {
  width: 2.75rem
}

.tw-w-11\/12 {
  width: 91.666667%
}

.tw-w-12 {
  width: 3rem
}

.tw-w-16 {
  width: 4rem
}

.tw-w-2 {
  width: .5rem
}

.tw-w-2\/12 {
  width: 16.666667%
}

.tw-w-20 {
  width: 5rem
}

.tw-w-24 {
  width: 6rem
}

.tw-w-3 {
  width: .75rem
}

.tw-w-3\/4 {
  width: 75%
}

.tw-w-3\/5 {
  width: 60%
}

.tw-w-32 {
  width: 8rem
}

.tw-w-36 {
  width: 9rem
}

.tw-w-4 {
  width: 1rem
}

.tw-w-4\/5 {
  width: 80%
}

.tw-w-40 {
  width: 10rem
}

.tw-w-44 {
  width: 11rem
}

.tw-w-48 {
  width: 12rem
}

.tw-w-5 {
  width: 1.25rem
}

.tw-w-5\/12 {
  width: 41.666667%
}

.tw-w-56 {
  width: 14rem
}

.tw-w-6 {
  width: 1.5rem
}

.tw-w-60 {
  width: 15rem
}

.tw-w-64 {
  width: 16rem
}

.tw-w-7 {
  width: 1.75rem
}

.tw-w-7\/12 {
  width: 58.333333%
}

.tw-w-72 {
  width: 18rem
}

.tw-w-8 {
  width: 2rem
}

.tw-w-80 {
  width: 20rem
}

.tw-w-96 {
  width: 24rem
}

.tw-w-\[105px\] {
  width: 105px
}

.tw-w-\[120px\] {
  width: 120px
}

.tw-w-\[14\%\] {
  width: 14%
}

.tw-w-\[14px\] {
  width: 14px
}

.tw-w-\[15\.5\%\] {
  width: 15.5%
}

.tw-w-\[150px\] {
  width: 150px
}

.tw-w-\[18px\] {
  width: 18px
}

.tw-w-\[22\.5\%\] {
  width: 22.5%
}

.tw-w-\[25px\] {
  width: 25px
}

.tw-w-\[29rem\] {
  width: 29rem
}

.tw-w-\[30px\] {
  width: 30px
}

.tw-w-\[320px\] {
  width: 320px
}

.tw-w-\[328px\] {
  width: 328px
}

.tw-w-\[32rem\] {
  width: 32rem
}

.tw-w-\[340px\] {
  width: 340px
}

.tw-w-\[38px\] {
  width: 38px
}

.tw-w-\[400px\] {
  width: 400px
}

.tw-w-\[41px\] {
  width: 41px
}

.tw-w-\[42\%\] {
  width: 42%
}

.tw-w-\[500px\] {
  width: 500px
}

.tw-w-\[50px\] {
  width: 50px
}

.tw-w-\[600px\] {
  width: 600px
}

.tw-w-auto {
  width: auto
}

.tw-w-fit {
  width: -moz-fit-content;
  width: fit-content
}

.tw-w-full {
  width: 100%
}

.tw-w-max {
  width: -moz-max-content;
  width: max-content
}

.tw-w-screen {
  width: 100vw
}

.tw-min-w-0 {
  min-width: 0
}

.tw-min-w-10 {
  min-width: 2.5rem
}

.tw-min-w-3\/10 {
  min-width: 30%
}

.tw-min-w-\[100px\] {
  min-width: 100px
}

.tw-min-w-\[102px\] {
  min-width: 102px
}

.tw-min-w-\[108px\] {
  min-width: 108px
}

.tw-min-w-\[11\.25rem\] {
  min-width: 11.25rem
}

.tw-min-w-\[110px\] {
  min-width: 110px
}

.tw-min-w-\[115px\] {
  min-width: 115px
}

.tw-min-w-\[1200px\] {
  min-width: 1200px
}

.tw-min-w-\[120px\] {
  min-width: 120px
}

.tw-min-w-\[122px\] {
  min-width: 122px
}

.tw-min-w-\[130px\] {
  min-width: 130px
}

.tw-min-w-\[136px\] {
  min-width: 136px
}

.tw-min-w-\[140px\] {
  min-width: 140px
}

.tw-min-w-\[150px\] {
  min-width: 150px
}

.tw-min-w-\[155px\] {
  min-width: 155px
}

.tw-min-w-\[160px\] {
  min-width: 160px
}

.tw-min-w-\[165px\] {
  min-width: 165px
}

.tw-min-w-\[16rem\] {
  min-width: 16rem
}

.tw-min-w-\[170px\] {
  min-width: 170px
}

.tw-min-w-\[175px\] {
  min-width: 175px
}

.tw-min-w-\[180px\] {
  min-width: 180px
}

.tw-min-w-\[18rem\] {
  min-width: 18rem
}

.tw-min-w-\[192px\] {
  min-width: 192px
}

.tw-min-w-\[200px\] {
  min-width: 200px
}

.tw-min-w-\[220px\] {
  min-width: 220px
}

.tw-min-w-\[240px\] {
  min-width: 240px
}

.tw-min-w-\[24px\] {
  min-width: 24px
}

.tw-min-w-\[28px\] {
  min-width: 28px
}

.tw-min-w-\[300px\] {
  min-width: 300px
}

.tw-min-w-\[30px\] {
  min-width: 30px
}

.tw-min-w-\[34px\] {
  min-width: 34px
}

.tw-min-w-\[35px\] {
  min-width: 35px
}

.tw-min-w-\[38px\] {
  min-width: 38px
}

.tw-min-w-\[40px\] {
  min-width: 40px
}

.tw-min-w-\[44px\] {
  min-width: 44px
}

.tw-min-w-\[5rem\] {
  min-width: 5rem
}

.tw-min-w-\[6\.25rem\] {
  min-width: 6.25rem
}

.tw-min-w-\[6\.875rem\] {
  min-width: 6.875rem
}

.tw-min-w-\[60px\] {
  min-width: 60px
}

.tw-min-w-\[65px\] {
  min-width: 65px
}

.tw-min-w-\[70\%\] {
  min-width: 70%
}

.tw-min-w-\[70px\] {
  min-width: 70px
}

.tw-min-w-\[80px\] {
  min-width: 80px
}

.tw-min-w-\[88px\] {
  min-width: 88px
}

.tw-min-w-fit {
  min-width: -moz-fit-content;
  min-width: fit-content
}

.tw-min-w-full {
  min-width: 100%
}

.\!tw-max-w-min {
  max-width: -moz-min-content !important;
  max-width: min-content !important
}

.\!tw-max-w-none {
  max-width: none !important
}

.tw-max-w-14 {
  max-width: 3.5rem
}

.tw-max-w-2xl {
  max-width: 42rem
}

.tw-max-w-3xl {
  max-width: 48rem
}

.tw-max-w-4 {
  max-width: 1rem
}

.tw-max-w-48 {
  max-width: 12rem
}

.tw-max-w-4xl {
  max-width: 56rem
}

.tw-max-w-5xl {
  max-width: 64rem
}

.tw-max-w-6xl {
  max-width: 72rem
}

.tw-max-w-7xl {
  max-width: 80rem
}

.tw-max-w-\[100vw\] {
  max-width: 100vw
}

.tw-max-w-\[104px\] {
  max-width: 104px
}

.tw-max-w-\[105px\] {
  max-width: 105px
}

.tw-max-w-\[10rem\] {
  max-width: 10rem
}

.tw-max-w-\[11\.25rem\] {
  max-width: 11.25rem
}

.tw-max-w-\[1108px\] {
  max-width: 1108px
}

.tw-max-w-\[120px\] {
  max-width: 120px
}

.tw-max-w-\[16rem\] {
  max-width: 16rem
}

.tw-max-w-\[188px\] {
  max-width: 188px
}

.tw-max-w-\[200px\] {
  max-width: 200px
}

.tw-max-w-\[240px\] {
  max-width: 240px
}

.tw-max-w-\[250px\] {
  max-width: 250px
}

.tw-max-w-\[328px\] {
  max-width: 328px
}

.tw-max-w-\[375px\] {
  max-width: 375px
}

.tw-max-w-\[400px\] {
  max-width: 400px
}

.tw-max-w-\[5\.625rem\] {
  max-width: 5.625rem
}

.tw-max-w-\[50\%\] {
  max-width: 50%
}

.tw-max-w-\[500px\] {
  max-width: 500px
}

.tw-max-w-\[610px\] {
  max-width: 610px
}

.tw-max-w-\[672px\] {
  max-width: 672px
}

.tw-max-w-\[92vw\] {
  max-width: 92vw
}

.tw-max-w-full {
  max-width: 100%
}

.tw-max-w-lg {
  max-width: 32rem
}

.tw-max-w-md {
  max-width: 28rem
}

.tw-max-w-none {
  max-width: none
}

.tw-max-w-prose {
  max-width: 65ch
}

.tw-max-w-screen-lg {
  max-width: 1024px
}

.tw-max-w-sm {
  max-width: 24rem
}

.tw-max-w-xl {
  max-width: 36rem
}

.tw-max-w-xs {
  max-width: 20rem
}

.tw-flex-1 {
  flex: 1 1
}

.tw-flex-auto {
  flex: 1 1 auto
}

.tw-flex-initial {
  flex: 0 1 auto
}

.tw-flex-none {
  flex: none
}

.tw-flex-shrink {
  flex-shrink: 1
}

.tw-flex-shrink-0,
.tw-shrink-0 {
  flex-shrink: 0
}

.tw-flex-grow,
.tw-grow {
  flex-grow: 1
}

.tw-basis-auto {
  flex-basis: auto
}

.tw-basis-full {
  flex-basis: 100%
}

.tw-table-auto {
  table-layout: auto
}

.tw-table-fixed {
  table-layout: fixed
}

.tw-origin-top-left {
  transform-origin: top left
}

.-tw-translate-y-0 {
  --tw-translate-y: -0px
}

.-tw-translate-y-0,
.-tw-translate-y-5 {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.-tw-translate-y-5 {
  --tw-translate-y: -1.25rem
}

.-tw-translate-y-full {
  --tw-translate-y: -100%
}

.-tw-translate-y-full,
.tw--translate-x-1\/2 {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.tw--translate-x-1\/2 {
  --tw-translate-x: -50%
}

.tw--translate-x-3 {
  --tw-translate-x: -0.75rem
}

.tw--translate-x-3,
.tw--translate-y-0 {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.tw--translate-y-0 {
  --tw-translate-y: -0px
}

.tw--translate-y-2 {
  --tw-translate-y: -0.5rem
}

.tw--translate-y-2,
.tw--translate-y-5 {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.tw--translate-y-5 {
  --tw-translate-y: -1.25rem
}

.tw-translate-x-0 {
  --tw-translate-x: 0px
}

.tw-translate-x-0,
.tw-translate-x-5 {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.tw-translate-x-5 {
  --tw-translate-x: 1.25rem
}

.tw-translate-y-0 {
  --tw-translate-y: 0px
}

.tw-translate-y-0,
.tw-translate-y-5 {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.tw-translate-y-5 {
  --tw-translate-y: 1.25rem
}

.tw--rotate-90 {
  --tw-rotate: -90deg
}

.tw--rotate-90,
.tw-rotate-180 {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.tw-rotate-180 {
  --tw-rotate: 180deg
}

.tw-rotate-45 {
  --tw-rotate: 45deg
}

.tw-rotate-45,
.tw-rotate-90 {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.tw-rotate-90 {
  --tw-rotate: 90deg
}

.tw-scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1
}

.tw-scale-95,
.tw-scale-100 {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.tw-scale-95 {
  --tw-scale-x: .95;
  --tw-scale-y: .95
}

.tw-transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

@keyframes tw-popout {
  0% {
    transform: scale(1)
  }

  10% {
    transform: scale(2.5)
  }

  90% {
    transform: scale(2.5)
  }

  to {
    transform: scale(1)
  }
}

.tw-animate-emoji {
  animation: tw-popout 2.5s linear infinite
}

@keyframes tw-infinite-scroll {
  0% {
    transform: translateX(0)
  }

  to {
    transform: translateX(-100%)
  }
}

.tw-animate-infinite-scroll {
  animation: tw-infinite-scroll 40s linear infinite
}

.tw-animate-ping {
  animation: tw-ping 1s cubic-bezier(0, 0, .2, 1) infinite
}

@keyframes tw-ping {

  75%,
  to {
    transform: scale(2);
    opacity: 0
  }
}

.tw-animate-ping-slow {
  animation: tw-ping 1.5s cubic-bezier(0, 0, .2, 1) infinite
}

@keyframes tw-pulse {
  50% {
    opacity: .5
  }
}

.tw-animate-pulse {
  animation: tw-pulse 2s cubic-bezier(.4, 0, .6, 1) infinite
}

@keyframes tw-spin {
  to {
    transform: rotate(1turn)
  }
}

.tw-animate-spin {
  animation: tw-spin 1s linear infinite
}

.\!tw-cursor-default {
  cursor: default !important
}

.\!tw-cursor-pointer {
  cursor: pointer !important
}

.tw-cursor-default {
  cursor: default
}

.tw-cursor-not-allowed {
  cursor: not-allowed
}

.tw-cursor-pointer {
  cursor: pointer
}

.tw-select-none {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none
}

.tw-resize-none {
  resize: none
}

.tw-snap-x {
  -ms-scroll-snap-type: x var(--tw-scroll-snap-strictness);
  scroll-snap-type: x var(--tw-scroll-snap-strictness)
}

.tw-snap-mandatory {
  --tw-scroll-snap-strictness: mandatory
}

.tw-snap-center {
  scroll-snap-align: center
}

.tw-list-inside {
  list-style-position: inside
}

.tw-list-outside {
  list-style-position: outside
}

.tw-list-\[lower-alpha\] {
  list-style-type: lower-alpha
}

.tw-list-\[lower-roman\] {
  list-style-type: lower-roman
}

.tw-list-\[upper-alpha\] {
  list-style-type: upper-alpha
}

.tw-list-disc {
  list-style-type: disc
}

.tw-list-none {
  list-style-type: none
}

.tw-auto-rows-min {
  grid-auto-rows: min-content
}

.tw-grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr))
}

.tw-grid-cols-10 {
  grid-template-columns: repeat(10, minmax(0, 1fr))
}

.tw-grid-cols-12 {
  grid-template-columns: repeat(12, minmax(0, 1fr))
}

.tw-grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr))
}

.tw-grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr))
}

.tw-grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr))
}

.tw-grid-cols-5 {
  grid-template-columns: repeat(5, minmax(0, 1fr))
}

.tw-grid-cols-7 {
  grid-template-columns: repeat(7, minmax(0, 1fr))
}

.tw-grid-cols-8 {
  grid-template-columns: repeat(8, minmax(0, 1fr))
}

.tw-grid-rows-1 {
  grid-template-rows: repeat(1, minmax(0, 1fr))
}

.tw-grid-rows-2 {
  grid-template-rows: repeat(2, minmax(0, 1fr))
}

.tw-flex-row {
  flex-direction: row
}

.tw-flex-row-reverse {
  flex-direction: row-reverse
}

.tw-flex-col {
  flex-direction: column
}

.tw-flex-col-reverse {
  flex-direction: column-reverse
}

.tw-flex-wrap {
  flex-wrap: wrap
}

.tw-flex-nowrap {
  flex-wrap: nowrap
}

.tw-place-items-center {
  place-items: center
}

.tw-content-center {
  align-content: center
}

.tw-items-start {
  align-items: flex-start
}

.tw-items-end {
  align-items: flex-end
}

.tw-items-center {
  align-items: center
}

.tw-items-baseline {
  align-items: baseline
}

.tw-items-stretch {
  align-items: stretch
}

.\!tw-justify-start {
  justify-content: flex-start !important
}

.tw-justify-start {
  justify-content: flex-start
}

.tw-justify-end {
  justify-content: flex-end
}

.tw-justify-center {
  justify-content: center
}

.tw-justify-between {
  justify-content: space-between
}

.tw-justify-around {
  justify-content: space-around
}

.tw-justify-evenly {
  justify-content: space-evenly
}

.tw-justify-items-center {
  justify-items: center
}

.\!tw-gap-8 {
  grid-gap: 2rem !important;
  gap: 2rem !important
}

.tw-gap-0 {
  grid-gap: 0;
  gap: 0
}

.tw-gap-0\.5 {
  grid-gap: .125rem;
  gap: .125rem
}

.tw-gap-1 {
  grid-gap: .25rem;
  gap: .25rem
}

.tw-gap-10 {
  grid-gap: 2.5rem;
  gap: 2.5rem
}

.tw-gap-12 {
  grid-gap: 3rem;
  gap: 3rem
}

.tw-gap-2 {
  grid-gap: .5rem;
  gap: .5rem
}

.tw-gap-3 {
  grid-gap: .75rem;
  gap: .75rem
}

.tw-gap-4 {
  grid-gap: 1rem;
  gap: 1rem
}

.tw-gap-5 {
  grid-gap: 1.25rem;
  gap: 1.25rem
}

.tw-gap-6 {
  grid-gap: 1.5rem;
  gap: 1.5rem
}

.tw-gap-8 {
  grid-gap: 2rem;
  gap: 2rem
}

.tw-gap-9 {
  grid-gap: 2.25rem;
  gap: 2.25rem
}

.\!tw-gap-y-4 {
  grid-row-gap: 1rem !important;
  row-gap: 1rem !important
}

.tw-gap-x-0 {
  grid-column-gap: 0;
  -moz-column-gap: 0;
  column-gap: 0
}

.tw-gap-x-0\.5 {
  grid-column-gap: .125rem;
  -moz-column-gap: .125rem;
  column-gap: .125rem
}

.tw-gap-x-1 {
  grid-column-gap: .25rem;
  -moz-column-gap: .25rem;
  column-gap: .25rem
}

.tw-gap-x-1\.5 {
  grid-column-gap: .375rem;
  -moz-column-gap: .375rem;
  column-gap: .375rem
}

.tw-gap-x-10 {
  grid-column-gap: 2.5rem;
  -moz-column-gap: 2.5rem;
  column-gap: 2.5rem
}

.tw-gap-x-12 {
  grid-column-gap: 3rem;
  -moz-column-gap: 3rem;
  column-gap: 3rem
}

.tw-gap-x-16 {
  grid-column-gap: 4rem;
  -moz-column-gap: 4rem;
  column-gap: 4rem
}

.tw-gap-x-2 {
  grid-column-gap: .5rem;
  -moz-column-gap: .5rem;
  column-gap: .5rem
}

.tw-gap-x-2\.5 {
  grid-column-gap: .625rem;
  -moz-column-gap: .625rem;
  column-gap: .625rem
}

.tw-gap-x-24 {
  grid-column-gap: 6rem;
  -moz-column-gap: 6rem;
  column-gap: 6rem
}

.tw-gap-x-3 {
  grid-column-gap: .75rem;
  -moz-column-gap: .75rem;
  column-gap: .75rem
}

.tw-gap-x-32 {
  grid-column-gap: 8rem;
  -moz-column-gap: 8rem;
  column-gap: 8rem
}

.tw-gap-x-4 {
  grid-column-gap: 1rem;
  -moz-column-gap: 1rem;
  column-gap: 1rem
}

.tw-gap-x-5 {
  grid-column-gap: 1.25rem;
  -moz-column-gap: 1.25rem;
  column-gap: 1.25rem
}

.tw-gap-x-7 {
  grid-column-gap: 1.75rem;
  -moz-column-gap: 1.75rem;
  column-gap: 1.75rem
}

.tw-gap-x-8 {
  grid-column-gap: 2rem;
  -moz-column-gap: 2rem;
  column-gap: 2rem
}

.tw-gap-x-\[10px\] {
  grid-column-gap: 10px;
  -moz-column-gap: 10px;
  column-gap: 10px
}

.tw-gap-y-0 {
  grid-row-gap: 0;
  row-gap: 0
}

.tw-gap-y-0\.5 {
  grid-row-gap: .125rem;
  row-gap: .125rem
}

.tw-gap-y-1 {
  grid-row-gap: .25rem;
  row-gap: .25rem
}

.tw-gap-y-1\.5 {
  grid-row-gap: .375rem;
  row-gap: .375rem
}

.tw-gap-y-10 {
  grid-row-gap: 2.5rem;
  row-gap: 2.5rem
}

.tw-gap-y-12 {
  grid-row-gap: 3rem;
  row-gap: 3rem
}

.tw-gap-y-2 {
  grid-row-gap: .5rem;
  row-gap: .5rem
}

.tw-gap-y-3 {
  grid-row-gap: .75rem;
  row-gap: .75rem
}

.tw-gap-y-4 {
  grid-row-gap: 1rem;
  row-gap: 1rem
}

.tw-gap-y-5 {
  grid-row-gap: 1.25rem;
  row-gap: 1.25rem
}

.tw-gap-y-6 {
  grid-row-gap: 1.5rem;
  row-gap: 1.5rem
}

.tw-gap-y-8 {
  grid-row-gap: 2rem;
  row-gap: 2rem
}

.tw-space-x-1>:not([hidden])~:not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.25rem*var(--tw-space-x-reverse));
  margin-left: calc(0.25rem*(1 - var(--tw-space-x-reverse)))
}

.tw-space-x-12>:not([hidden])~:not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(3rem*var(--tw-space-x-reverse));
  margin-left: calc(3rem*(1 - var(--tw-space-x-reverse)))
}

.tw-space-x-2>:not([hidden])~:not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem*var(--tw-space-x-reverse));
  margin-left: calc(0.5rem*(1 - var(--tw-space-x-reverse)))
}

.tw-space-x-3>:not([hidden])~:not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem*var(--tw-space-x-reverse));
  margin-left: calc(0.75rem*(1 - var(--tw-space-x-reverse)))
}

.tw-space-x-4>:not([hidden])~:not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem*var(--tw-space-x-reverse));
  margin-left: calc(1rem*(1 - var(--tw-space-x-reverse)))
}

.tw-space-x-5>:not([hidden])~:not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.25rem*var(--tw-space-x-reverse));
  margin-left: calc(1.25rem*(1 - var(--tw-space-x-reverse)))
}

.tw-space-x-6>:not([hidden])~:not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.5rem*var(--tw-space-x-reverse));
  margin-left: calc(1.5rem*(1 - var(--tw-space-x-reverse)))
}

.tw-space-x-8>:not([hidden])~:not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(2rem*var(--tw-space-x-reverse));
  margin-left: calc(2rem*(1 - var(--tw-space-x-reverse)))
}

.tw-space-y-1>:not([hidden])~:not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem*(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem*var(--tw-space-y-reverse))
}

.tw-space-y-1\.5>:not([hidden])~:not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.375rem*(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.375rem*var(--tw-space-y-reverse))
}

.tw-space-y-12>:not([hidden])~:not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(3rem*(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(3rem*var(--tw-space-y-reverse))
}

.tw-space-y-16>:not([hidden])~:not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(4rem*(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(4rem*var(--tw-space-y-reverse))
}

.tw-space-y-2>:not([hidden])~:not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem*(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem*var(--tw-space-y-reverse))
}

.tw-space-y-3>:not([hidden])~:not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.75rem*(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.75rem*var(--tw-space-y-reverse))
}

.tw-space-y-4>:not([hidden])~:not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem*(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem*var(--tw-space-y-reverse))
}

.tw-space-y-5>:not([hidden])~:not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.25rem*(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.25rem*var(--tw-space-y-reverse))
}

.tw-space-y-6>:not([hidden])~:not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem*(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem*var(--tw-space-y-reverse))
}

.tw-space-y-7>:not([hidden])~:not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.75rem*(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.75rem*var(--tw-space-y-reverse))
}

.tw-space-y-8>:not([hidden])~:not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(2rem*(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(2rem*var(--tw-space-y-reverse))
}

.tw-divide-x-\[1px\]>:not([hidden])~:not([hidden]),
.tw-divide-x>:not([hidden])~:not([hidden]) {
  --tw-divide-x-reverse: 0;
  border-right-width: calc(1px*var(--tw-divide-x-reverse));
  border-left-width: calc(1px*(1 - var(--tw-divide-x-reverse)))
}

.tw-divide-y>:not([hidden])~:not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px*(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px*var(--tw-divide-y-reverse))
}

.\!tw-divide-none>:not([hidden])~:not([hidden]) {
  border-style: none !important
}

.\!tw-divide-gray-300>:not([hidden])~:not([hidden]) {
  --tw-divide-opacity: 1 !important;
  border-color: rgb(203 213 225/var(--tw-divide-opacity)) !important
}

.tw-divide-gray-200>:not([hidden])~:not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(239 242 245/var(--tw-divide-opacity))
}

.tw-divide-gray-300>:not([hidden])~:not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(203 213 225/var(--tw-divide-opacity))
}

.tw-self-start {
  align-self: flex-start
}

.tw-self-end {
  align-self: flex-end
}

.tw-self-center {
  align-self: center
}

.tw-self-stretch {
  align-self: stretch
}

.tw-justify-self-center {
  justify-self: center
}

.tw-overflow-auto {
  overflow: auto
}

.tw-overflow-hidden {
  overflow: hidden
}

.tw-overflow-visible {
  overflow: visible
}

.tw-overflow-x-auto {
  overflow-x: auto
}

.tw-overflow-y-auto {
  overflow-y: auto
}

.tw-overflow-x-hidden {
  overflow-x: hidden
}

.\!tw-overflow-y-hidden {
  overflow-y: hidden !important
}

.tw-overflow-y-hidden {
  overflow-y: hidden
}

.tw-overflow-x-scroll {
  overflow-x: scroll
}

.tw-scroll-smooth {
  scroll-behavior: smooth
}

.tw-truncate {
  overflow: hidden;
  white-space: nowrap
}

.tw-overflow-ellipsis,
.tw-truncate {
  text-overflow: ellipsis
}

.tw-whitespace-normal {
  white-space: normal
}

.tw-whitespace-nowrap {
  white-space: nowrap
}

.tw-text-wrap {
  text-wrap: wrap
}

.tw-break-words {
  overflow-wrap: break-word
}

.tw-break-all {
  word-break: break-all
}

.\!tw-rounded {
  border-radius: .25rem !important
}

.\!tw-rounded-full {
  border-radius: 9999px !important
}

.\!tw-rounded-md {
  border-radius: .375rem !important
}

.\!tw-rounded-xl {
  border-radius: .75rem !important
}

.tw-rounded {
  border-radius: .25rem
}

.tw-rounded-2xl {
  border-radius: 1rem
}

.tw-rounded-full {
  border-radius: 9999px
}

.tw-rounded-lg {
  border-radius: .5rem
}

.tw-rounded-md {
  border-radius: .375rem
}

.tw-rounded-sm {
  border-radius: .125rem
}

.tw-rounded-xl {
  border-radius: .75rem
}

.\!tw-rounded-b-none {
  border-bottom-right-radius: 0 !important;
  border-bottom-left-radius: 0 !important
}

.\!tw-rounded-t-none {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important
}

.tw-rounded-b-lg {
  border-bottom-right-radius: .5rem;
  border-bottom-left-radius: .5rem
}

.tw-rounded-b-none {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0
}

.tw-rounded-l {
  border-top-left-radius: .25rem;
  border-bottom-left-radius: .25rem
}

.tw-rounded-l-lg {
  border-top-left-radius: .5rem;
  border-bottom-left-radius: .5rem
}

.tw-rounded-l-md {
  border-top-left-radius: .375rem;
  border-bottom-left-radius: .375rem
}

.tw-rounded-l-none {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0
}

.tw-rounded-l-xl {
  border-top-left-radius: .75rem;
  border-bottom-left-radius: .75rem
}

.tw-rounded-r {
  border-top-right-radius: .25rem;
  border-bottom-right-radius: .25rem
}

.tw-rounded-r-lg {
  border-top-right-radius: .5rem;
  border-bottom-right-radius: .5rem
}

.tw-rounded-r-md {
  border-top-right-radius: .375rem;
  border-bottom-right-radius: .375rem
}

.tw-rounded-r-none {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0
}

.tw-rounded-t {
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem
}

.tw-rounded-t-lg {
  border-top-left-radius: .5rem;
  border-top-right-radius: .5rem
}

.tw-rounded-t-none {
  border-top-left-radius: 0;
  border-top-right-radius: 0
}

.tw-rounded-t-xl {
  border-top-left-radius: .75rem;
  border-top-right-radius: .75rem
}

.\!tw-border {
  border-width: 1px !important
}

.\!tw-border-0 {
  border-width: 0 !important
}

.tw-border {
  border-width: 1px
}

.tw-border-0 {
  border-width: 0
}

.tw-border-2 {
  border-width: 2px
}

.tw-border-8 {
  border-width: 8px
}

.\!tw-border-x-2 {
  border-left-width: 2px !important;
  border-right-width: 2px !important
}

.\!tw-border-y-0 {
  border-top-width: 0 !important;
  border-bottom-width: 0 !important
}

.tw-border-x-2 {
  border-left-width: 2px;
  border-right-width: 2px
}

.tw-border-y {
  border-top-width: 1px;
  border-bottom-width: 1px
}

.tw-border-y-4 {
  border-top-width: 4px;
  border-bottom-width: 4px
}

.\!tw-border-b {
  border-bottom-width: 1px !important
}

.\!tw-border-b-0 {
  border-bottom-width: 0 !important
}

.\!tw-border-l {
  border-left-width: 1px !important
}

.\!tw-border-r-2 {
  border-right-width: 2px !important
}

.\!tw-border-t-0 {
  border-top-width: 0 !important
}

.\!tw-border-t-2 {
  border-top-width: 2px !important
}

.tw-border-b {
  border-bottom-width: 1px
}

.tw-border-b-2 {
  border-bottom-width: 2px
}

.tw-border-b-4 {
  border-bottom-width: 4px
}

.tw-border-b-\[1px\] {
  border-bottom-width: 1px
}

.tw-border-l-0 {
  border-left-width: 0
}

.tw-border-l-2 {
  border-left-width: 2px
}

.tw-border-l-8 {
  border-left-width: 8px
}

.tw-border-l-\[3px\] {
  border-left-width: 3px
}

.tw-border-r {
  border-right-width: 1px
}

.tw-border-r-0 {
  border-right-width: 0
}

.tw-border-t {
  border-top-width: 1px
}

.tw-border-t-0 {
  border-top-width: 0
}

.tw-border-t-2 {
  border-top-width: 2px
}

.tw-border-t-\[1px\] {
  border-top-width: 1px
}

.tw-border-solid {
  border-style: solid
}

.tw-border-dashed {
  border-style: dashed
}

.\!tw-border-none {
  border-style: none !important
}

.tw-border-none {
  border-style: none
}

.\!tw-border-gray-200 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(239 242 245/var(--tw-border-opacity)) !important
}

.\!tw-border-gray-300 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(203 213 225/var(--tw-border-opacity)) !important
}

.\!tw-border-red-500 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(239 68 68/var(--tw-border-opacity)) !important
}

.\!tw-border-slate-300 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(203 213 225/var(--tw-border-opacity)) !important
}

.\!tw-border-transparent {
  border-color: transparent !important
}

.tw-border-black {
  --tw-border-opacity: 1;
  border-color: rgb(0 0 0/var(--tw-border-opacity))
}

.tw-border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(239 242 245/var(--tw-border-opacity))
}

.tw-border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(203 213 225/var(--tw-border-opacity))
}

.tw-border-gray-500 {
  --tw-border-opacity: 1;
  border-color: rgb(100 116 139/var(--tw-border-opacity))
}

.tw-border-gray-900 {
  --tw-border-opacity: 1;
  border-color: rgb(15 23 42/var(--tw-border-opacity))
}

.tw-border-primary-100 {
  --tw-border-opacity: 1;
  border-color: rgb(232 252 201/var(--tw-border-opacity))
}

.tw-border-primary-300 {
  --tw-border-opacity: 1;
  border-color: rgb(166 239 95/var(--tw-border-opacity))
}

.tw-border-primary-400 {
  --tw-border-opacity: 1;
  border-color: rgb(128 224 56/var(--tw-border-opacity))
}

.tw-border-primary-500 {
  --tw-border-opacity: 1;
  border-color: rgb(75 204 0/var(--tw-border-opacity))
}

.tw-border-red-500 {
  --tw-border-opacity: 1;
  border-color: rgb(239 68 68/var(--tw-border-opacity))
}

.tw-border-slate-300 {
  --tw-border-opacity: 1;
  border-color: rgb(203 213 225/var(--tw-border-opacity))
}

.tw-border-transparent {
  border-color: transparent
}

.tw-border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255/var(--tw-border-opacity))
}

.tw-border-yellow-400 {
  --tw-border-opacity: 1;
  border-color: rgb(250 204 21/var(--tw-border-opacity))
}

.tw-border-opacity-5 {
  --tw-border-opacity: 0.05
}

.\!tw-bg-gray-800 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(30 41 59/var(--tw-bg-opacity)) !important
}

.tw-bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0/var(--tw-bg-opacity))
}

.tw-bg-blue-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(219 234 254/var(--tw-bg-opacity))
}

.tw-bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235/var(--tw-bg-opacity))
}

.tw-bg-danger-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 229 214/var(--tw-bg-opacity))
}

.tw-bg-danger-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 240 232/var(--tw-bg-opacity))
}

.tw-bg-danger-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 58 51/var(--tw-bg-opacity))
}

.tw-bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249/var(--tw-bg-opacity))
}

.tw-bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 242 245/var(--tw-bg-opacity))
}

.tw-bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(203 213 225/var(--tw-bg-opacity))
}

.tw-bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(148 163 184/var(--tw-bg-opacity))
}

.tw-bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 252/var(--tw-bg-opacity))
}

.tw-bg-gray-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(100 116 139/var(--tw-bg-opacity))
}

.tw-bg-gray-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(71 85 105/var(--tw-bg-opacity))
}

.tw-bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59/var(--tw-bg-opacity))
}

.tw-bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(15 23 42/var(--tw-bg-opacity))
}

.tw-bg-gray-900\/60 {
  background-color: rgb(15 23 42/.6)
}

.tw-bg-green-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(34 197 94/var(--tw-bg-opacity))
}

.tw-bg-indigo-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(79 70 229/var(--tw-bg-opacity))
}

.tw-bg-info-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(214 253 255/var(--tw-bg-opacity))
}

.tw-bg-inherit {
  background-color: inherit
}

.tw-bg-moon-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(27 35 45/var(--tw-bg-opacity))
}

.tw-bg-primary-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(232 252 201/var(--tw-bg-opacity))
}

.tw-bg-primary-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(205 249 149/var(--tw-bg-opacity))
}

.tw-bg-primary-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(166 239 95/var(--tw-bg-opacity))
}

.tw-bg-primary-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(128 224 56/var(--tw-bg-opacity))
}

.tw-bg-primary-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 252 229/var(--tw-bg-opacity))
}

.tw-bg-primary-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(75 204 0/var(--tw-bg-opacity))
}

.tw-bg-primary-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(53 175 0/var(--tw-bg-opacity))
}

.tw-bg-purple-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 232 255/var(--tw-bg-opacity))
}

.tw-bg-red-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(248 113 113/var(--tw-bg-opacity))
}

.tw-bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68/var(--tw-bg-opacity))
}

.tw-bg-stone-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(168 162 158/var(--tw-bg-opacity))
}

.tw-bg-success-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(201 250 200/var(--tw-bg-opacity))
}

.tw-bg-success-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(228 250 227/var(--tw-bg-opacity))
}

.tw-bg-success-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(0 168 62/var(--tw-bg-opacity))
}

.tw-bg-success-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(0 144 67/var(--tw-bg-opacity))
}

.tw-bg-transparent {
  background-color: transparent
}

.tw-bg-warning-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 251 214/var(--tw-bg-opacity))
}

.tw-bg-warning-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 238 132/var(--tw-bg-opacity))
}

.tw-bg-warning-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 221 51/var(--tw-bg-opacity))
}

.tw-bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity))
}

.tw-bg-white\/90 {
  background-color: rgb(255 255 255/.9)
}

.tw-bg-opacity-75 {
  --tw-bg-opacity: 0.75
}

.tw-bg-gradient-to-r {
  background-image: linear-gradient(90deg, var(--tw-gradient-stops))
}

.tw-bg-gradient-to-t {
  background-image: linear-gradient(0deg, var(--tw-gradient-stops))
}

.tw-from-warning-500 {
  --tw-gradient-from: #fd3 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(255 221 51/0) var(--tw-gradient-to-position)
}

.tw-from-warning-500,
.tw-from-white {
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)
}

.tw-from-white {
  --tw-gradient-from: #fff var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(255 255 255/0) var(--tw-gradient-to-position)
}

.tw-from-yellow-400 {
  --tw-gradient-from: #facc15 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(250 204 21/0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)
}

.tw-to-primary-400 {
  --tw-gradient-to: #80e038 var(--tw-gradient-to-position)
}

.tw-to-success-500 {
  --tw-gradient-to: #00a83e var(--tw-gradient-to-position)
}

.tw-bg-cover {
  background-size: cover
}

.tw-bg-center {
  background-position: 50%
}

.tw-bg-no-repeat {
  background-repeat: no-repeat
}

.tw-object-contain {
  -o-object-fit: contain;
  object-fit: contain
}

.tw-object-cover {
  -o-object-fit: cover;
  object-fit: cover
}

.tw-object-fill {
  -o-object-fit: fill;
  object-fit: fill
}

.tw-object-scale-down {
  -o-object-fit: scale-down;
  object-fit: scale-down
}

.tw-object-center {
  -o-object-position: center;
  object-position: center
}

.\!tw-p-0 {
  padding: 0 !important
}

.\!tw-p-0\.5 {
  padding: .125rem !important
}

.\!tw-p-2 {
  padding: .5rem !important
}

.\!tw-p-4 {
  padding: 1rem !important
}

.\!tw-p-6 {
  padding: 1.5rem !important
}

.tw-p-0 {
  padding: 0
}

.tw-p-0\.5 {
  padding: .125rem
}

.tw-p-1 {
  padding: .25rem
}

.tw-p-12 {
  padding: 3rem
}

.tw-p-2 {
  padding: .5rem
}

.tw-p-2\.5 {
  padding: .625rem
}

.tw-p-3 {
  padding: .75rem
}

.tw-p-4 {
  padding: 1rem
}

.tw-p-5 {
  padding: 1.25rem
}

.tw-p-6 {
  padding: 1.5rem
}

.tw-p-8 {
  padding: 2rem
}

.\!tw-px-0 {
  padding-left: 0 !important;
  padding-right: 0 !important
}

.\!tw-px-1 {
  padding-left: .25rem !important;
  padding-right: .25rem !important
}

.\!tw-px-1\.5 {
  padding-left: .375rem !important;
  padding-right: .375rem !important
}

.\!tw-px-2 {
  padding-left: .5rem !important;
  padding-right: .5rem !important
}

.\!tw-px-2\.5 {
  padding-left: .625rem !important;
  padding-right: .625rem !important
}

.\!tw-px-4 {
  padding-left: 1rem !important;
  padding-right: 1rem !important
}

.\!tw-py-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important
}

.\!tw-py-0\.5 {
  padding-top: .125rem !important;
  padding-bottom: .125rem !important
}

.\!tw-py-1 {
  padding-top: .25rem !important;
  padding-bottom: .25rem !important
}

.\!tw-py-1\.5 {
  padding-top: .375rem !important;
  padding-bottom: .375rem !important
}

.\!tw-py-3 {
  padding-top: .75rem !important;
  padding-bottom: .75rem !important
}

.\!tw-py-4 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important
}

.tw-px-0 {
  padding-left: 0;
  padding-right: 0
}

.tw-px-0\.5 {
  padding-left: .125rem;
  padding-right: .125rem
}

.tw-px-1 {
  padding-left: .25rem;
  padding-right: .25rem
}

.tw-px-1\.5 {
  padding-left: .375rem;
  padding-right: .375rem
}

.tw-px-10 {
  padding-left: 2.5rem;
  padding-right: 2.5rem
}

.tw-px-16 {
  padding-left: 4rem;
  padding-right: 4rem
}

.tw-px-2 {
  padding-left: .5rem;
  padding-right: .5rem
}

.tw-px-2\.5 {
  padding-left: .625rem;
  padding-right: .625rem
}

.tw-px-24 {
  padding-left: 6rem;
  padding-right: 6rem
}

.tw-px-3 {
  padding-left: .75rem;
  padding-right: .75rem
}

.tw-px-4 {
  padding-left: 1rem;
  padding-right: 1rem
}

.tw-px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem
}

.tw-px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem
}

.tw-px-7 {
  padding-left: 1.75rem;
  padding-right: 1.75rem
}

.tw-px-8 {
  padding-left: 2rem;
  padding-right: 2rem
}

.tw-px-\[2px\] {
  padding-left: 2px;
  padding-right: 2px
}

.tw-py-0 {
  padding-top: 0;
  padding-bottom: 0
}

.tw-py-0\.5 {
  padding-top: .125rem;
  padding-bottom: .125rem
}

.tw-py-1 {
  padding-top: .25rem;
  padding-bottom: .25rem
}

.tw-py-1\.5 {
  padding-top: .375rem;
  padding-bottom: .375rem
}

.tw-py-10 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem
}

.tw-py-12 {
  padding-top: 3rem;
  padding-bottom: 3rem
}

.tw-py-16 {
  padding-top: 4rem;
  padding-bottom: 4rem
}

.tw-py-2 {
  padding-top: .5rem;
  padding-bottom: .5rem
}

.tw-py-2\.5 {
  padding-top: .625rem;
  padding-bottom: .625rem
}

.tw-py-3 {
  padding-top: .75rem;
  padding-bottom: .75rem
}

.tw-py-3\.5 {
  padding-top: .875rem;
  padding-bottom: .875rem
}

.tw-py-36 {
  padding-top: 9rem;
  padding-bottom: 9rem
}

.tw-py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem
}

.tw-py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem
}

.tw-py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem
}

.tw-py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem
}

.\!tw-pb-0 {
  padding-bottom: 0 !important
}

.\!tw-pb-10 {
  padding-bottom: 2.5rem !important
}

.\!tw-pl-0 {
  padding-left: 0 !important
}

.\!tw-pl-0\.5 {
  padding-left: .125rem !important
}

.\!tw-pl-2 {
  padding-left: .5rem !important
}

.\!tw-pl-2\.5 {
  padding-left: .625rem !important
}

.\!tw-pl-3 {
  padding-left: .75rem !important
}

.\!tw-pl-5 {
  padding-left: 1.25rem !important
}

.\!tw-pr-0 {
  padding-right: 0 !important
}

.\!tw-pr-1 {
  padding-right: .25rem !important
}

.\!tw-pr-2 {
  padding-right: .5rem !important
}

.\!tw-pt-0 {
  padding-top: 0 !important
}

.\!tw-pt-2 {
  padding-top: .5rem !important
}

.tw-pb-0 {
  padding-bottom: 0
}

.tw-pb-1 {
  padding-bottom: .25rem
}

.tw-pb-1\.5 {
  padding-bottom: .375rem
}

.tw-pb-12 {
  padding-bottom: 3rem
}

.tw-pb-16 {
  padding-bottom: 4rem
}

.tw-pb-2 {
  padding-bottom: .5rem
}

.tw-pb-3 {
  padding-bottom: .75rem
}

.tw-pb-4 {
  padding-bottom: 1rem
}

.tw-pb-5 {
  padding-bottom: 1.25rem
}

.tw-pb-6 {
  padding-bottom: 1.5rem
}

.tw-pb-7 {
  padding-bottom: 1.75rem
}

.tw-pb-8 {
  padding-bottom: 2rem
}

.tw-pb-9 {
  padding-bottom: 2.25rem
}

.tw-pb-\[80px\] {
  padding-bottom: 80px
}

.tw-pl-0 {
  padding-left: 0
}

.tw-pl-0\.5 {
  padding-left: .125rem
}

.tw-pl-1 {
  padding-left: .25rem
}

.tw-pl-1\.5 {
  padding-left: .375rem
}

.tw-pl-10 {
  padding-left: 2.5rem
}

.tw-pl-12 {
  padding-left: 3rem
}

.tw-pl-14 {
  padding-left: 3.5rem
}

.tw-pl-2 {
  padding-left: .5rem
}

.tw-pl-2\.5 {
  padding-left: .625rem
}

.tw-pl-20 {
  padding-left: 5rem
}

.tw-pl-3 {
  padding-left: .75rem
}

.tw-pl-3\.5 {
  padding-left: .875rem
}

.tw-pl-36 {
  padding-left: 9rem
}

.tw-pl-4 {
  padding-left: 1rem
}

.tw-pl-5 {
  padding-left: 1.25rem
}

.tw-pl-8 {
  padding-left: 2rem
}

.tw-pr-0 {
  padding-right: 0
}

.tw-pr-1 {
  padding-right: .25rem
}

.tw-pr-1\.5 {
  padding-right: .375rem
}

.tw-pr-12 {
  padding-right: 3rem
}

.tw-pr-14 {
  padding-right: 3.5rem
}

.tw-pr-2 {
  padding-right: .5rem
}

.tw-pr-2\.5 {
  padding-right: .625rem
}

.tw-pr-3 {
  padding-right: .75rem
}

.tw-pr-4 {
  padding-right: 1rem
}

.tw-pr-5 {
  padding-right: 1.25rem
}

.tw-pr-6 {
  padding-right: 1.5rem
}

.tw-pr-8 {
  padding-right: 2rem
}

.tw-pr-\[15px\] {
  padding-right: 15px
}

.tw-pt-0 {
  padding-top: 0
}

.tw-pt-0\.5 {
  padding-top: .125rem
}

.tw-pt-1 {
  padding-top: .25rem
}

.tw-pt-1\.5 {
  padding-top: .375rem
}

.tw-pt-10 {
  padding-top: 2.5rem
}

.tw-pt-12 {
  padding-top: 3rem
}

.tw-pt-2 {
  padding-top: .5rem
}

.tw-pt-2\.5 {
  padding-top: .625rem
}

.tw-pt-24 {
  padding-top: 6rem
}

.tw-pt-3 {
  padding-top: .75rem
}

.tw-pt-3\.5 {
  padding-top: .875rem
}

.tw-pt-4 {
  padding-top: 1rem
}

.tw-pt-5 {
  padding-top: 1.25rem
}

.tw-pt-6 {
  padding-top: 1.5rem
}

.tw-pt-8 {
  padding-top: 2rem
}

.tw-pt-\[2px\] {
  padding-top: 2px
}

.tw-pt-\[3px\] {
  padding-top: 3px
}

.\!tw-text-left {
  text-align: left !important
}

.tw-text-left {
  text-align: left
}

.\!tw-text-center {
  text-align: center !important
}

.tw-text-center {
  text-align: center
}

.\!tw-text-right {
  text-align: right !important
}

.tw-text-right {
  text-align: right
}

.tw-text-justify {
  text-align: justify
}

.tw-text-start {
  text-align: start
}

.tw-text-end {
  text-align: end
}

.tw-align-baseline {
  vertical-align: baseline
}

.tw-align-top {
  vertical-align: top
}

.tw-align-middle {
  vertical-align: middle
}

.tw-align-bottom {
  vertical-align: bottom
}

.tw-font-gecko-body {
  font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol
}

.\!tw-text-7xl {
  font-size: 4.5rem !important;
  line-height: 1 !important
}

.\!tw-text-base {
  font-size: 1rem !important;
  line-height: 1.5rem !important
}

.\!tw-text-lg {
  font-size: 1.125rem !important;
  line-height: 1.75rem !important
}

.\!tw-text-sm {
  font-size: .875rem !important;
  line-height: 1.25rem !important
}

.\!tw-text-xs {
  font-size: .75rem !important;
  line-height: 1rem !important
}

.tw-text-2xl {
  font-size: 1.5rem;
  line-height: 2rem
}

.tw-text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem
}

.tw-text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem
}

.tw-text-5xl {
  font-size: 3rem;
  line-height: 1
}

.tw-text-\[30px\] {
  font-size: 30px
}

.tw-text-\[3vw\] {
  font-size: 3vw
}

.tw-text-\[8px\] {
  font-size: 8px
}

.tw-text-\[length\:inherit\] {
  font-size: inherit
}

.tw-text-base {
  font-size: 1rem;
  line-height: 1.5rem
}

.tw-text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem
}

.tw-text-sm {
  font-size: .875rem;
  line-height: 1.25rem
}

.tw-text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem
}

.tw-text-xs {
  font-size: .75rem;
  line-height: 1rem
}

.\!tw-font-bold {
  font-weight: 700 !important
}

.\!tw-font-medium {
  font-weight: 500 !important
}

.\!tw-font-normal {
  font-weight: 400 !important
}

.\!tw-font-semibold {
  font-weight: 600 !important
}

.tw-font-\[number\:inherit\] {
  font-weight: inherit
}

.tw-font-bold {
  font-weight: 700
}

.tw-font-extrabold {
  font-weight: 800
}

.tw-font-light {
  font-weight: 300
}

.tw-font-medium {
  font-weight: 500
}

.tw-font-normal {
  font-weight: 400
}

.tw-font-semibold {
  font-weight: 600
}

.tw-uppercase {
  text-transform: uppercase
}

.tw-italic {
  font-style: italic
}

.\!tw-leading-7 {
  line-height: 1.75rem !important
}

.\!tw-leading-\[1\.25\] {
  line-height: 1.25 !important
}

.tw-leading-10 {
  line-height: 2.5rem
}

.tw-leading-3 {
  line-height: .75rem
}

.tw-leading-4 {
  line-height: 1rem
}

.tw-leading-5 {
  line-height: 1.25rem
}

.tw-leading-6 {
  line-height: 1.5rem
}

.tw-leading-7 {
  line-height: 1.75rem
}

.tw-leading-8 {
  line-height: 2rem
}

.tw-leading-9 {
  line-height: 2.25rem
}

.tw-leading-none {
  line-height: 1
}

.tw-leading-relaxed {
  line-height: 1.625
}

.tw-tracking-normal {
  letter-spacing: 0
}

.tw-tracking-tight {
  letter-spacing: -.025em
}

.\!tw-text-danger-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(255 58 51/var(--tw-text-opacity)) !important
}

.\!tw-text-gray-400 {
  --tw-text-opacity: 1 !important;
  color: rgb(148 163 184/var(--tw-text-opacity)) !important
}

.\!tw-text-gray-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(100 116 139/var(--tw-text-opacity)) !important
}

.\!tw-text-gray-700 {
  --tw-text-opacity: 1 !important;
  color: rgb(51 65 85/var(--tw-text-opacity)) !important
}

.\!tw-text-gray-900 {
  --tw-text-opacity: 1 !important;
  color: rgb(15 23 42/var(--tw-text-opacity)) !important
}

.\!tw-text-moon-100 {
  --tw-text-opacity: 1 !important;
  color: rgb(190 203 218/var(--tw-text-opacity)) !important
}

.\!tw-text-moon-900 {
  --tw-text-opacity: 1 !important;
  color: rgb(13 18 23/var(--tw-text-opacity)) !important
}

.\!tw-text-primary-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(75 204 0/var(--tw-text-opacity)) !important
}

.\!tw-text-success-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(0 168 62/var(--tw-text-opacity)) !important
}

.tw-text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0/var(--tw-text-opacity))
}

.tw-text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(59 130 246/var(--tw-text-opacity))
}

.tw-text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(37 99 235/var(--tw-text-opacity))
}

.tw-text-blue-700 {
  --tw-text-opacity: 1;
  color: rgb(29 78 216/var(--tw-text-opacity))
}

.tw-text-blue-800 {
  --tw-text-opacity: 1;
  color: rgb(30 64 175/var(--tw-text-opacity))
}

.tw-text-danger,
.tw-text-danger-500 {
  --tw-text-opacity: 1;
  color: rgb(255 58 51/var(--tw-text-opacity))
}

.tw-text-danger-600 {
  --tw-text-opacity: 1;
  color: rgb(216 37 46/var(--tw-text-opacity))
}

.tw-text-danger-700 {
  --tw-text-opacity: 1;
  color: rgb(183 25 47/var(--tw-text-opacity))
}

.tw-text-danger-800 {
  --tw-text-opacity: 1;
  color: rgb(147 16 45/var(--tw-text-opacity))
}

.tw-text-danger-900 {
  --tw-text-opacity: 1;
  color: rgb(122 9 44/var(--tw-text-opacity))
}

.tw-text-gray-100 {
  --tw-text-opacity: 1;
  color: rgb(241 245 249/var(--tw-text-opacity))
}

.tw-text-gray-200 {
  --tw-text-opacity: 1;
  color: rgb(239 242 245/var(--tw-text-opacity))
}

.tw-text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(203 213 225/var(--tw-text-opacity))
}

.tw-text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(148 163 184/var(--tw-text-opacity))
}

.tw-text-gray-50 {
  --tw-text-opacity: 1;
  color: rgb(248 250 252/var(--tw-text-opacity))
}

.tw-text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(100 116 139/var(--tw-text-opacity))
}

.tw-text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(71 85 105/var(--tw-text-opacity))
}

.tw-text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(51 65 85/var(--tw-text-opacity))
}

.tw-text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(30 41 59/var(--tw-text-opacity))
}

.tw-text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(15 23 42/var(--tw-text-opacity))
}

.tw-text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(34 197 94/var(--tw-text-opacity))
}

.tw-text-indigo-400 {
  --tw-text-opacity: 1;
  color: rgb(129 140 248/var(--tw-text-opacity))
}

.tw-text-info-500 {
  --tw-text-opacity: 1;
  color: rgb(51 192 255/var(--tw-text-opacity))
}

.tw-text-info-800 {
  --tw-text-opacity: 1;
  color: rgb(16 81 147/var(--tw-text-opacity))
}

.tw-text-info-900 {
  --tw-text-opacity: 1;
  color: rgb(9 57 122/var(--tw-text-opacity))
}

.tw-text-inherit {
  color: inherit
}

.tw-text-moon-400 {
  --tw-text-opacity: 1;
  color: rgb(93 124 162/var(--tw-text-opacity))
}

.tw-text-moon-700 {
  --tw-text-opacity: 1;
  color: rgb(33 45 59/var(--tw-text-opacity))
}

.tw-text-primary-400 {
  --tw-text-opacity: 1;
  color: rgb(128 224 56/var(--tw-text-opacity))
}

.tw-text-primary-500 {
  --tw-text-opacity: 1;
  color: rgb(75 204 0/var(--tw-text-opacity))
}

.tw-text-primary-600 {
  --tw-text-opacity: 1;
  color: rgb(53 175 0/var(--tw-text-opacity))
}

.tw-text-primary-700 {
  --tw-text-opacity: 1;
  color: rgb(35 146 0/var(--tw-text-opacity))
}

.tw-text-primary-800 {
  --tw-text-opacity: 1;
  color: rgb(21 118 0/var(--tw-text-opacity))
}

.tw-text-primary-900 {
  --tw-text-opacity: 1;
  color: rgb(11 97 0/var(--tw-text-opacity))
}

.tw-text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(192 132 252/var(--tw-text-opacity))
}

.tw-text-purple-800 {
  --tw-text-opacity: 1;
  color: rgb(107 33 168/var(--tw-text-opacity))
}

.tw-text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(248 113 113/var(--tw-text-opacity))
}

.tw-text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68/var(--tw-text-opacity))
}

.tw-text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(220 38 38/var(--tw-text-opacity))
}

.tw-text-red-700 {
  --tw-text-opacity: 1;
  color: rgb(185 28 28/var(--tw-text-opacity))
}

.tw-text-slate-700 {
  --tw-text-opacity: 1;
  color: rgb(51 65 85/var(--tw-text-opacity))
}

.tw-text-slate-900 {
  --tw-text-opacity: 1;
  color: rgb(15 23 42/var(--tw-text-opacity))
}

.tw-text-success-400 {
  --tw-text-opacity: 1;
  color: rgb(50 202 91/var(--tw-text-opacity))
}

.tw-text-success-500 {
  --tw-text-opacity: 1;
  color: rgb(0 168 62/var(--tw-text-opacity))
}

.tw-text-success-700 {
  --tw-text-opacity: 1;
  color: rgb(0 120 68/var(--tw-text-opacity))
}

.tw-text-success-800 {
  --tw-text-opacity: 1;
  color: rgb(0 97 64/var(--tw-text-opacity))
}

.tw-text-warning-300 {
  --tw-text-opacity: 1;
  color: rgb(255 238 132/var(--tw-text-opacity))
}

.tw-text-warning-400 {
  --tw-text-opacity: 1;
  color: rgb(255 232 102/var(--tw-text-opacity))
}

.tw-text-warning-500 {
  --tw-text-opacity: 1;
  color: rgb(255 221 51/var(--tw-text-opacity))
}

.tw-text-warning-600 {
  --tw-text-opacity: 1;
  color: rgb(219 185 37/var(--tw-text-opacity))
}

.tw-text-warning-800 {
  --tw-text-opacity: 1;
  color: rgb(147 119 16/var(--tw-text-opacity))
}

.tw-text-warning-900 {
  --tw-text-opacity: 1;
  color: rgb(122 95 9/var(--tw-text-opacity))
}

.tw-text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255/var(--tw-text-opacity))
}

.tw-text-yellow-400 {
  --tw-text-opacity: 1;
  color: rgb(250 204 21/var(--tw-text-opacity))
}

.tw-text-yellow-500 {
  --tw-text-opacity: 1;
  color: rgb(234 179 8/var(--tw-text-opacity))
}

.tw-text-opacity-40 {
  --tw-text-opacity: 0.4
}

.tw-text-opacity-70 {
  --tw-text-opacity: 0.7
}

.\!tw-underline {
  -webkit-text-decoration-line: underline !important;
  text-decoration-line: underline !important
}

.tw-underline {
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline
}

.tw-line-through {
  -webkit-text-decoration-line: line-through;
  text-decoration-line: line-through
}

.tw-no-underline {
  -webkit-text-decoration-line: none;
  text-decoration-line: none
}

.tw-decoration-primary-500 {
  -webkit-text-decoration-color: #4bcc00;
  text-decoration-color: #4bcc00
}

.tw-decoration-2 {
  text-decoration-thickness: 2px
}

.tw-underline-offset-1 {
  text-underline-offset: 1px
}

.tw-underline-offset-2 {
  text-underline-offset: 2px
}

.tw-placeholder-gray-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(148 163 184/var(--tw-placeholder-opacity))
}

.tw-placeholder-gray-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(148 163 184/var(--tw-placeholder-opacity))
}

.tw-placeholder-gray-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(148 163 184/var(--tw-placeholder-opacity))
}

.tw-opacity-0 {
  opacity: 0
}

.tw-opacity-100 {
  opacity: 1
}

.tw-opacity-50 {
  opacity: .5
}

.tw-opacity-70 {
  opacity: .7
}

.tw-opacity-75 {
  opacity: .75
}

.\!tw-shadow-inner {
  --tw-shadow: inset 0 2px 4px 0 rgb(0 0 0/0.05) !important;
  --tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color) !important;
  box-shadow: 0 0 transparent, 0 0 transparent, var(--tw-shadow) !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow) !important
}

.tw-shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0/0.1), 0 1px 2px -1px rgb(0 0 0/0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)
}

.tw-shadow,
.tw-shadow-\[inset_0_-1px_0_0_\#EFF2F5\] {
  box-shadow: 0 0 transparent, 0 0 transparent, var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow)
}

.tw-shadow-\[inset_0_-1px_0_0_\#EFF2F5\] {
  --tw-shadow: inset 0 -1px 0 0 #eff2f5;
  --tw-shadow-colored: inset 0 -1px 0 0 var(--tw-shadow-color)
}

.tw-shadow-\[rgba\(0\,0\,0\,0\.1\)_0px_1px_0px_0px\] {
  --tw-shadow: rgba(0, 0, 0, 0.1) 0px 1px 0px 0px;
  --tw-shadow-colored: 0px 1px 0px 0px var(--tw-shadow-color)
}

.tw-shadow-\[rgba\(0\,0\,0\,0\.1\)_0px_1px_0px_0px\],
.tw-shadow-dangerShadow {
  box-shadow: 0 0 transparent, 0 0 transparent, var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow)
}

.tw-shadow-dangerShadow {
  --tw-shadow: 0 4px 0 0 #d8252e;
  --tw-shadow-colored: 0 4px 0 0 var(--tw-shadow-color)
}

.tw-shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0/0.1), 0 4px 6px -4px rgb(0 0 0/0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)
}

.tw-shadow-lg,
.tw-shadow-md {
  box-shadow: 0 0 transparent, 0 0 transparent, var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow)
}

.tw-shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0/0.1), 0 2px 4px -2px rgb(0 0 0/0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color)
}

.tw-shadow-primaryShadow {
  --tw-shadow: 0 4px 0 0 #35af00;
  --tw-shadow-colored: 0 4px 0 0 var(--tw-shadow-color)
}

.tw-shadow-primaryShadow,
.tw-shadow-secondaryShadow {
  box-shadow: 0 0 transparent, 0 0 transparent, var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow)
}

.tw-shadow-secondaryShadow {
  --tw-shadow: 0 4px 0 0 #cbd5e1;
  --tw-shadow-colored: 0 4px 0 0 var(--tw-shadow-color)
}

.tw-shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0/0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color)
}

.tw-shadow-sm,
.tw-shadow-xl {
  box-shadow: 0 0 transparent, 0 0 transparent, var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow)
}

.tw-shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0/0.1), 0 8px 10px -6px rgb(0 0 0/0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color)
}

.tw-ring-0 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color)
}

.tw-ring-0,
.tw-ring-1 {
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 transparent;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 transparent)
}

.tw-ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)
}

.tw-ring-2 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 transparent;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 transparent)
}

.tw-ring-inset {
  --tw-ring-inset: inset
}

.\!tw-ring-primary-400 {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(128 224 56/var(--tw-ring-opacity)) !important
}

.\!tw-ring-primary-500 {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(75 204 0/var(--tw-ring-opacity)) !important
}

.tw-ring-black {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(0 0 0/var(--tw-ring-opacity))
}

.tw-ring-danger-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 58 51/var(--tw-ring-opacity))
}

.tw-ring-gray-200 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(239 242 245/var(--tw-ring-opacity))
}

.tw-ring-opacity-12 {
  --tw-ring-opacity: .12
}

.tw-ring-offset-0 {
  --tw-ring-offset-width: 0px
}

.tw-drop-shadow-geckoguide {
  --tw-drop-shadow: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.16))
}

.tw-drop-shadow-geckoguide,
.tw-drop-shadow-lg {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}

.tw-drop-shadow-lg {
  --tw-drop-shadow: drop-shadow(0 10px 8px rgb(0 0 0/0.04)) drop-shadow(0 4px 3px rgb(0 0 0/0.1))
}

.tw-filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}

.tw-transition {
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-duration: .15s
}

.tw-transition-\[height\] {
  transition-property: height;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-duration: .15s
}

.tw-transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-duration: .15s
}

.tw-transition-colors {
  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-duration: .15s
}

.tw-transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-duration: .15s
}

.tw-transition-shadow {
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-duration: .15s
}

.tw-transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-duration: .15s
}

.tw-duration-100 {
  transition-duration: .1s
}

.tw-duration-150 {
  transition-duration: .15s
}

.tw-duration-200 {
  transition-duration: .2s
}

.tw-duration-300 {
  transition-duration: .3s
}

.tw-duration-75 {
  transition-duration: 75ms
}

.tw-ease-in {
  transition-timing-function: cubic-bezier(.4, 0, 1, 1)
}

.tw-ease-in-out {
  transition-timing-function: cubic-bezier(.4, 0, .2, 1)
}

.tw-ease-out {
  transition-timing-function: cubic-bezier(0, 0, .2, 1)
}

.\[mask-image\:_linear-gradient\(to_right\2c transparent_0\2c _black_128px\2c _black_calc\(100\%-200px\)\2c transparent_100\%\)\] {
  -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 128px, #000 calc(100% - 200px), transparent);
  mask-image: linear-gradient(90deg, transparent 0, #000 128px, #000 calc(100% - 200px), transparent)
}

.\[overflow-wrap\:anywhere\] {
  overflow-wrap: anywhere
}

html {
  position: relative;
  min-height: 100%
}

body {
  font-size: 13px;
  line-height: 1.425;
  display: flex;
  flex-direction: column;
  margin: 0;
  font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol
}

body.tw-dark {
  --tw-bg-opacity: 1;
  background-color: rgb(13 18 23/var(--tw-bg-opacity));
  font-family: Inter-Dark, Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol
}

[x-cloak] {
  display: none !important
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto
}

@media(min-width:640px) {
  .container {
    max-width: 600px
  }
}

@media(min-width:768px) {
  .container {
    max-width: 720px
  }
}

@media(min-width:1024px) {
  .container {
    max-width: 992px
  }
}

@media(min-width:1200px) {
  .container {
    max-width: 1300px;
    width: 100%
  }
}

body.gecko-modal-open,
html.gecko-modal-open {
  overflow: hidden
}

nav[aria-label=Breadcrumbs][data-view-component=true] ol {
  padding-left: 0
}

.auth-modal-tnc a>span {
  --tw-text-opacity: 1;
  color: rgb(100 116 139/var(--tw-text-opacity))
}

.auth-modal-tnc a>span:hover {
  --tw-text-opacity: 1;
  color: rgb(75 204 0/var(--tw-text-opacity))
}

:is(.tw-dark .auth-modal-tnc a>span) {
  --tw-text-opacity: 1;
  color: rgb(158 176 199/var(--tw-text-opacity))
}

:is(.tw-dark .auth-modal-tnc a>span:hover) {
  --tw-text-opacity: 1;
  color: rgb(128 224 56/var(--tw-text-opacity))
}

.fade-enter {
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-duration: .3s
}

.fade-enter-start {
  opacity: 0
}

.fade-enter-end {
  opacity: 1
}

.fade-leave {
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-duration: .3s
}

.fade-leave-start {
  opacity: 1
}

.fade-leave-end {
  opacity: 0
}

.search-container #search-backdrop {
  z-index: 1119
}

.search-container .search-results {
  color: #6b7280;
  position: absolute;
  background-color: #fff;
  z-index: 1120;
  overflow-y: hidden;
  border: 1px solid rgba(0, 0, 0, .05)
}

.search-container .search-results::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 6px
}

.search-container .search-results::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgba(0, 0, 0, .5);
  -webkit-box-shadow: 0 0 1px hsla(0, 0%, 100%, .5)
}

.search-container .search-results li.gt-tokens-list:hover {
  background-color: #fff;
  color: #4bcc00
}

@media(min-width:1200px) {
  .search-container .search-results li.search-selected {
    --tw-bg-opacity: 1;
    background-color: rgb(241 245 249/var(--tw-bg-opacity));
    border-radius: .5rem;
    color: #4bcc00
  }
}

.search-container .search-results li {
  cursor: pointer
}

@media(max-width:1199px) {
  .search-container .search-results {
    top: -7px;
    border: none
  }
}

.search-container .search-results .search-results-box {
  height: 35rem
}

.search-container .search-results .search-results-box .results-item a {
  --tw-text-opacity: 1;
  color: rgb(51 65 85/var(--tw-text-opacity))
}

:is(.tw-dark .search-container .search-results .search-results-box .results-item a) {
  --tw-text-opacity: 1;
  color: rgb(158 176 199/var(--tw-text-opacity))
}

@media(max-width:1199px) {
  .search-container .search-results .search-results-box {
    overflow-y: auto;
    min-height: 100vh;
    min-height: 100dvh;
    padding-bottom: 40dvh
  }
}

.search-container .search-overlay {
  pointer-events: none;
  background-color: #fff
}

.search-container .search-input input:focus+.search-overlay {
  display: none
}

.search-container .search-input {
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 400;
  height: 40px;
  background-color: #fff
}

.search-container .search-input input:focus {
  box-shadow: none !important
}

.search-container .search-input input::-moz-placeholder {
  color: #8e8e8e !important
}

.search-container .search-input input:-ms-input-placeholder {
  color: #8e8e8e !important
}

.search-container .search-input input::placeholder {
  color: #8e8e8e !important
}

.tw-dark .search-input-dark {
  --tw-bg-opacity: 1;
  background-color: rgb(13 18 23/var(--tw-bg-opacity))
}

@media (min-width:1200px) {
  .tw-dark .search-input-dark {
    --tw-bg-opacity: 1;
    background-color: rgb(27 35 45/var(--tw-bg-opacity))
  }
}

.tw-dark .search-container .search-results,
.tw-dark .search-overlay {
  --tw-bg-opacity: 1;
  background-color: rgb(13 18 23/var(--tw-bg-opacity))
}

.tw-dark .search-container .search-results {
  color: hsla(0, 0%, 100%, .6);
  border: 1px solid hsla(0, 0%, 100%, .12)
}

@media (min-width:1200px) {
  .tw-dark .search-container .search-results {
    --tw-bg-opacity: 1;
    background-color: rgb(27 35 45/var(--tw-bg-opacity))
  }

  .tw-dark .search-container .search-results li.search-selected {
    --tw-bg-opacity: 1;
    background-color: rgb(33 45 59/var(--tw-bg-opacity));
    border-radius: .5rem
  }
}

.tw-dark .search-container .search-results li.gt-tokens-list:hover {
  background-color: #4d4d4d;
  color: #fff
}

@media(max-width:1200px) {
  .tw-dark .search-container .search-results {
    border: none
  }
}

.tw-dark .search-container .mobile-results {
  --tw-bg-opacity: 1;
  background-color: rgb(13 18 23/var(--tw-bg-opacity))
}

.tw-dark .search-container .mobile-results hr {
  border: .5px solid #636363
}

.tw-dark .search-container .search-input {
  color: #fff
}

.tw-dark .search-container .search-input input::-moz-placeholder {
  color: #bebebe !important
}

.tw-dark .search-container .search-input input:-ms-input-placeholder {
  color: #bebebe !important
}

.tw-dark .search-container .search-input input::placeholder {
  color: #bebebe !important
}

@media(max-width:1199px) {

  body.search-popup-open,
  body.searchv2-popup-open,
  html.search-popup-open,
  html.searchv2-popup-open {
    overflow: hidden;
    position: relative;
    height: 100%
  }
}

.gecko-chip-fill {
  cursor: pointer;
  --tw-bg-opacity: 1;
  background-color: rgb(239 242 245/var(--tw-bg-opacity))
}

.gecko-chip-fill:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(203 213 225/var(--tw-bg-opacity))
}

.gecko-chip-fill:disabled {
  --tw-bg-opacity: 1;
  background-color: rgb(239 242 245/var(--tw-bg-opacity))
}

:is(.tw-dark .gecko-chip-fill) {
  --tw-bg-opacity: 1;
  background-color: rgb(33 45 59/var(--tw-bg-opacity))
}

:is(.tw-dark .gecko-chip-fill:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(56 74 97/var(--tw-bg-opacity))
}

:is(.tw-dark .gecko-chip-fill:disabled) {
  --tw-bg-opacity: 1;
  background-color: rgb(33 45 59/var(--tw-bg-opacity))
}

.gecko-chip-fill.selected {
  cursor: default !important;
  --tw-bg-opacity: 1 !important;
  background-color: rgb(232 252 201/var(--tw-bg-opacity)) !important
}

:is(.tw-dark .gecko-chip-fill.selected) {
  background-color: rgb(128 224 56/.1) !important
}

.gecko-chip-text {
  display: flex;
  align-items: center;
  grid-column-gap: .25rem;
  -moz-column-gap: .25rem;
  column-gap: .25rem;
  --tw-text-opacity: 1;
  color: rgb(15 23 42/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-chip-text) {
  --tw-text-opacity: 1;
  color: rgb(223 229 236/var(--tw-text-opacity))
}

.gecko-chip-text.selected {
  --tw-text-opacity: 1;
  color: rgb(35 146 0/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-chip-text.selected) {
  --tw-text-opacity: 1;
  color: rgb(128 224 56/var(--tw-text-opacity))
}

button:disabled .gecko-chip-text {
  --tw-text-opacity: 1 !important;
  color: rgb(148 163 184/var(--tw-text-opacity)) !important
}

.gecko-chip-text img {
  height: 1rem;
  width: 1rem
}

.gecko-chip-icon .selected {
  cursor: pointer;
  --tw-text-opacity: 1;
  color: rgb(35 146 0/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-chip-icon .selected) {
  --tw-text-opacity: 1;
  color: rgb(128 224 56/var(--tw-text-opacity))
}

span[data-percent-change-target=percent],
span[data-price-target=price] {
  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-duration: .15s
}

span[data-percent-change-target=percent] {
  white-space: nowrap
}

.gecko-up {
  --tw-text-opacity: 1;
  color: rgb(0 168 62/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-up) {
  --tw-text-opacity: 1;
  color: rgb(50 202 91/var(--tw-text-opacity))
}

.gecko-down {
  --tw-text-opacity: 1;
  color: rgb(255 58 51/var(--tw-text-opacity))
}

.gecko-flash-container {
  margin-top: .25rem;
  margin-bottom: .5rem;
  display: flex;
  height: -moz-fit-content;
  height: fit-content;
  width: 100%;
  flex-direction: column;
  grid-row-gap: .25rem;
  row-gap: .25rem
}

@media (min-width:768px) {
  .gecko-flash-container {
    margin-bottom: 1.25rem
  }
}

.gecko-flash-container>.gecko-flash {
  position: relative;
  display: flex;
  grid-column-gap: .5rem;
  -moz-column-gap: .5rem;
  column-gap: .5rem;
  border-radius: .5rem;
  padding: 1rem;
  font-size: .875rem;
  line-height: 1.25rem;
  font-weight: 500
}

.gecko-flash-container>.gecko-flash.notice,
.gecko-flash-container>.gecko-flash.success {
  --tw-bg-opacity: 1;
  background-color: rgb(228 250 227/var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(0 97 64/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-flash-container>.gecko-flash.notice),
:is(.tw-dark .gecko-flash-container>.gecko-flash.success) {
  background-color: rgb(50 202 91/.1);
  --tw-text-opacity: 1;
  color: rgb(0 168 62/var(--tw-text-opacity))
}

.gecko-flash-container>.gecko-flash.notice .close,
.gecko-flash-container>.gecko-flash.notice:before,
.gecko-flash-container>.gecko-flash.success .close,
.gecko-flash-container>.gecko-flash.success:before {
  --tw-text-opacity: 1;
  color: rgb(50 202 91/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-flash-container>.gecko-flash.notice):before,
:is(.tw-dark .gecko-flash-container>.gecko-flash.notice .close),
:is(.tw-dark .gecko-flash-container>.gecko-flash.success):before,
:is(.tw-dark .gecko-flash-container>.gecko-flash.success .close) {
  --tw-text-opacity: 1;
  color: rgb(91 228 115/var(--tw-text-opacity))
}

.gecko-flash-container>.gecko-flash.notice:before,
.gecko-flash-container>.gecko-flash.success:before {
  content: ""
}

.gecko-flash-container>.gecko-flash.alert,
.gecko-flash-container>.gecko-flash.danger,
.gecko-flash-container>.gecko-flash.error {
  --tw-bg-opacity: 1;
  background-color: rgb(255 240 232/var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(122 9 44/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-flash-container>.gecko-flash.alert),
:is(.tw-dark .gecko-flash-container>.gecko-flash.danger),
:is(.tw-dark .gecko-flash-container>.gecko-flash.error) {
  background-color: rgb(255 120 102/.1);
  --tw-text-opacity: 1;
  color: rgb(255 58 51/var(--tw-text-opacity))
}

.gecko-flash-container>.gecko-flash.alert .close,
.gecko-flash-container>.gecko-flash.alert:before,
.gecko-flash-container>.gecko-flash.danger .close,
.gecko-flash-container>.gecko-flash.danger:before,
.gecko-flash-container>.gecko-flash.error .close,
.gecko-flash-container>.gecko-flash.error:before {
  --tw-text-opacity: 1;
  color: rgb(255 58 51/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-flash-container>.gecko-flash.alert):before,
:is(.tw-dark .gecko-flash-container>.gecko-flash.alert .close),
:is(.tw-dark .gecko-flash-container>.gecko-flash.danger):before,
:is(.tw-dark .gecko-flash-container>.gecko-flash.danger .close),
:is(.tw-dark .gecko-flash-container>.gecko-flash.error):before,
:is(.tw-dark .gecko-flash-container>.gecko-flash.error .close) {
  --tw-text-opacity: 1;
  color: rgb(255 157 132/var(--tw-text-opacity))
}

.gecko-flash-container>.gecko-flash.alert:before,
.gecko-flash-container>.gecko-flash.danger:before,
.gecko-flash-container>.gecko-flash.error:before {
  content: ""
}

.gecko-flash-container>.gecko-flash.warning {
  --tw-bg-opacity: 1;
  background-color: rgb(255 251 214/var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(122 95 9/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-flash-container>.gecko-flash.warning) {
  background-color: rgb(255 232 102/.1);
  --tw-text-opacity: 1;
  color: rgb(255 221 51/var(--tw-text-opacity))
}

.gecko-flash-container>.gecko-flash.warning .close,
.gecko-flash-container>.gecko-flash.warning:before {
  --tw-text-opacity: 1;
  color: rgb(219 185 37/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-flash-container>.gecko-flash.warning):before,
:is(.tw-dark .gecko-flash-container>.gecko-flash.warning .close) {
  --tw-text-opacity: 1;
  color: rgb(255 238 132/var(--tw-text-opacity))
}

.gecko-flash-container>.gecko-flash.warning:before {
  content: ""
}

.gecko-flash-container>.gecko-flash.info {
  --tw-bg-opacity: 1;
  background-color: rgb(214 253 255/var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(9 57 122/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-flash-container>.gecko-flash.info) {
  background-color: rgb(102 217 255/.1)
}

.gecko-flash-container>.gecko-flash.info .close,
.gecko-flash-container>.gecko-flash.info:before,
:is(.tw-dark .gecko-flash-container>.gecko-flash.info) {
  --tw-text-opacity: 1;
  color: rgb(51 192 255/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-flash-container>.gecko-flash.info):before,
:is(.tw-dark .gecko-flash-container>.gecko-flash.info .close) {
  --tw-text-opacity: 1;
  color: rgb(102 217 255/var(--tw-text-opacity))
}

.gecko-flash-container>.gecko-flash.info:before {
  content: ""
}

.gecko-flash-container>.gecko-flash .close,
.gecko-flash-container>.gecko-flash:before {
  font-family: Font Awesome\ 6 Pro;
  font-weight: 700;
  line-height: 1.5
}

.gecko-flash-container>.gecko-flash:before {
  display: block
}

.gecko-flash-container>.gecko-flash .close {
  cursor: pointer
}

.nav-backdrop {
  z-index: 1108;
  position: absolute;
  top: 3rem;
  left: 0;
  height: 100vh;
  width: 100vw;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity))
}

:is(.tw-dark .nav-backdrop) {
  --tw-bg-opacity: 1;
  background-color: rgb(13 18 23/var(--tw-bg-opacity))
}

@media (min-width:1200px) {
  .nav-backdrop {
    display: none
  }
}

.nav-wrapper {
  z-index: 1109;
  position: absolute;
  left: 0;
  right: 0;
  flex-direction: column;
  padding-bottom: 2rem
}

@media (min-width:1200px) {
  .nav-wrapper {
    position: static;
    flex: 1 1;
    flex-direction: row;
    align-items: center;
    padding-bottom: 0
  }
}

@media screen and (max-width:1199px) {
  .nav-wrapper {
    top: 3.5rem;
    max-height: calc(100vh - 6rem);
    max-height: calc(100dvh - 6rem);
    overflow-y: auto
  }
}

.nav-label {
  flex: 1 1;
  padding-top: 1rem;
  padding-bottom: 1rem
}

@media screen and (min-width:1200px) {
  .nav-label {
    padding-top: 0;
    padding-bottom: .5rem;
    margin-bottom: -.5rem
  }
}

.nav-items {
  position: relative;
  width: 100%
}

@media (min-width:1200px) {
  .nav-items {
    position: absolute;
    top: 1.25rem;
    left: 0;
    width: 16rem
  }
}

.nav-items a {
  -webkit-text-decoration-line: none;
  text-decoration-line: none
}

@media screen and (max-width:1199px) {
  .nav-items {
    box-shadow: none;
    padding: 0;
    margin: 0;
    max-height: 0;
    overflow-y: hidden;
    transition: max-height .3s, margin .4s
  }

  :is(.tw-dark .nav-items) {
    --tw-bg-opacity: 1 !important;
    background-color: rgb(13 18 23/var(--tw-bg-opacity)) !important
  }

  .nav-items.open {
    margin-top: .5rem
  }
}

@media screen and (min-width:1200px) {
  .nav-items {
    max-height: unset !important
  }
}

@media(max-width:1199px) {
  .navbar-popup-open {
    overflow: hidden;
    position: relative;
    height: 100%
  }
}

#announcement a,
#top-announcement-header a {
  --tw-text-opacity: 1;
  color: rgb(75 204 0/var(--tw-text-opacity))
}

#announcement a:hover,
#top-announcement-header a:hover {
  --tw-text-opacity: 1;
  color: rgb(53 175 0/var(--tw-text-opacity))
}

:is(.tw-dark #announcement a),
:is(.tw-dark #top-announcement-header a) {
  --tw-text-opacity: 1;
  color: rgb(128 224 56/var(--tw-text-opacity))
}

:is(.tw-dark #announcement a:hover),
:is(.tw-dark #top-announcement-header a:hover) {
  --tw-text-opacity: 1;
  color: rgb(53 175 0/var(--tw-text-opacity))
}

#announcement b,
#top-announcement-header b {
  font-weight: 600 !important
}

.sortable thead th:not(.no-sort) {
  cursor: pointer
}

.sortable thead th:not(.no-sort):after,
.sortable thead th:not(.no-sort):before {
  transition: color .1s ease-in-out;
  font-size: 1.2em;
  color: transparent
}

.sortable thead th:not(.no-sort):after {
  margin-left: 3px;
  content: "▾"
}

.sortable thead th:not(.no-sort):hover:after {
  color: inherit
}

.sortable thead th:not(.no-sort)[aria-sort=descending]:after {
  color: inherit;
  content: "▾"
}

.sortable thead th:not(.no-sort)[aria-sort=ascending]:after {
  color: inherit;
  content: "▴";
  border: 0
}

.sortable thead th:not(.no-sort).indicator-left:after {
  content: ""
}

.sortable thead th:not(.no-sort).indicator-left:before {
  margin-right: 3px;
  content: "▾"
}

.sortable thead th:not(.no-sort).indicator-left:hover:before {
  color: inherit
}

.sortable thead th:not(.no-sort).indicator-left[aria-sort=descending]:before {
  color: inherit;
  content: "▾"
}

.sortable thead th:not(.no-sort).indicator-left[aria-sort=ascending]:before {
  color: inherit;
  content: "▴"
}

td.tw-sticky {
  z-index: 1
}

table .gecko-compare-highlight-start {
  box-shadow: 0 0 0 1px #4bcc00
}

table .gecko-compare-highlight-end,
table .gecko-compare-highlight-x {
  position: relative
}

table .gecko-compare-highlight-end:before,
table .gecko-compare-highlight-x:before {
  content: "";
  position: absolute;
  top: 0;
  height: calc(100% + 1px);
  left: -1px;
  width: calc(100% + 2px);
  border-left-width: 2px;
  border-right-width: 2px;
  --tw-border-opacity: 1;
  border-color: rgb(75 204 0/var(--tw-border-opacity))
}

table .gecko-compare-highlight-end:before {
  height: 100%;
  border-bottom-right-radius: .5rem;
  border-bottom-left-radius: .5rem;
  border-bottom-width: 2px
}

.gecko-table-centered td,
.gecko-table-centered th {
  text-align: center
}

.gecko-override-table table,
table.gecko-override-table {
  margin-top: 1rem
}

.gecko-override-table table td,
.gecko-override-table table th,
table.gecko-override-table td,
table.gecko-override-table th {
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: .75rem;
  vertical-align: top;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-text-opacity: 1;
  color: rgb(100 116 139/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-override-table table td),
:is(.tw-dark .gecko-override-table table th),
:is(.tw-dark table.gecko-override-table td),
:is(.tw-dark table.gecko-override-table th) {
  --tw-text-opacity: 1;
  color: rgb(158 176 199/var(--tw-text-opacity))
}

.gecko-tooltip {
  z-index: 10000;
  display: inline-block;
  max-width: 20rem;
  align-items: center;
  white-space: normal;
  overflow-wrap: break-word;
  border-radius: .5rem;
  padding: 1rem;
  text-align: left;
  font-size: .875rem;
  line-height: 1.25rem;
  --tw-drop-shadow: drop-shadow(0 20px 13px rgb(0 0 0/0.03)) drop-shadow(0 8px 5px rgb(0 0 0/0.08));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}

.gecko-tooltip.gecko-tooltip-short {
  --tw-bg-opacity: 1;
  background-color: rgb(13 18 23/var(--tw-bg-opacity));
  padding: .25rem .5rem;
  --tw-text-opacity: 1;
  color: rgb(223 229 236/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-tooltip.gecko-tooltip-short) {
  --tw-bg-opacity: 1;
  background-color: rgb(27 35 45/var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(158 176 199/var(--tw-text-opacity))
}

.gecko-tooltip.gecko-tooltip-long {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity));
  padding: 1rem;
  font-weight: 400;
  --tw-text-opacity: 1;
  color: rgb(100 116 139/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-tooltip.gecko-tooltip-long) {
  --tw-bg-opacity: 1;
  background-color: rgb(27 35 45/var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(158 176 199/var(--tw-text-opacity))
}

.gecko-tooltip.gecko-tooltip-simple {
  border-radius: .25rem;
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59/var(--tw-bg-opacity));
  padding: .25rem .5rem;
  font-size: .75rem;
  line-height: 1rem;
  font-weight: 400;
  --tw-text-opacity: 1;
  color: rgb(255 255 255/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-tooltip.gecko-tooltip-simple) {
  --tw-bg-opacity: 1;
  background-color: rgb(33 45 59/var(--tw-bg-opacity))
}

.gecko-tooltip .gecko-tooltip-content {
  font-weight: 400
}

.gecko-tooltip div[data-popper-arrow],
.gecko-tooltip div[data-popper-arrow]:before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -4px rgba(0, 0, 0, .1)
}

.gecko-tooltip div[data-popper-arrow] {
  visibility: hidden
}

.gecko-tooltip div[data-popper-arrow]:before {
  visibility: visible;
  content: "";
  transform: rotate(45deg)
}

.gecko-tooltip[data-popper-placement^=top]>div[data-popper-arrow] {
  bottom: -4px
}

.gecko-tooltip[data-popper-placement^=top]>div[data-popper-arrow]:before {
  left: 0
}

.gecko-tooltip[data-popper-placement^=bottom]>div[data-popper-arrow] {
  top: -4px
}

.gecko-tooltip[data-popper-placement^=bottom]>div[data-popper-arrow]:before {
  left: 0
}

.gecko-tooltip[data-popper-placement^=left]>div[data-popper-arrow] {
  right: 0
}

.gecko-tooltip[data-popper-placement^=left]>div[data-popper-arrow]:before {
  left: 4px
}

.gecko-tooltip[data-popper-placement^=right]>div[data-popper-arrow] {
  left: -7px
}

.gecko-tooltip[data-popper-placement^=right]>div[data-popper-arrow]:before {
  left: 3px
}

:is(.tw-dark .gecko-tooltip-short) {
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(33 45 59/var(--tw-border-opacity))
}

:is(.tw-dark .gecko-tooltip-short[data-popper-placement^=top]>div[data-popper-arrow]):before {
  border-right-width: 1px;
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(33 45 59/var(--tw-border-opacity))
}

:is(.tw-dark .gecko-tooltip-short[data-popper-placement^=bottom]>div[data-popper-arrow]):before {
  border-left-width: 1px;
  border-top-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(33 45 59/var(--tw-border-opacity))
}

:is(.tw-dark .gecko-tooltip-short[data-popper-placement^=left]>div[data-popper-arrow]):before {
  border-right-width: 1px;
  border-top-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(33 45 59/var(--tw-border-opacity))
}

:is(.tw-dark .gecko-tooltip-short[data-popper-placement^=right]>div[data-popper-arrow]):before {
  border-left-width: 1px;
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(33 45 59/var(--tw-border-opacity))
}

.gecko-tooltip-extra-padding:before {
  position: absolute;
  --tw-content: "";
  content: var(--tw-content)
}

.gecko-tooltip-extra-padding[data-popper-placement^=top]:before {
  bottom: -8px;
  inset-inline-start: 37%;
  height: .5rem;
  content: var(--tw-content);
  width: 5rem
}

.gecko-tooltip-extra-padding[data-popper-placement^=bottom]:before {
  top: -8px;
  inset-inline-start: 37%;
  height: .5rem;
  content: var(--tw-content);
  width: 5rem
}

.gecko-tooltip-extra-padding[data-popper-placement^=left]:before {
  right: -8px;
  top: 30%;
  height: 5rem;
  content: var(--tw-content);
  width: .5rem
}

.gecko-tooltip-extra-padding[data-popper-placement^=right]:before {
  left: -8px;
  top: 30%;
  height: 5rem;
  content: var(--tw-content);
  width: .5rem
}

@media screen and (max-width:640px) {

  .gecko-pagination-mobile-full.gecko-pagination,
  .gecko-pagination-mobile-full .gecko-pagination {
    flex-wrap: wrap;
    grid-row-gap: .5rem;
    row-gap: .5rem
  }

  .gecko-pagination-mobile-full .gecko-pagination-nav {
    order: 1;
    display: inline-flex;
    flex-basis: 100%;
    justify-content: center
  }

  .gecko-pagination-mobile-full .gecko-pagination-results {
    order: 2;
    display: inline-flex;
    flex-basis: 50%;
    justify-content: flex-start
  }

  .gecko-pagination-mobile-full .gecko-pagination-selector {
    order: 3;
    display: inline-flex;
    flex-basis: 50%;
    justify-content: flex-end
  }
}

.gecko-progress-indicator-step-active .gecko-progress-indicator-step-bar {
  --tw-bg-opacity: 1;
  background-color: rgb(75 204 0/var(--tw-bg-opacity))
}

:is(.tw-dark .gecko-progress-indicator-step-active .gecko-progress-indicator-step-bar) {
  --tw-bg-opacity: 1;
  background-color: rgb(128 224 56/var(--tw-bg-opacity))
}

.gecko-progress-indicator-step-active .gecko-progress-indicator-step-title {
  --tw-text-opacity: 1;
  color: rgb(75 204 0/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-progress-indicator-step-active .gecko-progress-indicator-step-title) {
  --tw-text-opacity: 1;
  color: rgb(128 224 56/var(--tw-text-opacity))
}

.gecko-progress-indicator .active {
  --tw-bg-opacity: 1;
  background-color: rgb(75 204 0/var(--tw-bg-opacity))
}

:is(.tw-dark .gecko-progress-indicator .active) {
  --tw-bg-opacity: 1;
  background-color: rgb(128 224 56/var(--tw-bg-opacity))
}

a[data-view-component=true][role=button][disabled=disabled],
a[data-view-component=true][role=button][disabled=true],
button[data-view-component=true]:disabled {
  pointer-events: none;
  opacity: .5
}

.gecko-button-group-item {
  display: inline-flex;
  align-items: center;
  border-radius: .375rem;
  background-color: transparent;
  padding: .25rem .625rem
}

.gecko-button-group-item:focus {
  outline: 2px solid transparent;
  outline-offset: 2px
}

.gecko-button-group-item.selected {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity));
  --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0/0.1)) drop-shadow(0 1px 1px rgb(0 0 0/0.06));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}

:is(.tw-dark .gecko-button-group-item.selected) {
  --tw-bg-opacity: 1;
  background-color: rgb(13 18 23/var(--tw-bg-opacity))
}

.gecko-button-group-item.selected>span {
  --tw-text-opacity: 1;
  color: rgb(15 23 42/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-button-group-item.selected>span) {
  --tw-text-opacity: 1;
  color: rgb(223 229 236/var(--tw-text-opacity))
}

.gecko-button-group-item>span {
  --tw-text-opacity: 1;
  color: rgb(71 85 105/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-button-group-item>span) {
  --tw-text-opacity: 1;
  color: rgb(158 176 199/var(--tw-text-opacity))
}

.gecko-button-group-item:hover>span {
  --tw-text-opacity: 1;
  color: rgb(30 41 59/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-button-group-item:hover>span) {
  --tw-text-opacity: 1;
  color: rgb(223 229 236/var(--tw-text-opacity))
}

.gecko-button-dropdown-open.gecko-button-dropdown-primary {
  --tw-translate-y: 0.25rem !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
  --tw-bg-opacity: 1 !important;
  background-color: rgb(53 175 0/var(--tw-bg-opacity)) !important;
  --tw-shadow: 0 2.5px 0 0 #239200 !important;
  --tw-shadow-colored: 0 2.5px 0 0 var(--tw-shadow-color) !important;
  box-shadow: 0 0 transparent, 0 0 transparent, var(--tw-shadow) !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow) !important
}

:is(.tw-dark .gecko-button-dropdown-open.gecko-button-dropdown-primary) {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(166 239 95/var(--tw-bg-opacity)) !important
}

.gecko-button-dropdown-open.gecko-button-dropdown-secondary {
  --tw-translate-y: 0.25rem !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
  --tw-bg-opacity: 1 !important;
  background-color: rgb(241 245 249/var(--tw-bg-opacity)) !important;
  --tw-shadow: 0 2.5px 0 0 #94a3b8 !important;
  --tw-shadow-colored: 0 2.5px 0 0 var(--tw-shadow-color) !important
}

.gecko-button-dropdown-open.gecko-button-dropdown-secondary,
:is(.tw-dark .gecko-button-dropdown-open.gecko-button-dropdown-secondary) {
  box-shadow: 0 0 transparent, 0 0 transparent, var(--tw-shadow) !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow) !important
}

:is(.tw-dark .gecko-button-dropdown-open.gecko-button-dropdown-secondary) {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(33 45 59/var(--tw-bg-opacity)) !important;
  --tw-shadow: 0 2.5px 0 0 #384a61 !important;
  --tw-shadow-colored: 0 2.5px 0 0 var(--tw-shadow-color) !important
}

.gecko-tab-underline-item {
  cursor: pointer;
  white-space: nowrap;
  border-bottom-width: 2px;
  border-color: transparent;
  padding: .5rem 1rem
}

.gecko-tab-underline-item,
.gecko-tab-underline-item:hover {
  --tw-text-opacity: 1;
  color: rgb(100 116 139/var(--tw-text-opacity))
}

.gecko-tab-underline-item:hover {
  --tw-border-opacity: 1;
  border-color: rgb(203 213 225/var(--tw-border-opacity))
}

:is(.tw-dark .gecko-tab-underline-item),
:is(.tw-dark .gecko-tab-underline-item:hover) {
  --tw-text-opacity: 1;
  color: rgb(158 176 199/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-tab-underline-item:hover) {
  --tw-border-opacity: 1;
  border-color: rgb(56 74 97/var(--tw-border-opacity))
}

.gecko-tab-underline-item.selected {
  cursor: default !important;
  --tw-border-opacity: 1 !important;
  border-color: rgb(75 204 0/var(--tw-border-opacity)) !important;
  --tw-text-opacity: 1 !important;
  color: rgb(15 23 42/var(--tw-text-opacity)) !important
}

:is(.tw-dark .gecko-tab-underline-item.selected) {
  --tw-text-opacity: 1 !important;
  color: rgb(223 229 236/var(--tw-text-opacity)) !important
}

.gecko-tab-underline-vertical-item {
  margin-top: .375rem;
  margin-bottom: .375rem;
  cursor: pointer;
  white-space: nowrap;
  border-left-width: 2px;
  border-color: transparent;
  padding: .125rem .75rem;
  --tw-text-opacity: 1;
  color: rgb(100 116 139/var(--tw-text-opacity))
}

.gecko-tab-underline-vertical-item:hover {
  --tw-border-opacity: 1;
  border-color: rgb(203 213 225/var(--tw-border-opacity));
  --tw-text-opacity: 1;
  color: rgb(100 116 139/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-tab-underline-vertical-item),
:is(.tw-dark .gecko-tab-underline-vertical-item:hover) {
  --tw-text-opacity: 1;
  color: rgb(158 176 199/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-tab-underline-vertical-item:hover) {
  --tw-border-opacity: 1;
  border-color: rgb(56 74 97/var(--tw-border-opacity))
}

.gecko-tab-underline-vertical-item.selected {
  cursor: default;
  --tw-border-opacity: 1;
  border-color: rgb(75 204 0/var(--tw-border-opacity))
}

.gecko-tab-underline-vertical-item.selected>span {
  font-weight: 600;
  --tw-text-opacity: 1;
  color: rgb(15 23 42/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-tab-underline-vertical-item.selected>span) {
  --tw-text-opacity: 1;
  color: rgb(223 229 236/var(--tw-text-opacity))
}

.gecko-tab-chip-item {
  cursor: pointer;
  border-radius: .5rem;
  padding: .375rem .75rem;
  --tw-text-opacity: 1;
  color: rgb(100 116 139/var(--tw-text-opacity))
}

.gecko-tab-chip-item:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249/var(--tw-bg-opacity))
}

:is(.tw-dark .gecko-tab-chip-item) {
  --tw-text-opacity: 1;
  color: rgb(158 176 199/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-tab-chip-item:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(27 35 45/var(--tw-bg-opacity))
}

.gecko-tab-chip-item.selected {
  cursor: default !important;
  --tw-bg-opacity: 1 !important;
  background-color: rgb(232 252 201/var(--tw-bg-opacity)) !important;
  --tw-text-opacity: 1 !important;
  color: rgb(53 175 0/var(--tw-text-opacity)) !important
}

:is(.tw-dark .gecko-tab-chip-item.selected) {
  background-color: rgb(128 224 56/.1) !important;
  --tw-text-opacity: 1 !important;
  color: rgb(128 224 56/var(--tw-text-opacity)) !important
}

.gecko-checkbox:has(input:required) .gecko-checkbox-label:not(.gecko-hide-required):after,
.gecko-combo-label:not(.gecko-hide-required):has(~.gecko-combo-group input[type=hidden][required]):after,
.gecko-file-input-group:has(input:required) .gecko-file-input-label:not(.gecko-hide-required):after,
.gecko-input-label:not(.gecko-hide-required):has(~.gecko-input-group .gecko-input:required):after,
.gecko-select-label:not(.gecko-hide-required):has(~.gecko-select-group select[required]):after {
  content: " *";
  --tw-text-opacity: 1;
  color: rgb(255 58 51/var(--tw-text-opacity))
}

.gecko-file-input-label {
  display: block;
  --tw-text-opacity: 1;
  color: rgb(15 23 42/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-file-input-label) {
  --tw-text-opacity: 1;
  color: rgb(223 229 236/var(--tw-text-opacity))
}

.gecko-file-input {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: .5rem;
  --tw-text-opacity: 1;
  color: rgb(100 116 139/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-file-input) {
  --tw-text-opacity: 1;
  color: rgb(158 176 199/var(--tw-text-opacity))
}

.gecko-file-input::file-selector-button {
  display: none
}

.gecko-input-group {
  display: flex;
  width: 100%;
  grid-column-gap: .25rem;
  -moz-column-gap: .25rem;
  column-gap: .25rem;
  overflow: hidden;
  border-radius: .5rem;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity));
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 transparent;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 transparent);
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(239 242 245/var(--tw-ring-opacity))
}

.gecko-input-group:focus-within {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(75 204 0/var(--tw-ring-opacity))
}

:is(.tw-dark .gecko-input-group) {
  --tw-bg-opacity: 1;
  background-color: rgb(13 18 23/var(--tw-bg-opacity));
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(56 74 97/var(--tw-ring-opacity))
}

:is(.tw-dark .gecko-input-group:focus-within) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(128 224 56/var(--tw-ring-opacity))
}

.gecko-input-group.gecko-error {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 58 51/var(--tw-ring-opacity))
}

.gecko-input-group.gecko-error:focus-within {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(75 204 0/var(--tw-ring-opacity))
}

:is(.tw-dark .gecko-input-group.gecko-error) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 58 51/var(--tw-ring-opacity))
}

:is(.tw-dark .gecko-input-group.gecko-error:focus-within) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(128 224 56/var(--tw-ring-opacity))
}

.gecko-input-group .gecko-input {
  width: 100%;
  flex: 1 1;
  border-width: 0;
  background-color: transparent;
  padding: 0;
  --tw-text-opacity: 1;
  color: rgb(15 23 42/var(--tw-text-opacity))
}

.gecko-input-group .gecko-input::-moz-placeholder {
  --tw-text-opacity: 1;
  color: rgb(148 163 184/var(--tw-text-opacity))
}

.gecko-input-group .gecko-input:-ms-input-placeholder {
  --tw-text-opacity: 1;
  color: rgb(148 163 184/var(--tw-text-opacity))
}

.gecko-input-group .gecko-input::placeholder {
  --tw-text-opacity: 1;
  color: rgb(148 163 184/var(--tw-text-opacity))
}

.gecko-input-group .gecko-input:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 transparent;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 transparent)
}

.gecko-input-group .gecko-input:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px
}

:is(.tw-dark .gecko-input-group .gecko-input) {
  --tw-text-opacity: 1;
  color: rgb(223 229 236/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-input-group .gecko-input)::-moz-placeholder {
  --tw-text-opacity: 1;
  color: rgb(74 99 130/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-input-group .gecko-input):-ms-input-placeholder {
  --tw-text-opacity: 1;
  color: rgb(74 99 130/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-input-group .gecko-input)::placeholder {
  --tw-text-opacity: 1;
  color: rgb(74 99 130/var(--tw-text-opacity))
}

@media (min-width:1200px) {
  .gecko-input-group .gecko-input {
    font-size: .875rem;
    line-height: 1.25rem
  }
}

.gecko-input-group .gecko-input:disabled {
  width: 100%;
  flex: 1 1;
  border-width: 0;
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249/var(--tw-bg-opacity));
  padding: 0;
  color: rgb(15 23 42/.5)
}

.gecko-input-group .gecko-input:disabled::-moz-placeholder {
  color: rgb(148 163 184/.5)
}

.gecko-input-group .gecko-input:disabled:-ms-input-placeholder {
  color: rgb(148 163 184/.5)
}

.gecko-input-group .gecko-input:disabled::placeholder {
  color: rgb(148 163 184/.5)
}

.gecko-input-group .gecko-input:disabled:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 transparent;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 transparent)
}

.gecko-input-group .gecko-input:disabled:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px
}

:is(.tw-dark .gecko-input-group .gecko-input:disabled) {
  --tw-bg-opacity: 1;
  background-color: rgb(27 35 45/var(--tw-bg-opacity));
  color: rgb(74 99 130/.5)
}

:is(.tw-dark .gecko-input-group .gecko-input:disabled)::-moz-placeholder {
  color: rgb(74 99 130/.5)
}

:is(.tw-dark .gecko-input-group .gecko-input:disabled):-ms-input-placeholder {
  color: rgb(74 99 130/.5)
}

:is(.tw-dark .gecko-input-group .gecko-input:disabled)::placeholder {
  color: rgb(74 99 130/.5)
}

@media (min-width:1200px) {
  .gecko-input-group .gecko-input:disabled {
    font-size: .875rem;
    line-height: 1.25rem
  }
}

.gecko-input-group input.gecko-input {
  height: 3.25rem
}

.gecko-input-group input.gecko-input:first-child,
.gecko-input-group input.gecko-input:only-child {
  padding-left: .5rem
}

.gecko-input-group input.gecko-input:last-child,
.gecko-input-group input.gecko-input:only-child {
  padding-right: .5rem
}

.gecko-input-group input.gecko-input::-webkit-inner-spin-button,
.gecko-input-group input.gecko-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0
}

.gecko-input-group input.gecko-input[type=number] {
  -moz-appearance: textfield
}

.gecko-input-group textarea.gecko-input {
  margin: .5rem .25rem .25rem .5rem;
  min-height: 6.5rem
}

.gecko-input-label {
  margin-bottom: .375rem;
  display: block;
  --tw-text-opacity: 1;
  color: rgb(15 23 42/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-input-label) {
  --tw-text-opacity: 1;
  color: rgb(223 229 236/var(--tw-text-opacity))
}

.gecko-input.form-control {
  padding-left: .5rem;
  padding-right: .5rem
}

.gecko-required {
  margin-left: -.125rem;
  --tw-text-opacity: 1;
  color: rgb(255 58 51/var(--tw-text-opacity))
}

.gecko-select {
  display: flex;
  height: 3.25rem;
  width: 100%;
  min-width: 16rem;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  grid-column-gap: .25rem;
  -moz-column-gap: .25rem;
  column-gap: .25rem;
  overflow: hidden;
  border-radius: .5rem;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity));
  padding-left: .75rem;
  padding-right: .75rem;
  --tw-text-opacity: 1;
  color: rgb(15 23 42/var(--tw-text-opacity));
  outline-width: 0;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 transparent;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 transparent);
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(239 242 245/var(--tw-ring-opacity))
}

.gecko-select:focus-within {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(75 204 0/var(--tw-ring-opacity))
}

.gecko-select:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 252/var(--tw-bg-opacity))
}

:is(.tw-dark .gecko-select) {
  --tw-bg-opacity: 1;
  background-color: rgb(13 18 23/var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(223 229 236/var(--tw-text-opacity));
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(56 74 97/var(--tw-ring-opacity))
}

:is(.tw-dark .gecko-select:focus-within) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(128 224 56/var(--tw-ring-opacity))
}

:is(.tw-dark .gecko-select:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(33 45 59/var(--tw-bg-opacity))
}

.gecko-select.gecko-error {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 58 51/var(--tw-ring-opacity))
}

.gecko-select.gecko-error:focus-within {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(75 204 0/var(--tw-ring-opacity))
}

:is(.tw-dark .gecko-select.gecko-error) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 58 51/var(--tw-ring-opacity))
}

:is(.tw-dark .gecko-select.gecko-error:focus-within) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(128 224 56/var(--tw-ring-opacity))
}

.gecko-select-label {
  margin-bottom: .375rem;
  display: block;
  --tw-text-opacity: 1;
  color: rgb(15 23 42/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-select-label) {
  --tw-text-opacity: 1;
  color: rgb(223 229 236/var(--tw-text-opacity))
}

.gecko-select-input {
  width: 100%;
  flex: 1 1;
  border-width: 0;
  background-color: transparent;
  padding: 0;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-text-opacity: 1;
  color: rgb(15 23 42/var(--tw-text-opacity))
}

.gecko-select-input::-moz-placeholder {
  --tw-text-opacity: 1;
  color: rgb(148 163 184/var(--tw-text-opacity))
}

.gecko-select-input:-ms-input-placeholder {
  --tw-text-opacity: 1;
  color: rgb(148 163 184/var(--tw-text-opacity))
}

.gecko-select-input::placeholder {
  --tw-text-opacity: 1;
  color: rgb(148 163 184/var(--tw-text-opacity))
}

.gecko-select-input:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 transparent;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 transparent)
}

.gecko-select-input:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px
}

:is(.tw-dark .gecko-select-input) {
  --tw-text-opacity: 1;
  color: rgb(223 229 236/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-select-input)::-moz-placeholder {
  --tw-text-opacity: 1;
  color: rgb(74 99 130/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-select-input):-ms-input-placeholder {
  --tw-text-opacity: 1;
  color: rgb(74 99 130/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-select-input)::placeholder {
  --tw-text-opacity: 1;
  color: rgb(74 99 130/var(--tw-text-opacity))
}

@media (min-width:1200px) {
  .gecko-select-input {
    font-size: .875rem;
    line-height: 1.25rem
  }
}

.gecko-select-input::-moz-placeholder {
  font-size: .875rem;
  line-height: 1.25rem
}

.gecko-select-input:-ms-input-placeholder {
  font-size: .875rem;
  line-height: 1.25rem
}

.gecko-select-input::placeholder {
  font-size: .875rem;
  line-height: 1.25rem
}

.gecko-select-dropdown-loading,
.gecko-select-dropdown-message {
  padding: .75rem .5rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgb(100 116 139/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-select-dropdown-loading),
:is(.tw-dark .gecko-select-dropdown-message) {
  --tw-text-opacity: 1;
  color: rgb(158 176 199/var(--tw-text-opacity))
}

.gecko-select-dropdown {
  display: inline-block;
  text-align: left
}

.gecko-select-dropdown .gecko-select-dropdown-container,
.gecko-select-dropdown>div {
  width: 100%
}

.gecko-select-dropdown .gecko-select-dropdown-item {
  display: flex;
  cursor: pointer;
  align-items: center;
  border-radius: .5rem;
  padding: .75rem .5rem;
  font-size: .875rem;
  line-height: 1.25rem;
  font-weight: 600;
  --tw-text-opacity: 1;
  color: rgb(51 65 85/var(--tw-text-opacity))
}

.gecko-select-dropdown .gecko-select-dropdown-item:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249/var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(15 23 42/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-select-dropdown .gecko-select-dropdown-item) {
  --tw-text-opacity: 1;
  color: rgb(190 203 218/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-select-dropdown .gecko-select-dropdown-item:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(33 45 59/var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(223 229 236/var(--tw-text-opacity))
}

.gecko-select:has(select[disabled]) {
  pointer-events: none;
  cursor: default;
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249/var(--tw-bg-opacity))
}

:is(.tw-dark .gecko-select:has(select[disabled])) {
  --tw-bg-opacity: 1;
  background-color: rgb(33 45 59/var(--tw-bg-opacity))
}

.gecko-select:has(select[disabled]) [x-ref=content],
.gecko-select:has(select[disabled]) i.fa-angle-down {
  opacity: .6
}

.gecko-select [x-ref=content]:empty:after {
  content: attr(placeholder);
  font-weight: 400;
  --tw-text-opacity: 1;
  color: rgb(148 163 184/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-select [x-ref=content]:empty):after {
  --tw-text-opacity: 1;
  color: rgb(74 99 130/var(--tw-text-opacity))
}

.gecko-select-dropdown-results,
.gecko-select-dropdown-static {
  max-height: 20rem;
  overflow: auto
}

.gecko-select--shadow {
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  width: 1px !important;
  white-space: nowrap !important;
  position: absolute !important;
  left: 0 !important;
  bottom: 0 !important;
  z-index: -1 !important
}

.gecko-select-chips {
  margin-top: .625rem;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  grid-gap: .5rem;
  gap: .5rem
}

.gecko-select-chips:empty {
  margin: 0
}

.gecko-select-chips .gecko-chip {
  display: flex;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  align-items: center;
  border-radius: 1rem;
  --tw-bg-opacity: 1;
  background-color: rgb(232 252 201/var(--tw-bg-opacity));
  padding: .375rem .75rem;
  font-size: .875rem;
  line-height: 1.25rem;
  font-weight: 600;
  --tw-text-opacity: 1;
  color: rgb(35 146 0/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-select-chips .gecko-chip) {
  background-color: rgb(128 224 56/.1);
  --tw-text-opacity: 1;
  color: rgb(128 224 56/var(--tw-text-opacity))
}

.gecko-select-chips .gecko-chip-remove {
  margin-left: .375rem;
  cursor: pointer;
  padding-top: 1px
}

.gecko-select-dropdown-item:has(i.gecko-select-selected) {
  display: flex;
  justify-content: space-between
}

.gecko-select-dropdown-item:has(i.gecko-select-selected) i.gecko-select-selected {
  --tw-text-opacity: 1;
  color: rgb(0 168 62/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-select-dropdown-item:has(i.gecko-select-selected) i.gecko-select-selected) {
  --tw-text-opacity: 1;
  color: rgb(50 202 91/var(--tw-text-opacity))
}

.gecko-select-default:not(.gecko-select-button) {
  padding-left: .125rem;
  padding-right: .125rem
}

.gecko-select-icon .gecko-select {
  aspect-ratio: 1/1;
  width: 3.25rem;
  min-width: 0;
  grid-gap: 0;
  gap: 0;
  padding-left: 0;
  padding-right: 0
}

.gecko-select-icon .gecko-select-dropdown-container {
  width: -moz-fit-content;
  width: fit-content
}

.gecko-select-icon .gecko-select-dropdown-container .gecko-select-dropdown-static {
  display: grid;
  width: 14rem;
  grid-template-columns: repeat(3, minmax(0, 1fr))
}

.gecko-select-icon .gecko-select-dropdown-item,
.gecko-select-icon .gecko-select-dropdown-item:has(.gecko-select-selected) {
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 2rem
}

.gecko-select-icon div[x-ref=content] {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 1px;
  font-size: 1.5rem;
  line-height: 2rem
}

.gecko-select-icon .gecko-select-selected {
  display: none !important
}

:not(.gecko-select-icon) .gecko-select-dropdown-container {
  overflow: auto
}

.gecko-select-button {
  display: inline-flex;
  flex-direction: column
}

.gecko-select-button [x-ref=content],
.gecko-select-button [x-ref=textInput] {
  display: block !important
}

.gecko-select-button .gecko-select-dropdown-message {
  margin-top: .125rem
}

.gecko-select-button .gecko-select-dropdown .gecko-select-dropdown-container,
.gecko-select-button .gecko-select-dropdown>div {
  width: 16rem;
  min-width: -moz-fit-content;
  min-width: fit-content
}

.gecko-select-button .gecko-input-group {
  margin-bottom: .375rem
}

.gecko-select-button .gecko-input-group input.gecko-input {
  height: 2.5rem
}

.gecko-combo {
  display: flex;
  height: 3.25rem;
  width: 100%;
  min-width: 16rem;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  grid-column-gap: .25rem;
  -moz-column-gap: .25rem;
  column-gap: .25rem;
  overflow: hidden;
  border-radius: .5rem;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity));
  padding-right: .25rem;
  padding-left: .5rem;
  --tw-text-opacity: 1;
  color: rgb(15 23 42/var(--tw-text-opacity));
  outline-width: 0;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 transparent;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 transparent);
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(239 242 245/var(--tw-ring-opacity))
}

.gecko-combo:focus-within {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(75 204 0/var(--tw-ring-opacity))
}

.gecko-combo:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 252/var(--tw-bg-opacity))
}

:is(.tw-dark .gecko-combo) {
  --tw-bg-opacity: 1;
  background-color: rgb(13 18 23/var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(223 229 236/var(--tw-text-opacity));
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(56 74 97/var(--tw-ring-opacity))
}

:is(.tw-dark .gecko-combo:focus-within) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(128 224 56/var(--tw-ring-opacity))
}

:is(.tw-dark .gecko-combo:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(33 45 59/var(--tw-bg-opacity))
}

.gecko-combo.gecko-error {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 58 51/var(--tw-ring-opacity))
}

.gecko-combo.gecko-error:focus-within {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(75 204 0/var(--tw-ring-opacity))
}

:is(.tw-dark .gecko-combo.gecko-error) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 58 51/var(--tw-ring-opacity))
}

:is(.tw-dark .gecko-combo.gecko-error:focus-within) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(128 224 56/var(--tw-ring-opacity))
}

.gecko-combo-label {
  margin-bottom: .375rem;
  display: block;
  --tw-text-opacity: 1;
  color: rgb(15 23 42/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-combo-label) {
  --tw-text-opacity: 1;
  color: rgb(223 229 236/var(--tw-text-opacity))
}

.gecko-combo-input {
  width: 100%;
  flex: 1 1;
  border-width: 0;
  background-color: transparent;
  padding: 0;
  --tw-text-opacity: 1;
  color: rgb(15 23 42/var(--tw-text-opacity))
}

.gecko-combo-input::-moz-placeholder {
  --tw-text-opacity: 1;
  color: rgb(148 163 184/var(--tw-text-opacity))
}

.gecko-combo-input:-ms-input-placeholder {
  --tw-text-opacity: 1;
  color: rgb(148 163 184/var(--tw-text-opacity))
}

.gecko-combo-input::placeholder {
  --tw-text-opacity: 1;
  color: rgb(148 163 184/var(--tw-text-opacity))
}

.gecko-combo-input:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 transparent;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 transparent)
}

.gecko-combo-input:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px
}

:is(.tw-dark .gecko-combo-input) {
  --tw-text-opacity: 1;
  color: rgb(223 229 236/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-combo-input)::-moz-placeholder {
  --tw-text-opacity: 1;
  color: rgb(74 99 130/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-combo-input):-ms-input-placeholder {
  --tw-text-opacity: 1;
  color: rgb(74 99 130/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-combo-input)::placeholder {
  --tw-text-opacity: 1;
  color: rgb(74 99 130/var(--tw-text-opacity))
}

@media (min-width:1200px) {
  .gecko-combo-input {
    font-size: .875rem;
    line-height: 1.25rem
  }
}

.gecko-combo-dropdown {
  display: inline-block;
  text-align: left
}

.gecko-combo-dropdown .gecko-combo-dropdown-container,
.gecko-combo-dropdown>div {
  width: 100%
}

.gecko-combo-dropdown .gecko-combo-dropdown-item {
  display: flex;
  cursor: pointer;
  align-items: center;
  border-radius: .5rem;
  padding: .75rem .5rem;
  font-size: .875rem;
  line-height: 1.25rem;
  font-weight: 600;
  --tw-text-opacity: 1;
  color: rgb(51 65 85/var(--tw-text-opacity))
}

.gecko-combo-dropdown .gecko-combo-dropdown-item:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249/var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(15 23 42/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-combo-dropdown .gecko-combo-dropdown-item) {
  --tw-text-opacity: 1;
  color: rgb(190 203 218/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-combo-dropdown .gecko-combo-dropdown-item:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(33 45 59/var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(223 229 236/var(--tw-text-opacity))
}

.gecko-combo-dropdown-loading,
.gecko-combo-dropdown-message {
  padding: .75rem .5rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgb(100 116 139/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-combo-dropdown-loading),
:is(.tw-dark .gecko-combo-dropdown-message) {
  --tw-text-opacity: 1;
  color: rgb(158 176 199/var(--tw-text-opacity))
}

.gecko-combo:has(input[disabled]) {
  pointer-events: none;
  cursor: default;
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249/var(--tw-bg-opacity))
}

:is(.tw-dark .gecko-combo:has(input[disabled])) {
  --tw-bg-opacity: 1;
  background-color: rgb(33 45 59/var(--tw-bg-opacity))
}

.gecko-combo:has(input[disabled]) [x-ref=content],
.gecko-combo:has(input[disabled]) i.fa-angle-down {
  opacity: .6
}

.gecko-combo [x-ref=content]:empty:after {
  content: attr(placeholder);
  font-weight: 400;
  --tw-text-opacity: 1;
  color: rgb(148 163 184/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-combo [x-ref=content]:empty):after {
  --tw-text-opacity: 1;
  color: rgb(74 99 130/var(--tw-text-opacity))
}

.gecko-combo-dropdown-results,
.gecko-combo-dropdown-static {
  max-height: 20rem;
  overflow: auto
}

.gecko-combo-button .gecko-combo-dropdown .gecko-combo-dropdown-container,
.gecko-combo-button .gecko-combo-dropdown>div {
  width: 14rem;
  min-width: -moz-fit-content;
  min-width: fit-content
}

.gecko-combo-button [x-ref=content] i.gecko-combo-selected {
  display: none
}

.gecko-combo-dropdown-item:has(i.gecko-combo-selected) {
  display: flex;
  justify-content: space-between
}

.gecko-combo-dropdown-item:has(i.gecko-combo-selected) i.gecko-combo-selected {
  --tw-text-opacity: 1;
  color: rgb(0 168 62/var(--tw-text-opacity))
}

:is(.tw-dark .gecko-combo-dropdown-item:has(i.gecko-combo-selected) i.gecko-combo-selected) {
  --tw-text-opacity: 1;
  color: rgb(50 202 91/var(--tw-text-opacity))
}

.gecko-combo-default:not(.gecko-combo-button) {
  padding-left: .125rem;
  padding-right: .125rem
}

.coin-page-editorial-content h1,
.coin-page-editorial-content h2,
.coin-page-editorial-content h3 {
  --tw-text-opacity: 1;
  color: rgb(51 65 85/var(--tw-text-opacity))
}

:is(.tw-dark .coin-page-editorial-content h1),
:is(.tw-dark .coin-page-editorial-content h2),
:is(.tw-dark .coin-page-editorial-content h3) {
  --tw-text-opacity: 1;
  color: rgb(190 203 218/var(--tw-text-opacity))
}

.coin-page-editorial-content h2,
.coin-page-editorial-content h3 {
  margin-bottom: .25rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem
}

.coin-page-editorial-content h2:not(:first-child),
.coin-page-editorial-content h3:not(:first-child) {
  margin-top: 1.5rem
}

.coin-page-editorial-content p {
  margin-bottom: .75rem;
  font-weight: 400;
  --tw-text-opacity: 1;
  color: rgb(100 116 139/var(--tw-text-opacity))
}

:is(.tw-dark .coin-page-editorial-content p) {
  --tw-text-opacity: 1;
  color: rgb(158 176 199/var(--tw-text-opacity))
}

.coin-page-editorial-content ol,
.coin-page-editorial-content ul {
  margin: 1rem
}

:is(.tw-dark .coin-page-editorial-content ol>li)::marker,
:is(.tw-dark .coin-page-editorial-content ol>li):before,
:is(.tw-dark .coin-page-editorial-content ul>li)::marker,
:is(.tw-dark .coin-page-editorial-content ul>li):before {
  --tw-text-opacity: 1;
  color: rgb(190 203 218/var(--tw-text-opacity))
}

.coin-page-editorial-content ol li,
.coin-page-editorial-content ul li {
  --tw-text-opacity: 1;
  color: rgb(100 116 139/var(--tw-text-opacity))
}

:is(.tw-dark .coin-page-editorial-content ol li),
:is(.tw-dark .coin-page-editorial-content ul li) {
  --tw-text-opacity: 1;
  color: rgb(158 176 199/var(--tw-text-opacity))
}

.coin-page-editorial-content hr {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  --tw-border-opacity: 1;
  border-color: rgb(239 242 245/var(--tw-border-opacity))
}

:is(.tw-dark .coin-page-editorial-content hr) {
  --tw-border-opacity: 1;
  border-color: rgb(33 45 59/var(--tw-border-opacity))
}

.coin-page-read-more {
  --lh: 1.4rem;
  --max-lines: 28;
  max-height: calc(var(--lh)*var(--max-lines));
  overflow: hidden
}

.coin-page-read-more.expanded {
  max-height: none !important;
  overflow: visible
}

@media(max-width:1199px) {
  .coin-page-read-more {
    --max-lines: 8
  }
}

.buy-sell-button a {
  --tw-text-opacity: 1;
  color: rgb(51 65 85/var(--tw-text-opacity))
}

:is(.tw-dark .buy-sell-button a) {
  --tw-text-opacity: 1;
  color: rgb(223 229 236/var(--tw-text-opacity))
}

.buy-sell-button div {
  --tw-text-opacity: 1;
  color: rgb(100 116 139/var(--tw-text-opacity))
}

:is(.tw-dark .buy-sell-button div) {
  --tw-text-opacity: 1;
  color: rgb(158 176 199/var(--tw-text-opacity))
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none
}

.no-scrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
  background: transparent
}

div[style="background:#eeeeee;border:1px solid #cccccc;padding:5px 10px;"] {
  border-width: 0 !important;
  --tw-bg-opacity: 1 !important;
  background-color: rgb(239 242 245/var(--tw-bg-opacity)) !important;
  padding: .75rem !important
}

:is(.tw-dark div[style="background:#eeeeee;border:1px solid #cccccc;padding:5px 10px;"]) {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(27 35 45/var(--tw-bg-opacity)) !important
}

#table-of-contents-items a.active-section {
  --tw-border-opacity: 1;
  border: solid rgb(75 204 0/var(--tw-border-opacity));
  border-width: 0 0 0 2px;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgb(15 23 42/var(--tw-text-opacity))
}

:is(.tw-dark #table-of-contents-items a.active-section) {
  --tw-text-opacity: 1;
  color: rgb(255 255 255/var(--tw-text-opacity))
}

#post-content h2:before {
  content: "";
  display: block;
  height: 100px;
  width: 0;
  margin-top: -100px;
  visibility: hidden;
  z-index: -9999
}

#post-content blockquote {
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
  margin-left: 1.5rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 300;
  font-style: italic;
  --tw-text-opacity: 1;
  color: rgb(35 146 0/var(--tw-text-opacity))
}

:is(.tw-dark #post-content blockquote) {
  --tw-text-opacity: 1;
  color: rgb(166 239 95/var(--tw-text-opacity))
}

.buzz-social nav.share {
  display: inline-block
}

.buzz-social nav.share div {
  float: left
}

.buzz-social nav.share iframe {
  border: 0;
  margin-top: 0;
  padding-top: 0
}

.buzz-social #___plusone_0 {
  font-size: default !important
}

.buzz-social .fb_edge_widget_with_comment,
.buzz-social .fb_iframe_widget span {
  vertical-align: top
}

.buzz-social .fb-like {
  display: inline-block
}

.buzz-social .fb-like span {
  height: 26px !important
}

.buzz-social *+html .fb-like,
.buzz-social * html .fb-like {
  display: inline
}

@media(max-width:992px) {
  .post-thumbnail {
    display: none
  }
}

.posts-content {
  border: 1px solid #dfdfdf;
  padding: 20px;
  margin-bottom: 22px;
  background-color: #fff
}

.raw-post-body div:not(.non-body) {
  margin-top: 4px;
  flex-grow: 1;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  --tw-text-opacity: 1;
  color: rgb(100 116 139/var(--tw-text-opacity))
}

:is(.tw-dark .raw-post-body div:not(.non-body)) {
  --tw-text-opacity: 1;
  color: rgb(158 176 199/var(--tw-text-opacity))
}

.raw-post-body span[style*="font-size:11px;"]:not(.non-body) {
  flex-grow: 1 !important;
  font-size: .75rem !important;
  line-height: 1rem !important;
  --tw-text-opacity: 1 !important;
  color: rgb(100 116 139/var(--tw-text-opacity)) !important
}

:is(.tw-dark .raw-post-body span[style*="font-size:11px;"]:not(.non-body)) {
  --tw-text-opacity: 1 !important;
  color: rgb(158 176 199/var(--tw-text-opacity)) !important
}

.raw-post-body img:not(.non-body) {
  margin-top: 1.5rem;
  border-radius: .75rem
}

.raw-post-body code {
  flex-grow: 1;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  --tw-text-opacity: 1;
  color: rgb(183 151 25/var(--tw-text-opacity))
}

.raw-post-body .twitter-tweet {
  margin-top: 1.5rem !important
}

.raw-post-body table {
  width: 100%
}

.raw-post-body table>:not([hidden])~:not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px*(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px*var(--tw-divide-y-reverse));
  --tw-divide-opacity: 1;
  border-color: rgb(239 242 245/var(--tw-divide-opacity))
}

.raw-post-body table {
  border-top-width: 1px;
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(239 242 245/var(--tw-border-opacity))
}

:is(.tw-dark .raw-post-body table)>:not([hidden])~:not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(33 45 59/var(--tw-divide-opacity))
}

:is(.tw-dark .raw-post-body table) {
  --tw-border-opacity: 1;
  border-color: rgb(33 45 59/var(--tw-border-opacity))
}

.raw-post-body th {
  white-space: nowrap;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity));
  padding: .75rem .25rem;
  text-align: center;
  font-size: .75rem;
  line-height: 1rem;
  font-weight: 600;
  --tw-text-opacity: 1;
  color: rgb(15 23 42/var(--tw-text-opacity))
}

:is(.tw-dark .raw-post-body th) {
  --tw-bg-opacity: 1;
  background-color: rgb(13 18 23/var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(223 229 236/var(--tw-text-opacity))
}

@media (min-width:1200px) {
  .raw-post-body th {
    padding-left: .625rem
  }
}

.raw-post-body td:not(.blob-num,
  .blob-code) {
  flex-grow: 1 !important;
  border-width: 1px !important;
  --tw-border-opacity: 1 !important;
  border-color: rgb(239 242 245/var(--tw-border-opacity)) !important;
  background-color: inherit !important;
  padding: .5rem .25rem !important;
  font-size: 1rem !important;
  font-weight: 400 !important;
  line-height: 1.5rem !important;
  --tw-text-opacity: 1 !important;
  color: rgb(100 116 139/var(--tw-text-opacity)) !important
}

:is(.tw-dark .raw-post-body td:not(.blob-num,
    .blob-code)) {
  --tw-border-opacity: 1 !important;
  border-color: rgb(33 45 59/var(--tw-border-opacity)) !important;
  --tw-text-opacity: 1 !important;
  color: rgb(158 176 199/var(--tw-text-opacity)) !important
}

@media (min-width:1200px) {

  .raw-post-body td:not(.blob-num,
    .blob-code) {
    padding: .5rem !important
  }
}

.post-body {
  color: #616161
}

.post-body img {
  max-width: 100% !important;
  height: auto !important;
  display: block;
  margin-left: auto;
  margin-right: auto
}

.buzz-body h1 {
  font-size: 3rem;
  line-height: 1;
  --tw-text-opacity: 1;
  color: rgb(15 23 42/var(--tw-text-opacity))
}

:is(.tw-dark .buzz-body h1) {
  --tw-text-opacity: 1;
  color: rgb(223 229 236/var(--tw-text-opacity))
}

.buzz-body h2 {
  flex-grow: 1;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.25rem;
  --tw-text-opacity: 1;
  color: rgb(15 23 42/var(--tw-text-opacity))
}

:is(.tw-dark .buzz-body h2) {
  --tw-text-opacity: 1;
  color: rgb(223 229 236/var(--tw-text-opacity))
}

@media (min-width:768px) {
  .buzz-body h2 {
    font-size: 1.875rem;
    line-height: 2.25rem
  }
}

.buzz-body h3 {
  flex-grow: 1;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 2rem;
  --tw-text-opacity: 1;
  color: rgb(15 23 42/var(--tw-text-opacity))
}

:is(.tw-dark .buzz-body h3) {
  --tw-text-opacity: 1;
  color: rgb(223 229 236/var(--tw-text-opacity))
}

@media (min-width:768px) {
  .buzz-body h3 {
    font-size: 1.5rem;
    line-height: 2rem
  }
}

.buzz-body h4 {
  flex-grow: 1;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.75rem;
  --tw-text-opacity: 1;
  color: rgb(15 23 42/var(--tw-text-opacity))
}

:is(.tw-dark .buzz-body h4) {
  --tw-text-opacity: 1;
  color: rgb(223 229 236/var(--tw-text-opacity))
}

@media (min-width:768px) {
  .buzz-body h4 {
    font-size: 1.125rem;
    line-height: 1.75rem
  }
}

.buzz-body p {
  margin-top: 20px;
  flex-grow: 1;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  --tw-text-opacity: 1;
  color: rgb(100 116 139/var(--tw-text-opacity))
}

:is(.tw-dark .buzz-body p) {
  --tw-text-opacity: 1;
  color: rgb(158 176 199/var(--tw-text-opacity))
}

.buzz-body hr {
  margin-top: 24px;
  margin-bottom: 24px;
  --tw-border-opacity: 1;
  border-color: rgb(239 242 245/var(--tw-border-opacity))
}

:is(.tw-dark .buzz-body hr) {
  --tw-border-opacity: 1;
  border-color: rgb(33 45 59/var(--tw-border-opacity))
}

.buzz-body .h2,
.buzz-body .h3,
.buzz-body .h4,
.buzz-body .h5,
.buzz-body .h6,
.buzz-body h2,
.buzz-body h3,
.buzz-body h4,
.buzz-body h5,
.buzz-body h6 {
  margin-bottom: 24px;
  margin-top: 24px
}

.buzz-body ol,
.buzz-body ul {
  padding-left: 2.5rem
}

.buzz-body ol li::marker,
.buzz-body ul li::marker {
  flex-grow: 1;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  --tw-text-opacity: 1;
  color: rgb(100 116 139/var(--tw-text-opacity))
}

:is(.tw-dark .buzz-body ol li)::marker,
:is(.tw-dark .buzz-body ul li)::marker {
  --tw-text-opacity: 1;
  color: rgb(158 176 199/var(--tw-text-opacity))
}

.buzz-body ol li,
.buzz-body ul li {
  flex-grow: 1;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  --tw-text-opacity: 1;
  color: rgb(100 116 139/var(--tw-text-opacity))
}

:is(.tw-dark .buzz-body ol li),
:is(.tw-dark .buzz-body ul li) {
  --tw-text-opacity: 1;
  color: rgb(158 176 199/var(--tw-text-opacity))
}

.buzz-body ol li:not(:last-child),
.buzz-body ul li:not(:last-child) {
  margin-bottom: .75rem
}

.buzz-body ol li p,
.buzz-body ul li p {
  display: inline
}

.buzz-body a:not(.non-body) {
  cursor: pointer;
  font-weight: 600;
  color: rgb(51 65 85/var(--tw-text-opacity))
}

.buzz-body a:not(.non-body),
.buzz-body a:not(.non-body):hover {
  --tw-text-opacity: 1;
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline
}

.buzz-body a:not(.non-body):hover {
  color: rgb(75 204 0/var(--tw-text-opacity))
}

:is(.tw-dark .buzz-body a:not(.non-body)) {
  --tw-text-opacity: 1;
  color: rgb(248 250 252/var(--tw-text-opacity))
}

:is(.tw-dark .buzz-body a:not(.non-body):hover) {
  --tw-text-opacity: 1;
  color: rgb(128 224 56/var(--tw-text-opacity))
}

.sub1 {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  --tw-text-opacity: 1;
  color: rgb(51 65 85/var(--tw-text-opacity))
}

:is(.tw-dark .sub1) {
  --tw-text-opacity: 1;
  color: rgb(190 203 218/var(--tw-text-opacity))
}

.body1 {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  --tw-text-opacity: 1;
  color: rgb(100 116 139/var(--tw-text-opacity))
}

:is(.tw-dark .body1) {
  --tw-text-opacity: 1;
  color: rgb(158 176 199/var(--tw-text-opacity))
}

.policies ol.nested-ol,
.policies ol.nested-ol ol:not(.new-list) {
  counter-reset: item
}

.policies ol.nested-ol>li,
.policies ol.nested-ol ol:not(.new-list)>li {
  counter-increment: item
}

.policies ol.nested-ol>li::marker {
  content: counter(item) ". ";
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums
}

.policies ol.nested-ol>li ol:not(.new-list)>li::marker {
  content: counters(item, ".") " ";
  font-feature-settings: normal;
  font-variant-numeric: normal
}

.policies ol.bracket-lower-roman {
  counter-reset: item
}

.policies ol.bracket-lower-roman>li {
  counter-increment: item
}

.policies ol.bracket-lower-roman>li::marker {
  content: "(" counter(item, lower-roman) ") "
}

.gecko-widgets-grid {
  display: grid;
  align-items: center;
  grid-row-gap: 2rem;
  row-gap: 2rem;
  grid-column-gap: 1rem;
  -moz-column-gap: 1rem;
  column-gap: 1rem;
  text-align: center;
  font-size: .875rem;
  line-height: 1.25rem
}

@media (min-width:640px) {
  .gecko-widgets-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr))
  }
}

@media (min-width:1024px) {
  .gecko-widgets-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr))
  }
}

.gecko-widgets-grid a {
  width: -moz-fit-content;
  width: fit-content;
  justify-self: center;
  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-duration: .15s
}

.gecko-widgets-grid a:hover img {
  --tw-border-opacity: 1;
  border-color: rgb(75 204 0/var(--tw-border-opacity))
}

.gecko-widgets-grid img {
  pointer-events: none;
  margin-bottom: .5rem;
  aspect-ratio: 31/20;
  height: 200px;
  width: 100%;
  border-radius: .75rem;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(203 213 225/var(--tw-border-opacity));
  -o-object-fit: cover;
  object-fit: cover;
  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-duration: .15s
}

:is(.tw-dark .gecko-widgets-grid img) {
  --tw-border-opacity: 1;
  border-color: rgb(56 74 97/var(--tw-border-opacity))
}

[data-controller=nft-treemap] .custom-label-box {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-row-gap: .3rem;
  row-gap: .3rem;
  justify-content: space-evenly;
  justify-items: center;
  align-content: center;
  text-align: center
}

[data-controller=nft-treemap] .gecko-tooltip div:not(.title) {
  padding-top: 2px;
  white-space: nowrap
}

[data-controller=category-heatmap-building] .highcharts-label span,
[data-controller=heatmap] .highcharts-label span,
[data-controller=nft-treemap] .highcharts-label span {
  font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important
}

[data-controller=category-heatmap-building] .highcharts-point,
[data-controller=heatmap] .highcharts-point,
[data-controller=nft-treemap] .highcharts-point {
  stroke-width: 2px;
  stroke: #fff !important
}

[data-controller=category-heatmap-building] .gecko-tooltip,
[data-controller=heatmap] .gecko-tooltip,
[data-controller=nft-treemap] .gecko-tooltip {
  font-size: 14px;
  color: #64748b
}

[data-controller=category-heatmap-building] .gecko-tooltip .title,
[data-controller=heatmap] .gecko-tooltip .title,
[data-controller=nft-treemap] .gecko-tooltip .title {
  color: #334155;
  font-weight: 500;
  padding-bottom: 12px;
  padding-top: 0
}

[data-controller=category-heatmap-building] .gecko-tooltip .value,
[data-controller=heatmap] .gecko-tooltip .value,
[data-controller=nft-treemap] .gecko-tooltip .value {
  color: #0f172a;
  font-weight: 600
}

[data-controller=category-heatmap-building] .highcharts-tooltip-box,
[data-controller=category-heatmap-building] .highcharts-tooltip-box .highcharts-label-box,
[data-controller=heatmap] .highcharts-tooltip-box,
[data-controller=heatmap] .highcharts-tooltip-box .highcharts-label-box,
[data-controller=nft-treemap] .highcharts-tooltip-box,
[data-controller=nft-treemap] .highcharts-tooltip-box .highcharts-label-box {
  fill: #fff;
  fill-opacity: 1;
  stroke: #f1f5f9
}

[data-controller=category-heatmap-building] .gecko-tooltip,
[data-controller=heatmap] .gecko-tooltip,
[data-controller=nft-treemap] .gecko-tooltip {
  z-index: 50;
  text-align: left;
  border-radius: 8px;
  background-color: #fff;
  padding: 16px
}

[data-controller=category-heatmap-building] .gecko-tooltip div:not(.title),
[data-controller=heatmap] .gecko-tooltip div:not(.title),
[data-controller=nft-treemap] .gecko-tooltip div:not(.title) {
  padding-top: 2px
}

.tw-dark [data-controller=category-heatmap-building] .highcharts-label span,
.tw-dark [data-controller=heatmap] .highcharts-label span,
.tw-dark [data-controller=nft-treemap] .highcharts-label span {
  font-family: Inter-Dark, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important
}

.tw-dark [data-controller=category-heatmap-building] .highcharts-point,
.tw-dark [data-controller=heatmap] .highcharts-point,
.tw-dark [data-controller=nft-treemap] .highcharts-point {
  stroke: #0d1217 !important
}

.tw-dark [data-controller=category-heatmap-building] .gecko-tooltip,
.tw-dark [data-controller=heatmap] .gecko-tooltip,
.tw-dark [data-controller=nft-treemap] .gecko-tooltip {
  color: #9eb0c7
}

.tw-dark [data-controller=category-heatmap-building] .gecko-tooltip .title,
.tw-dark [data-controller=heatmap] .gecko-tooltip .title,
.tw-dark [data-controller=nft-treemap] .gecko-tooltip .title {
  color: #becbda;
  font-weight: 400
}

.tw-dark [data-controller=category-heatmap-building] .gecko-tooltip .value,
.tw-dark [data-controller=heatmap] .gecko-tooltip .value,
.tw-dark [data-controller=nft-treemap] .gecko-tooltip .value {
  color: #dfe5ec;
  font-weight: 500
}

.tw-dark [data-controller=category-heatmap-building] .highcharts-tooltip-box,
.tw-dark [data-controller=category-heatmap-building] .highcharts-tooltip-box .highcharts-label-box,
.tw-dark [data-controller=heatmap] .highcharts-tooltip-box,
.tw-dark [data-controller=heatmap] .highcharts-tooltip-box .highcharts-label-box,
.tw-dark [data-controller=nft-treemap] .highcharts-tooltip-box,
.tw-dark [data-controller=nft-treemap] .highcharts-tooltip-box .highcharts-label-box {
  fill: #1b232d;
  stroke: #212d3b
}

.tw-dark [data-controller=category-heatmap-building] .gecko-tooltip,
.tw-dark [data-controller=heatmap] .gecko-tooltip,
.tw-dark [data-controller=nft-treemap] .gecko-tooltip {
  background-color: #1b232d
}

[data-controller=category-heatmap-building] .custom-label-box {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-row-gap: .3rem;
  row-gap: .3rem;
  justify-content: space-evenly;
  justify-items: center;
  align-content: center;
  text-align: center
}

[data-controller=category-heatmap-building] .gecko-tooltip div:not(.title) {
  padding-top: 2px;
  white-space: nowrap
}

.placeholder\:\!tw-text-gray-400::-moz-placeholder {
  --tw-text-opacity: 1 !important;
  color: rgb(148 163 184/var(--tw-text-opacity)) !important
}

.placeholder\:\!tw-text-gray-400:-ms-input-placeholder {
  --tw-text-opacity: 1 !important;
  color: rgb(148 163 184/var(--tw-text-opacity)) !important
}

.placeholder\:\!tw-text-gray-400::placeholder {
  --tw-text-opacity: 1 !important;
  color: rgb(148 163 184/var(--tw-text-opacity)) !important
}

.before\:tw-align-middle:before {
  content: var(--tw-content);
  vertical-align: middle
}

.after\:tw-absolute:after {
  content: var(--tw-content);
  position: absolute
}

.after\:tw-left-\[0px\]:after {
  content: var(--tw-content);
  left: 0
}

.after\:tw-top-\[-4px\]:after {
  content: var(--tw-content);
  top: -4px
}

.after\:tw-inline-block:after {
  content: var(--tw-content);
  display: inline-block
}

.after\:tw-h-6:after {
  content: var(--tw-content);
  height: 1.5rem
}

.after\:tw-w-6:after {
  content: var(--tw-content);
  width: 1.5rem
}

.after\:tw-cursor-text:after {
  content: var(--tw-content);
  cursor: text
}

.after\:tw-whitespace-pre:after {
  content: var(--tw-content);
  white-space: pre
}

.after\:tw-rounded-lg:after {
  content: var(--tw-content);
  border-radius: .5rem
}

.after\:tw-border-2:after {
  content: var(--tw-content);
  border-width: 2px
}

.after\:tw-border-gray-200:after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(239 242 245/var(--tw-border-opacity))
}

.after\:tw-bg-white:after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity))
}

.after\:tw-bg-\[url\(\'icons\/cross\.svg\'\)\]:after {
  content: var(--tw-content);
  background-image: url(//static.coingecko.com/packs/media/stylesheets_v2/icons/cross-c8466edbe37abc92fdd0327e080da8f7.svg)
}

.after\:tw-bg-center:after {
  content: var(--tw-content);
  background-position: 50%
}

.after\:tw-bg-no-repeat:after {
  content: var(--tw-content);
  background-repeat: no-repeat
}

.after\:tw-align-middle:after {
  content: var(--tw-content);
  vertical-align: middle
}

.after\:tw-text-slate-700:after {
  content: var(--tw-content);
  --tw-text-opacity: 1;
  color: rgb(51 65 85/var(--tw-text-opacity))
}

.after\:tw-no-underline:after {
  content: var(--tw-content);
  -webkit-text-decoration-line: none;
  text-decoration-line: none
}

.after\:tw-drop-shadow:after {
  content: var(--tw-content);
  --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0/0.1)) drop-shadow(0 1px 1px rgb(0 0 0/0.06));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}

.after\:tw-transition-all:after {
  content: var(--tw-content);
  transition-property: all;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-duration: .15s
}

.after\:tw-content-\[\'\'\]:after {
  --tw-content: "";
  content: var(--tw-content)
}

.after\:tw-content-\[\'_-\'\]:after {
  --tw-content: " -";
  content: var(--tw-content)
}

.first\:tw-rounded-l:first-child {
  border-top-left-radius: .25rem;
  border-bottom-left-radius: .25rem
}

.last\:tw-rounded-r:last-child {
  border-top-right-radius: .25rem;
  border-bottom-right-radius: .25rem
}

.visited\:tw-text-gray-500:visited {
  color: rgb(100 116 139)
}

.visited\:tw-text-white:visited {
  color: rgb(255 255 255)
}

.checked\:\!tw-border-primary-500:checked {
  --tw-border-opacity: 1 !important;
  border-color: rgb(75 204 0/var(--tw-border-opacity)) !important
}

.empty\:tw-hidden:empty {
  display: none
}

.focus-within\:tw-z-10:focus-within {
  z-index: 10
}

.focus-within\:tw-border-b-2:focus-within {
  border-bottom-width: 2px
}

.focus-within\:tw-border-t-2:focus-within {
  border-top-width: 2px
}

.focus-within\:tw-border-primary-500:focus-within {
  --tw-border-opacity: 1;
  border-color: rgb(75 204 0/var(--tw-border-opacity))
}

.focus-within\:tw-ring-0:focus-within {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 transparent;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 transparent)
}

.focus-within\:tw-ring-2:focus-within {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 transparent;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 transparent)
}

.focus-within\:tw-ring-inset:focus-within {
  --tw-ring-inset: inset
}

.focus-within\:tw-ring-primary-500:focus-within {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(75 204 0/var(--tw-ring-opacity))
}

.hover\:tw-border-gray-300:hover {
  --tw-border-opacity: 1;
  border-color: rgb(203 213 225/var(--tw-border-opacity))
}

.hover\:tw-border-gray-400:hover {
  --tw-border-opacity: 1;
  border-color: rgb(148 163 184/var(--tw-border-opacity))
}

.hover\:tw-border-primary-500:hover {
  --tw-border-opacity: 1;
  border-color: rgb(75 204 0/var(--tw-border-opacity))
}

.hover\:\!tw-bg-gray-200:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(239 242 245/var(--tw-bg-opacity)) !important
}

.hover\:\!tw-bg-white:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(255 255 255/var(--tw-bg-opacity)) !important
}

.hover\:tw-bg-blue-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216/var(--tw-bg-opacity))
}

.hover\:tw-bg-danger-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(216 37 46/var(--tw-bg-opacity))
}

.hover\:tw-bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249/var(--tw-bg-opacity))
}

.hover\:tw-bg-gray-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(239 242 245/var(--tw-bg-opacity))
}

.hover\:tw-bg-gray-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(203 213 225/var(--tw-bg-opacity))
}

.hover\:tw-bg-gray-400:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(148 163 184/var(--tw-bg-opacity))
}

.hover\:tw-bg-gray-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 252/var(--tw-bg-opacity))
}

.hover\:tw-bg-indigo-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(67 56 202/var(--tw-bg-opacity))
}

.hover\:tw-bg-primary-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(205 249 149/var(--tw-bg-opacity))
}

.hover\:tw-bg-primary-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(53 175 0/var(--tw-bg-opacity))
}

.hover\:tw-bg-primary-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(35 146 0/var(--tw-bg-opacity))
}

.hover\:tw-bg-slate-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249/var(--tw-bg-opacity))
}

.hover\:tw-bg-white:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity))
}

.hover\:tw-bg-opacity-5:hover {
  --tw-bg-opacity: 0.05
}

.hover\:\!tw-text-primary-500:hover {
  --tw-text-opacity: 1 !important;
  color: rgb(75 204 0/var(--tw-text-opacity)) !important
}

.hover\:tw-text-black:hover {
  --tw-text-opacity: 1;
  color: rgb(0 0 0/var(--tw-text-opacity))
}

.hover\:tw-text-gray-500:hover {
  --tw-text-opacity: 1;
  color: rgb(100 116 139/var(--tw-text-opacity))
}

.hover\:tw-text-gray-700:hover {
  --tw-text-opacity: 1;
  color: rgb(51 65 85/var(--tw-text-opacity))
}

.hover\:tw-text-gray-900:hover {
  --tw-text-opacity: 1;
  color: rgb(15 23 42/var(--tw-text-opacity))
}

.hover\:tw-text-primary-500:hover {
  --tw-text-opacity: 1;
  color: rgb(75 204 0/var(--tw-text-opacity))
}

.hover\:tw-text-primary-600:hover {
  --tw-text-opacity: 1;
  color: rgb(53 175 0/var(--tw-text-opacity))
}

.hover\:tw-text-primary-700:hover {
  --tw-text-opacity: 1;
  color: rgb(35 146 0/var(--tw-text-opacity))
}

.hover\:tw-text-primary-900:hover {
  --tw-text-opacity: 1;
  color: rgb(11 97 0/var(--tw-text-opacity))
}

.hover\:tw-text-slate-900:hover {
  --tw-text-opacity: 1;
  color: rgb(15 23 42/var(--tw-text-opacity))
}

.hover\:tw-text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255/var(--tw-text-opacity))
}

.hover\:tw-text-opacity-80:hover {
  --tw-text-opacity: 0.8
}

.hover\:tw-underline:hover {
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline
}

.hover\:tw-shadow-dangerHover:hover {
  --tw-shadow: 0 4px 0 0 #b7192f;
  --tw-shadow-colored: 0 4px 0 0 var(--tw-shadow-color)
}

.hover\:tw-shadow-dangerHover:hover,
.hover\:tw-shadow-primaryHover:hover {
  box-shadow: 0 0 transparent, 0 0 transparent, var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow)
}

.hover\:tw-shadow-primaryHover:hover {
  --tw-shadow: 0 4px 0 0 #239200;
  --tw-shadow-colored: 0 4px 0 0 var(--tw-shadow-color)
}

.hover\:tw-shadow-secondaryHover:hover {
  --tw-shadow: 0 4px 0 0 #94a3b8;
  --tw-shadow-colored: 0 4px 0 0 var(--tw-shadow-color);
  box-shadow: 0 0 transparent, 0 0 transparent, var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow)
}

.hover\:tw-ring-2:hover {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 transparent;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 transparent)
}

.hover\:tw-ring-primary-500:hover {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(75 204 0/var(--tw-ring-opacity))
}

.focus\:tw-z-10:focus {
  z-index: 10
}

.focus\:tw-border-primary-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(75 204 0/var(--tw-border-opacity))
}

.focus\:\!tw-border-opacity-0:focus {
  --tw-border-opacity: 0 !important
}

.focus\:tw-border-opacity-0:focus {
  --tw-border-opacity: 0
}

.focus\:tw-bg-gray-200:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(239 242 245/var(--tw-bg-opacity))
}

.focus\:tw-text-gray-500:focus {
  --tw-text-opacity: 1;
  color: rgb(100 116 139/var(--tw-text-opacity))
}

.focus\:tw-text-gray-700:focus {
  --tw-text-opacity: 1;
  color: rgb(51 65 85/var(--tw-text-opacity))
}

.focus\:tw-text-gray-900:focus,
.focus\:tw-text-slate-900:focus {
  --tw-text-opacity: 1;
  color: rgb(15 23 42/var(--tw-text-opacity))
}

.focus\:tw-text-white:focus {
  --tw-text-opacity: 1;
  color: rgb(255 255 255/var(--tw-text-opacity))
}

.focus\:tw-placeholder-opacity-38:focus::-moz-placeholder {
  --tw-placeholder-opacity: .38
}

.focus\:tw-placeholder-opacity-38:focus:-ms-input-placeholder {
  --tw-placeholder-opacity: .38
}

.focus\:tw-placeholder-opacity-38:focus::placeholder {
  --tw-placeholder-opacity: .38
}

.focus\:tw-outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px
}

.focus\:tw-ring-0:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color)
}

.focus\:tw-ring-0:focus,
.focus\:tw-ring-2:focus {
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 transparent;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 transparent)
}

.focus\:tw-ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)
}

.focus\:tw-ring-gray-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(239 242 245/var(--tw-ring-opacity))
}

.focus\:tw-ring-indigo-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(99 102 241/var(--tw-ring-opacity))
}

.focus\:tw-ring-primary-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(75 204 0/var(--tw-ring-opacity))
}

.focus\:tw-ring-primary-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(53 175 0/var(--tw-ring-opacity))
}

.focus\:tw-ring-offset-0:focus {
  --tw-ring-offset-width: 0px
}

.focus\:tw-ring-offset-2:focus {
  --tw-ring-offset-width: 2px
}

.focus-visible\:tw-outline-none:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px
}

.active\:tw-translate-y-2:active {
  --tw-translate-y: 0.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.active\:tw-border-b-\[0px\]:active {
  border-bottom-width: 0
}

.active\:tw-text-gray-500:active {
  --tw-text-opacity: 1;
  color: rgb(100 116 139/var(--tw-text-opacity))
}

.active\:tw-text-white:active {
  --tw-text-opacity: 1;
  color: rgb(255 255 255/var(--tw-text-opacity))
}

.active\:\!tw-shadow-dangerActive:active {
  --tw-shadow: 0 0 0 0 #b7192f !important;
  --tw-shadow-colored: 0 0 0 0 var(--tw-shadow-color) !important
}

.active\:\!tw-shadow-dangerActive:active,
.active\:\!tw-shadow-primaryActive:active {
  box-shadow: 0 0 transparent, 0 0 transparent, var(--tw-shadow) !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow) !important
}

.active\:\!tw-shadow-primaryActive:active {
  --tw-shadow: 0 0 0 0 #239200 !important;
  --tw-shadow-colored: 0 0 0 0 var(--tw-shadow-color) !important
}

.active\:\!tw-shadow-secondaryActive:active {
  --tw-shadow: 0 2px 0 0 #cbd5e1 !important;
  --tw-shadow-colored: 0 2px 0 0 var(--tw-shadow-color) !important;
  box-shadow: 0 0 transparent, 0 0 transparent, var(--tw-shadow) !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow) !important
}

.active\:tw-shadow-primaryActive:active {
  --tw-shadow: 0 0 0 0 #239200;
  --tw-shadow-colored: 0 0 0 0 var(--tw-shadow-color)
}

.active\:tw-shadow-primaryActive:active,
.active\:tw-shadow-secondaryActive:active {
  box-shadow: 0 0 transparent, 0 0 transparent, var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow)
}

.active\:tw-shadow-secondaryActive:active {
  --tw-shadow: 0 2px 0 0 #cbd5e1;
  --tw-shadow-colored: 0 2px 0 0 var(--tw-shadow-color)
}

.disabled\:tw-bg-white:disabled {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity))
}

.disabled\:tw-opacity-50:disabled {
  opacity: .5
}

.tw-group:disabled .group-disabled\:tw-inline {
  display: inline
}

.tw-group:disabled .group-disabled\:tw-hidden {
  display: none
}

.tw-peer:checked~.peer-checked\:tw-bg-primary-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(75 204 0/var(--tw-bg-opacity))
}

.tw-peer:checked~.peer-checked\:after\:tw-translate-x-full:after {
  content: var(--tw-content);
  --tw-translate-x: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.tw-peer:checked~.peer-checked\:after\:tw-border-primary-500:after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(75 204 0/var(--tw-border-opacity))
}

.tw-peer:checked~.peer-checked\:after\:tw-bg-\[url\(\'icons\/tick\.svg\'\)\]:after {
  content: var(--tw-content);
  background-image: url(//static.coingecko.com/packs/media/stylesheets_v2/icons/tick-b5a88322643e79ba1250bf1e111da223.svg)
}

.has-\[\:disabled\]\:tw-pointer-events-none:has(:disabled) {
  pointer-events: none
}

.has-\[\:disabled\]\:tw-opacity-50:has(:disabled) {
  opacity: .5
}

:is(.tw-dark .dark\:tw-block) {
  display: block
}

:is(.tw-dark .dark\:tw-inline) {
  display: inline
}

:is(.tw-dark .dark\:tw-flex) {
  display: flex
}

:is(.tw-dark .dark\:tw-hidden) {
  display: none
}

:is(.tw-dark .dark\:\!tw-divide-moon-600)>:not([hidden])~:not([hidden]) {
  --tw-divide-opacity: 1 !important;
  border-color: rgb(56 74 97/var(--tw-divide-opacity)) !important
}

:is(.tw-dark .dark\:tw-divide-gray-600)>:not([hidden])~:not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(71 85 105/var(--tw-divide-opacity))
}

:is(.tw-dark .dark\:tw-divide-moon-700)>:not([hidden])~:not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(33 45 59/var(--tw-divide-opacity))
}

:is(.tw-dark .dark\:tw-divide-white)>:not([hidden])~:not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(255 255 255/var(--tw-divide-opacity))
}

:is(.tw-dark .dark\:tw-divide-opacity-12)>:not([hidden])~:not([hidden]) {
  --tw-divide-opacity: .12
}

:is(.tw-dark .dark\:tw-border) {
  border-width: 1px
}

:is(.tw-dark .dark\:tw-border-\[3px\]) {
  border-width: 3px
}

:is(.tw-dark .dark\:tw-border-solid) {
  border-style: solid
}

:is(.tw-dark .dark\:\!tw-border-moon-500) {
  --tw-border-opacity: 1 !important;
  border-color: rgb(74 99 130/var(--tw-border-opacity)) !important
}

:is(.tw-dark .dark\:\!tw-border-moon-600) {
  --tw-border-opacity: 1 !important;
  border-color: rgb(56 74 97/var(--tw-border-opacity)) !important
}

:is(.tw-dark .dark\:\!tw-border-white) {
  --tw-border-opacity: 1 !important;
  border-color: rgb(255 255 255/var(--tw-border-opacity)) !important
}

:is(.tw-dark .dark\:tw-border-\[\#78E4F4\]) {
  --tw-border-opacity: 1;
  border-color: rgb(120 228 244/var(--tw-border-opacity))
}

:is(.tw-dark .dark\:tw-border-gray-400) {
  --tw-border-opacity: 1;
  border-color: rgb(148 163 184/var(--tw-border-opacity))
}

:is(.tw-dark .dark\:tw-border-gray-500) {
  --tw-border-opacity: 1;
  border-color: rgb(100 116 139/var(--tw-border-opacity))
}

:is(.tw-dark .dark\:tw-border-gray-600) {
  --tw-border-opacity: 1;
  border-color: rgb(71 85 105/var(--tw-border-opacity))
}

:is(.tw-dark .dark\:tw-border-moon-500) {
  --tw-border-opacity: 1;
  border-color: rgb(74 99 130/var(--tw-border-opacity))
}

:is(.tw-dark .dark\:tw-border-moon-600) {
  --tw-border-opacity: 1;
  border-color: rgb(56 74 97/var(--tw-border-opacity))
}

:is(.tw-dark .dark\:tw-border-moon-700) {
  --tw-border-opacity: 1;
  border-color: rgb(33 45 59/var(--tw-border-opacity))
}

:is(.tw-dark .dark\:tw-border-moon-800) {
  --tw-border-opacity: 1;
  border-color: rgb(27 35 45/var(--tw-border-opacity))
}

:is(.tw-dark .dark\:tw-border-primary-400) {
  --tw-border-opacity: 1;
  border-color: rgb(128 224 56/var(--tw-border-opacity))
}

:is(.tw-dark .dark\:tw-border-red-500) {
  --tw-border-opacity: 1;
  border-color: rgb(239 68 68/var(--tw-border-opacity))
}

:is(.tw-dark .dark\:tw-border-white) {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255/var(--tw-border-opacity))
}

:is(.tw-dark .dark\:\!tw-border-opacity-10) {
  --tw-border-opacity: 0.1 !important
}

:is(.tw-dark .dark\:\!tw-border-opacity-12) {
  --tw-border-opacity: .12 !important
}

:is(.tw-dark .dark\:tw-border-opacity-10) {
  --tw-border-opacity: 0.1
}

:is(.tw-dark .dark\:tw-border-opacity-12) {
  --tw-border-opacity: .12
}

:is(.tw-dark .dark\:tw-border-opacity-24) {
  --tw-border-opacity: .24
}

:is(.tw-dark .dark\:\!tw-bg-moon-700) {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(33 45 59/var(--tw-bg-opacity)) !important
}

:is(.tw-dark .dark\:\!tw-bg-moon-800) {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(27 35 45/var(--tw-bg-opacity)) !important
}

:is(.tw-dark .dark\:\!tw-bg-white\/5) {
  background-color: rgb(255 255 255/.05) !important
}

:is(.tw-dark .dark\:tw-bg-black) {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0/var(--tw-bg-opacity))
}

:is(.tw-dark .dark\:tw-bg-black\/60) {
  background-color: rgb(0 0 0/.6)
}

:is(.tw-dark .dark\:tw-bg-danger-400) {
  --tw-bg-opacity: 1;
  background-color: rgb(255 120 102/var(--tw-bg-opacity))
}

:is(.tw-dark .dark\:tw-bg-danger-400\/10) {
  background-color: rgb(255 120 102/.1)
}

:is(.tw-dark .dark\:tw-bg-dark-10) {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 24/var(--tw-bg-opacity))
}

:is(.tw-dark .dark\:tw-bg-dark-20) {
  --tw-bg-opacity: 1;
  background-color: rgb(18 18 18/var(--tw-bg-opacity))
}

:is(.tw-dark .dark\:tw-bg-gray-100) {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249/var(--tw-bg-opacity))
}

:is(.tw-dark .dark\:tw-bg-gray-600) {
  --tw-bg-opacity: 1;
  background-color: rgb(71 85 105/var(--tw-bg-opacity))
}

:is(.tw-dark .dark\:tw-bg-gray-700) {
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85/var(--tw-bg-opacity))
}

:is(.tw-dark .dark\:tw-bg-gray-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59/var(--tw-bg-opacity))
}

:is(.tw-dark .dark\:tw-bg-info-400\/10) {
  background-color: rgb(102 217 255/.1)
}

:is(.tw-dark .dark\:tw-bg-moon-300) {
  --tw-bg-opacity: 1;
  background-color: rgb(125 150 181/var(--tw-bg-opacity))
}

:is(.tw-dark .dark\:tw-bg-moon-400\/20) {
  background-color: rgb(93 124 162/.2)
}

:is(.tw-dark .dark\:tw-bg-moon-500) {
  --tw-bg-opacity: 1;
  background-color: rgb(74 99 130/var(--tw-bg-opacity))
}

:is(.tw-dark .dark\:tw-bg-moon-600) {
  --tw-bg-opacity: 1;
  background-color: rgb(56 74 97/var(--tw-bg-opacity))
}

:is(.tw-dark .dark\:tw-bg-moon-700) {
  --tw-bg-opacity: 1;
  background-color: rgb(33 45 59/var(--tw-bg-opacity))
}

:is(.tw-dark .dark\:tw-bg-moon-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(27 35 45/var(--tw-bg-opacity))
}

:is(.tw-dark .dark\:tw-bg-moon-800\/80) {
  background-color: rgb(27 35 45/.8)
}

:is(.tw-dark .dark\:tw-bg-moon-900) {
  --tw-bg-opacity: 1;
  background-color: rgb(13 18 23/var(--tw-bg-opacity))
}

:is(.tw-dark .dark\:tw-bg-moon-900\/90) {
  background-color: rgb(13 18 23/.9)
}

:is(.tw-dark .dark\:tw-bg-primary-400) {
  --tw-bg-opacity: 1;
  background-color: rgb(128 224 56/var(--tw-bg-opacity))
}

:is(.tw-dark .dark\:tw-bg-primary-400\/10) {
  background-color: rgb(128 224 56/.1)
}

:is(.tw-dark .dark\:tw-bg-primary-500) {
  --tw-bg-opacity: 1;
  background-color: rgb(75 204 0/var(--tw-bg-opacity))
}

:is(.tw-dark .dark\:tw-bg-success-400) {
  --tw-bg-opacity: 1;
  background-color: rgb(50 202 91/var(--tw-bg-opacity))
}

:is(.tw-dark .dark\:tw-bg-success-400\/10) {
  background-color: rgb(50 202 91/.1)
}

:is(.tw-dark .dark\:tw-bg-transparent) {
  background-color: transparent
}

:is(.tw-dark .dark\:tw-bg-warning-400\/10) {
  background-color: rgb(255 232 102/.1)
}

:is(.tw-dark .dark\:tw-bg-white) {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity))
}

:is(.tw-dark .dark\:tw-bg-white\/12) {
  background-color: rgb(255 255 255/.12)
}

:is(.tw-dark .dark\:tw-bg-opacity-10) {
  --tw-bg-opacity: 0.1
}

:is(.tw-dark .dark\:tw-bg-opacity-12) {
  --tw-bg-opacity: .12
}

:is(.tw-dark .dark\:tw-bg-opacity-20) {
  --tw-bg-opacity: 0.2
}

:is(.tw-dark .dark\:tw-bg-opacity-40) {
  --tw-bg-opacity: 0.4
}

:is(.tw-dark .dark\:tw-bg-opacity-5) {
  --tw-bg-opacity: 0.05
}

:is(.tw-dark .dark\:tw-bg-opacity-50) {
  --tw-bg-opacity: 0.5
}

:is(.tw-dark .dark\:tw-bg-opacity-90) {
  --tw-bg-opacity: 0.9
}

:is(.tw-dark .dark\:tw-from-dark-20) {
  --tw-gradient-from: #121212 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(18 18 18/0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)
}

:is(.tw-dark .dark\:tw-from-moon-900) {
  --tw-gradient-from: #0d1217 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(13 18 23/0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)
}

:is(.tw-dark .dark\:tw-font-gecko-dark-body) {
  font-family: Inter-Dark, Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol
}

:is(.tw-dark .dark\:\!tw-text-gray-50) {
  --tw-text-opacity: 1 !important;
  color: rgb(248 250 252/var(--tw-text-opacity)) !important
}

:is(.tw-dark .dark\:\!tw-text-moon-100) {
  --tw-text-opacity: 1 !important;
  color: rgb(190 203 218/var(--tw-text-opacity)) !important
}

:is(.tw-dark .dark\:\!tw-text-moon-200) {
  --tw-text-opacity: 1 !important;
  color: rgb(158 176 199/var(--tw-text-opacity)) !important
}

:is(.tw-dark .dark\:\!tw-text-moon-50) {
  --tw-text-opacity: 1 !important;
  color: rgb(223 229 236/var(--tw-text-opacity)) !important
}

:is(.tw-dark .dark\:\!tw-text-moon-500) {
  --tw-text-opacity: 1 !important;
  color: rgb(74 99 130/var(--tw-text-opacity)) !important
}

:is(.tw-dark .dark\:\!tw-text-success-400) {
  --tw-text-opacity: 1 !important;
  color: rgb(50 202 91/var(--tw-text-opacity)) !important
}

:is(.tw-dark .dark\:\!tw-text-white) {
  --tw-text-opacity: 1 !important;
  color: rgb(255 255 255/var(--tw-text-opacity)) !important
}

:is(.tw-dark .dark\:\!tw-text-white\/60) {
  color: rgb(255 255 255/.6) !important
}

:is(.tw-dark .dark\:tw-text-black) {
  --tw-text-opacity: 1;
  color: rgb(0 0 0/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-blue-400) {
  --tw-text-opacity: 1;
  color: rgb(96 165 250/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-danger-300) {
  --tw-text-opacity: 1;
  color: rgb(255 157 132/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-danger-400) {
  --tw-text-opacity: 1;
  color: rgb(255 120 102/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-danger-500) {
  --tw-text-opacity: 1;
  color: rgb(255 58 51/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-danger-900) {
  --tw-text-opacity: 1;
  color: rgb(122 9 44/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-gray-100) {
  --tw-text-opacity: 1;
  color: rgb(241 245 249/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-gray-200) {
  --tw-text-opacity: 1;
  color: rgb(239 242 245/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-gray-300) {
  --tw-text-opacity: 1;
  color: rgb(203 213 225/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-gray-400) {
  --tw-text-opacity: 1;
  color: rgb(148 163 184/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-gray-700) {
  --tw-text-opacity: 1;
  color: rgb(51 65 85/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-info-400) {
  --tw-text-opacity: 1;
  color: rgb(102 217 255/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-info-500) {
  --tw-text-opacity: 1;
  color: rgb(51 192 255/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-moon-100) {
  --tw-text-opacity: 1;
  color: rgb(190 203 218/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-moon-200) {
  --tw-text-opacity: 1;
  color: rgb(158 176 199/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-moon-50) {
  --tw-text-opacity: 1;
  color: rgb(223 229 236/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-moon-500) {
  --tw-text-opacity: 1;
  color: rgb(74 99 130/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-primary-400) {
  --tw-text-opacity: 1;
  color: rgb(128 224 56/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-primary-500) {
  --tw-text-opacity: 1;
  color: rgb(75 204 0/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-primary-900) {
  --tw-text-opacity: 1;
  color: rgb(11 97 0/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-purple-400) {
  --tw-text-opacity: 1;
  color: rgb(192 132 252/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-red-400) {
  --tw-text-opacity: 1;
  color: rgb(248 113 113/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-slate-50) {
  --tw-text-opacity: 1;
  color: rgb(248 250 252/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-success-300) {
  --tw-text-opacity: 1;
  color: rgb(91 228 115/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-success-400) {
  --tw-text-opacity: 1;
  color: rgb(50 202 91/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-success-500) {
  --tw-text-opacity: 1;
  color: rgb(0 168 62/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-warning-300) {
  --tw-text-opacity: 1;
  color: rgb(255 238 132/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-warning-400) {
  --tw-text-opacity: 1;
  color: rgb(255 232 102/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-warning-500) {
  --tw-text-opacity: 1;
  color: rgb(255 221 51/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-white) {
  --tw-text-opacity: 1;
  color: rgb(255 255 255/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-white-60) {
  color: hsla(0, 0%, 100%, .6)
}

:is(.tw-dark .dark\:tw-text-white-87) {
  color: hsla(0, 0%, 100%, .87)
}

:is(.tw-dark .dark\:tw-text-white\/38) {
  color: rgb(255 255 255/.38)
}

:is(.tw-dark .dark\:tw-text-yellow-400) {
  --tw-text-opacity: 1;
  color: rgb(250 204 21/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:tw-text-yellow-500) {
  --tw-text-opacity: 1;
  color: rgb(234 179 8/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:\!tw-text-opacity-60) {
  --tw-text-opacity: 0.6 !important
}

:is(.tw-dark .dark\:\!tw-text-opacity-87) {
  --tw-text-opacity: 0.87 !important
}

:is(.tw-dark .dark\:tw-text-opacity-38) {
  --tw-text-opacity: 0.38
}

:is(.tw-dark .dark\:tw-text-opacity-60) {
  --tw-text-opacity: 0.6
}

:is(.tw-dark .dark\:tw-text-opacity-87) {
  --tw-text-opacity: 0.87
}

:is(.tw-dark .dark\:tw-placeholder-white)::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(255 255 255/var(--tw-placeholder-opacity))
}

:is(.tw-dark .dark\:tw-placeholder-white):-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(255 255 255/var(--tw-placeholder-opacity))
}

:is(.tw-dark .dark\:tw-placeholder-white)::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(255 255 255/var(--tw-placeholder-opacity))
}

:is(.tw-dark .dark\:tw-placeholder-opacity-60)::-moz-placeholder {
  --tw-placeholder-opacity: 0.6
}

:is(.tw-dark .dark\:tw-placeholder-opacity-60):-ms-input-placeholder {
  --tw-placeholder-opacity: 0.6
}

:is(.tw-dark .dark\:tw-placeholder-opacity-60)::placeholder {
  --tw-placeholder-opacity: 0.6
}

:is(.tw-dark .dark\:tw-opacity-25) {
  opacity: .25
}

:is(.tw-dark .dark\:tw-opacity-30) {
  opacity: .3
}

:is(.tw-dark .dark\:tw-opacity-50) {
  opacity: .5
}

:is(.tw-dark .dark\:tw-opacity-60) {
  opacity: .6
}

:is(.tw-dark .dark\:tw-opacity-87) {
  opacity: .87
}

:is(.tw-dark .dark\:tw-shadow-\[inset_0_-1px_0_0_\#212D3B\]) {
  --tw-shadow: inset 0 -1px 0 0 #212d3b;
  --tw-shadow-colored: inset 0 -1px 0 0 var(--tw-shadow-color)
}

:is(.tw-dark .dark\:tw-shadow-\[inset_0_-1px_0_0_\#212D3B\]),
:is(.tw-dark .dark\:tw-shadow-secondaryShadowDark) {
  box-shadow: 0 0 transparent, 0 0 transparent, var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow)
}

:is(.tw-dark .dark\:tw-shadow-secondaryShadowDark) {
  --tw-shadow: 0 4px 0 0 #4a6382;
  --tw-shadow-colored: 0 4px 0 0 var(--tw-shadow-color)
}

:is(.tw-dark .dark\:\!tw-ring-primary-400) {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(128 224 56/var(--tw-ring-opacity)) !important
}

:is(.tw-dark .dark\:tw-ring-danger-500) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 58 51/var(--tw-ring-opacity))
}

:is(.tw-dark .dark\:tw-ring-gray-700) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(51 65 85/var(--tw-ring-opacity))
}

:is(.tw-dark .dark\:tw-ring-moon-600) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(56 74 97/var(--tw-ring-opacity))
}

:is(.tw-dark .dark\:tw-ring-moon-700) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(33 45 59/var(--tw-ring-opacity))
}

:is(.tw-dark .dark\:tw-ring-white) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 255 255/var(--tw-ring-opacity))
}

:is(.tw-dark .dark\:tw-ring-opacity-12) {
  --tw-ring-opacity: .12
}

:is(.tw-dark .dark\:tw-ring-opacity-5) {
  --tw-ring-opacity: 0.05
}

:is(.tw-dark .dark\:tw-ring-offset-moon-900) {
  --tw-ring-offset-color: #0d1217
}

:is(.tw-dark .dark\:tw-invert) {
  --tw-invert: invert(100%);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}

:is(.tw-dark .after\:dark\:tw-border-moon-600):after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(56 74 97/var(--tw-border-opacity))
}

:is(.tw-dark .after\:dark\:tw-bg-moon-50):after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(223 229 236/var(--tw-bg-opacity))
}

:is(.tw-dark .after\:dark\:tw-bg-\[url\(\'icons\/cross_dark\.svg\'\)\]):after {
  content: var(--tw-content);
  background-image: url(//static.coingecko.com/packs/media/stylesheets_v2/icons/cross_dark-691f2f020f7a4bf7cec9681f45171899.svg)
}

:is(.tw-dark .dark\:after\:tw-text-slate-50):after {
  content: var(--tw-content);
  --tw-text-opacity: 1;
  color: rgb(248 250 252/var(--tw-text-opacity))
}

:is(.tw-dark .checked\:dark\:\!tw-border-primary-600):checked {
  --tw-border-opacity: 1 !important;
  border-color: rgb(53 175 0/var(--tw-border-opacity)) !important
}

:is(.tw-dark .checked\:dark\:tw-bg-primary-500):checked {
  --tw-bg-opacity: 1;
  background-color: rgb(75 204 0/var(--tw-bg-opacity))
}

:is(.tw-dark .checked\:dark\:tw-bg-primary-600):checked {
  --tw-bg-opacity: 1;
  background-color: rgb(53 175 0/var(--tw-bg-opacity))
}

:is(.tw-dark .focus-within\:dark\:tw-border-primary-500):focus-within {
  --tw-border-opacity: 1;
  border-color: rgb(75 204 0/var(--tw-border-opacity))
}

:is(.tw-dark .dark\:focus-within\:tw-ring-primary-400:focus-within) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(128 224 56/var(--tw-ring-opacity))
}

:is(.tw-dark .dark\:hover\:tw-border-primary-400:hover) {
  --tw-border-opacity: 1;
  border-color: rgb(128 224 56/var(--tw-border-opacity))
}

:is(.tw-dark .dark\:hover\:tw-border-white:hover) {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255/var(--tw-border-opacity))
}

:is(.tw-dark .dark\:hover\:tw-border-opacity-24:hover) {
  --tw-border-opacity: .24
}

:is(.tw-dark .dark\:hover\:\!tw-bg-moon-800:hover) {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(27 35 45/var(--tw-bg-opacity)) !important
}

:is(.tw-dark .dark\:hover\:tw-bg-danger-300:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(255 157 132/var(--tw-bg-opacity))
}

:is(.tw-dark .dark\:hover\:tw-bg-moon-600:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(56 74 97/var(--tw-bg-opacity))
}

:is(.tw-dark .dark\:hover\:tw-bg-moon-700:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(33 45 59/var(--tw-bg-opacity))
}

:is(.tw-dark .dark\:hover\:tw-bg-primary-300:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(166 239 95/var(--tw-bg-opacity))
}

:is(.tw-dark .dark\:hover\:tw-bg-primary-400:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(128 224 56/var(--tw-bg-opacity))
}

:is(.tw-dark .dark\:hover\:tw-bg-white:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity))
}

:is(.tw-dark .hover\:dark\:\!tw-bg-moon-700):hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(33 45 59/var(--tw-bg-opacity)) !important
}

:is(.tw-dark .hover\:dark\:tw-bg-moon-700):hover {
  --tw-bg-opacity: 1;
  background-color: rgb(33 45 59/var(--tw-bg-opacity))
}

:is(.tw-dark .hover\:dark\:tw-bg-moon-800):hover {
  --tw-bg-opacity: 1;
  background-color: rgb(27 35 45/var(--tw-bg-opacity))
}

:is(.tw-dark .dark\:hover\:tw-bg-opacity-10:hover) {
  --tw-bg-opacity: 0.1
}

:is(.tw-dark .dark\:hover\:tw-bg-opacity-12:hover) {
  --tw-bg-opacity: .12
}

:is(.tw-dark .dark\:hover\:tw-bg-opacity-20:hover) {
  --tw-bg-opacity: 0.2
}

:is(.tw-dark .dark\:hover\:tw-bg-opacity-24:hover) {
  --tw-bg-opacity: .24
}

:is(.tw-dark .dark\:hover\:tw-bg-opacity-30:hover) {
  --tw-bg-opacity: 0.3
}

:is(.tw-dark .dark\:hover\:tw-bg-opacity-5:hover) {
  --tw-bg-opacity: 0.05
}

:is(.tw-dark .dark\:hover\:tw-bg-opacity-8:hover) {
  --tw-bg-opacity: .08
}

:is(.tw-dark .hover\:dark\:tw-bg-opacity-24):hover {
  --tw-bg-opacity: .24
}

:is(.tw-dark .dark\:hover\:tw-text-danger-900:hover) {
  --tw-text-opacity: 1;
  color: rgb(122 9 44/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:hover\:tw-text-moon-400:hover) {
  --tw-text-opacity: 1;
  color: rgb(93 124 162/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:hover\:tw-text-moon-50:hover) {
  --tw-text-opacity: 1;
  color: rgb(223 229 236/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:hover\:tw-text-primary-300:hover) {
  --tw-text-opacity: 1;
  color: rgb(166 239 95/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:hover\:tw-text-primary-400:hover) {
  --tw-text-opacity: 1;
  color: rgb(128 224 56/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:hover\:tw-text-primary-500:hover) {
  --tw-text-opacity: 1;
  color: rgb(75 204 0/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:hover\:tw-text-primary-900:hover) {
  --tw-text-opacity: 1;
  color: rgb(11 97 0/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:hover\:tw-text-white:hover) {
  --tw-text-opacity: 1;
  color: rgb(255 255 255/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:hover\:tw-text-opacity-70:hover) {
  --tw-text-opacity: 0.7
}

:is(.tw-dark .dark\:hover\:tw-text-opacity-87:hover) {
  --tw-text-opacity: 0.87
}

:is(.tw-dark .dark\:hover\:tw-shadow-secondaryHoverDark:hover),
:is(.tw-dark .hover\:dark\:tw-shadow-secondaryHoverDark):hover {
  --tw-shadow: 0 4px 0 0 #384a61;
  --tw-shadow-colored: 0 4px 0 0 var(--tw-shadow-color);
  box-shadow: 0 0 transparent, 0 0 transparent, var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow)
}

:is(.tw-dark .dark\:hover\:tw-ring-primary-400:hover) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(128 224 56/var(--tw-ring-opacity))
}

:is(.tw-dark .dark\:focus\:tw-border-primary-500:focus) {
  --tw-border-opacity: 1;
  border-color: rgb(75 204 0/var(--tw-border-opacity))
}

:is(.tw-dark .dark\:focus\:tw-bg-primary-500:focus) {
  --tw-bg-opacity: 1;
  background-color: rgb(75 204 0/var(--tw-bg-opacity))
}

:is(.tw-dark .dark\:focus\:tw-bg-opacity-10:focus) {
  --tw-bg-opacity: 0.1
}

:is(.tw-dark .dark\:focus\:tw-bg-opacity-20:focus) {
  --tw-bg-opacity: 0.2
}

:is(.tw-dark .dark\:focus\:tw-bg-opacity-30:focus) {
  --tw-bg-opacity: 0.3
}

:is(.tw-dark .dark\:focus\:tw-text-danger-900:focus) {
  --tw-text-opacity: 1;
  color: rgb(122 9 44/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:focus\:tw-text-moon-50:focus) {
  --tw-text-opacity: 1;
  color: rgb(223 229 236/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:focus\:tw-text-primary-900:focus) {
  --tw-text-opacity: 1;
  color: rgb(11 97 0/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:focus\:tw-text-white:focus) {
  --tw-text-opacity: 1;
  color: rgb(255 255 255/var(--tw-text-opacity))
}

:is(.tw-dark .dark\:focus\:tw-placeholder-opacity-38:focus)::-moz-placeholder {
  --tw-placeholder-opacity: .38
}

:is(.tw-dark .dark\:focus\:tw-placeholder-opacity-38:focus):-ms-input-placeholder {
  --tw-placeholder-opacity: .38
}

:is(.tw-dark .dark\:focus\:tw-placeholder-opacity-38:focus)::placeholder {
  --tw-placeholder-opacity: .38
}

:is(.tw-dark .dark\:focus\:tw-outline-none:focus) {
  outline: 2px solid transparent;
  outline-offset: 2px
}

:is(.tw-dark .dark\:focus\:tw-ring-primary-500:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(75 204 0/var(--tw-ring-opacity))
}

:is(.tw-dark .dark\:focus\:tw-ring-primary-700:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(35 146 0/var(--tw-ring-opacity))
}

:is(.tw-dark .dark\:active\:\!tw-shadow-secondaryActiveDark:active) {
  --tw-shadow: 0 2px 0 0 #384a61 !important;
  --tw-shadow-colored: 0 2px 0 0 var(--tw-shadow-color) !important;
  box-shadow: 0 0 transparent, 0 0 transparent, var(--tw-shadow) !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow) !important
}

:is(.tw-dark .dark\:active\:tw-shadow-secondaryActiveDark:active) {
  --tw-shadow: 0 2px 0 0 #384a61;
  --tw-shadow-colored: 0 2px 0 0 var(--tw-shadow-color);
  box-shadow: 0 0 transparent, 0 0 transparent, var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow)
}

.tw-peer:checked~:is(.tw-dark .peer-checked\:after\:dark\:tw-bg-moon-50):after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(223 229 236/var(--tw-bg-opacity))
}

@media (max-width:640px) {
  .max-\[640px\]\:tw-h-auto {
    height: auto
  }

  .max-\[640px\]\:tw-w-full {
    width: 100%
  }
}

@media (min-width:385px) {
  .min-\[385px\]\:tw-h-\[65px\] {
    height: 65px
  }

  .min-\[385px\]\:tw-min-h-\[70px\] {
    min-height: 70px
  }

  .min-\[385px\]\:tw-w-\[30px\] {
    width: 30px
  }

  .min-\[385px\]\:tw-space-y-6>:not([hidden])~:not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(1.5rem*(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(1.5rem*var(--tw-space-y-reverse))
  }
}

@media (min-width:640px) {
  .sm\:tw-absolute {
    position: absolute
  }

  .sm\:tw--left-28 {
    left: -7rem
  }

  .sm\:tw-order-1 {
    order: 1
  }

  .sm\:tw-order-2 {
    order: 2
  }

  .sm\:tw-col-start-1 {
    grid-column-start: 1
  }

  .sm\:tw-col-start-2 {
    grid-column-start: 2
  }

  .sm\:tw-mx-6 {
    margin-left: 1.5rem;
    margin-right: 1.5rem
  }

  .sm\:tw-mx-auto {
    margin-left: auto;
    margin-right: auto
  }

  .sm\:tw-my-6 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem
  }

  .sm\:\!tw-mt-10 {
    margin-top: 2.5rem !important
  }

  .sm\:tw-mb-0 {
    margin-bottom: 0
  }

  .sm\:tw-mb-12 {
    margin-bottom: 3rem
  }

  .sm\:tw-ml-10 {
    margin-left: 2.5rem
  }

  .sm\:tw-mr-4 {
    margin-right: 1rem
  }

  .sm\:tw-mt-0 {
    margin-top: 0
  }

  .sm\:tw-mt-2 {
    margin-top: .5rem
  }

  .sm\:tw-mt-24 {
    margin-top: 6rem
  }

  .sm\:tw-mt-4 {
    margin-top: 1rem
  }

  .sm\:tw-mt-5 {
    margin-top: 1.25rem
  }

  .sm\:tw-mt-6 {
    margin-top: 1.5rem
  }

  .sm\:tw-block {
    display: block
  }

  .sm\:tw-inline-block {
    display: inline-block
  }

  .sm\:tw-inline {
    display: inline
  }

  .sm\:tw-flex {
    display: flex
  }

  .sm\:tw-inline-flex {
    display: inline-flex
  }

  .sm\:tw-hidden {
    display: none
  }

  .sm\:tw-h-\[33\.3\%\] {
    height: 33.3%
  }

  .sm\:tw-h-\[926px\] {
    height: 926px
  }

  .sm\:tw-max-h-full {
    max-height: 100%
  }

  .sm\:tw-w-2\/4 {
    width: 50%
  }

  .sm\:tw-w-56 {
    width: 14rem
  }

  .sm\:tw-w-96 {
    width: 24rem
  }

  .sm\:tw-w-\[320px\] {
    width: 320px
  }

  .sm\:tw-w-full {
    width: 100%
  }

  .sm\:tw-max-w-5xl {
    max-width: 64rem
  }

  .sm\:tw-max-w-\[300px\] {
    max-width: 300px
  }

  .sm\:tw-max-w-lg {
    max-width: 32rem
  }

  .sm\:tw-max-w-md {
    max-width: 28rem
  }

  .sm\:tw-flex-1 {
    flex: 1 1
  }

  .sm\:tw--rotate-90 {
    --tw-rotate: -90deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }

  .sm\:tw-grid-flow-row-dense {
    grid-auto-flow: row dense
  }

  .sm\:tw-grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr))
  }

  .sm\:tw-grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr))
  }

  .sm\:tw-grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr))
  }

  .sm\:tw-grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr))
  }

  .sm\:tw-flex-row {
    flex-direction: row
  }

  .sm\:tw-items-start {
    align-items: flex-start
  }

  .sm\:tw-items-end {
    align-items: flex-end
  }

  .sm\:tw-justify-start {
    justify-content: flex-start
  }

  .sm\:tw-justify-between {
    justify-content: space-between
  }

  .sm\:tw-gap-3 {
    grid-gap: .75rem;
    gap: .75rem
  }

  .sm\:tw-gap-4 {
    grid-gap: 1rem;
    gap: 1rem
  }

  .sm\:tw-gap-x-2 {
    grid-column-gap: .5rem;
    -moz-column-gap: .5rem;
    column-gap: .5rem
  }

  .sm\:tw-space-x-8>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(2rem*var(--tw-space-x-reverse));
    margin-left: calc(2rem*(1 - var(--tw-space-x-reverse)))
  }

  .sm\:tw-overflow-hidden {
    overflow: hidden
  }

  .sm\:tw-rounded-lg {
    border-radius: .5rem
  }

  .sm\:tw-p-6 {
    padding: 1.5rem
  }

  .sm\:tw-px-0 {
    padding-left: 0;
    padding-right: 0
  }

  .sm\:tw-px-10 {
    padding-left: 2.5rem;
    padding-right: 2.5rem
  }

  .sm\:tw-px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem
  }

  .sm\:tw-py-0 {
    padding-top: 0;
    padding-bottom: 0
  }

  .sm\:tw-py-24 {
    padding-top: 6rem;
    padding-bottom: 6rem
  }

  .sm\:tw-py-3 {
    padding-top: .75rem;
    padding-bottom: .75rem
  }

  .sm\:tw-py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem
  }

  .sm\:tw-py-6 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem
  }

  .sm\:tw-pb-4 {
    padding-bottom: 1rem
  }

  .sm\:tw-pr-6 {
    padding-right: 1.5rem
  }

  .sm\:tw-pt-0 {
    padding-top: 0
  }

  .sm\:tw-text-left {
    text-align: left
  }

  .sm\:tw-text-center {
    text-align: center
  }

  .sm\:tw-align-middle {
    vertical-align: middle
  }

  .sm\:tw-text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem
  }

  .sm\:tw-text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem
  }

  .sm\:tw-text-base {
    font-size: 1rem;
    line-height: 1.5rem
  }

  .sm\:tw-text-sm {
    font-size: .875rem;
    line-height: 1.25rem
  }

  .sm\:tw-text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem
  }

  .sm\:tw-leading-none {
    line-height: 1
  }
}

@media (min-width:768px) {
  .md\:tw-absolute {
    position: absolute
  }

  .md\:tw--left-0 {
    left: 0
  }

  .md\:tw-bottom-40 {
    bottom: 10rem
  }

  .md\:tw-bottom-\[-12px\] {
    bottom: -12px
  }

  .md\:tw-bottom-\[-18px\] {
    bottom: -18px
  }

  .md\:tw-left-0 {
    left: 0
  }

  .md\:tw-left-\[36px\] {
    left: 36px
  }

  .md\:tw-left-\[38px\] {
    left: 38px
  }

  .md\:tw-left-\[48px\] {
    left: 48px
  }

  .md\:tw-left-\[72px\] {
    left: 72px
  }

  .md\:tw-right-2 {
    right: .5rem
  }

  .md\:tw-right-\[-2\.5rem\] {
    right: -2.5rem
  }

  .md\:tw-right-\[-38px\] {
    right: -38px
  }

  .md\:tw-top-\[unset\] {
    top: unset
  }

  .md\:tw-z-\[1200\] {
    z-index: 1200
  }

  .md\:tw-order-1 {
    order: 1
  }

  .md\:tw-order-2 {
    order: 2
  }

  .md\:tw-order-3 {
    order: 3
  }

  .md\:tw-col-auto {
    grid-column: auto
  }

  .md\:tw-col-span-2 {
    grid-column: span 2/span 2
  }

  .md\:tw-col-span-3 {
    grid-column: span 3/span 3
  }

  .md\:tw-col-span-4 {
    grid-column: span 4/span 4
  }

  .md\:tw-col-span-5 {
    grid-column: span 5/span 5
  }

  .md\:tw-col-span-7 {
    grid-column: span 7/span 7
  }

  .md\:tw-col-span-8 {
    grid-column: span 8/span 8
  }

  .md\:tw-col-start-2 {
    grid-column-start: 2
  }

  .md\:tw-col-start-4 {
    grid-column-start: 4
  }

  .md\:tw-col-end-7 {
    grid-column-end: 7
  }

  .md\:tw-m-3 {
    margin: .75rem
  }

  .md\:tw-mx-auto {
    margin-left: auto;
    margin-right: auto
  }

  .md\:tw-my-0 {
    margin-top: 0;
    margin-bottom: 0
  }

  .md\:tw-my-4 {
    margin-top: 1rem;
    margin-bottom: 1rem
  }

  .md\:tw--mt-4 {
    margin-top: -1rem
  }

  .md\:tw-mb-0 {
    margin-bottom: 0
  }

  .md\:tw-mb-2 {
    margin-bottom: .5rem
  }

  .md\:tw-mb-3 {
    margin-bottom: .75rem
  }

  .md\:tw-mb-4 {
    margin-bottom: 1rem
  }

  .md\:tw-mb-6 {
    margin-bottom: 1.5rem
  }

  .md\:tw-mb-8 {
    margin-bottom: 2rem
  }

  .md\:tw-mb-9 {
    margin-bottom: 2.25rem
  }

  .md\:tw-ml-2 {
    margin-left: .5rem
  }

  .md\:tw-ml-3 {
    margin-left: .75rem
  }

  .md\:tw-ml-4 {
    margin-left: 1rem
  }

  .md\:tw-ml-5 {
    margin-left: 1.25rem
  }

  .md\:tw-mr-0 {
    margin-right: 0
  }

  .md\:tw-mr-1 {
    margin-right: .25rem
  }

  .md\:tw-mr-4 {
    margin-right: 1rem
  }

  .md\:tw-mt-0 {
    margin-top: 0
  }

  .md\:tw-mt-1 {
    margin-top: .25rem
  }

  .md\:tw-mt-10 {
    margin-top: 2.5rem
  }

  .md\:tw-mt-12 {
    margin-top: 3rem
  }

  .md\:tw-mt-2 {
    margin-top: .5rem
  }

  .md\:tw-mt-3 {
    margin-top: .75rem
  }

  .md\:tw-mt-4 {
    margin-top: 1rem
  }

  .md\:tw-mt-6 {
    margin-top: 1.5rem
  }

  .md\:tw-mt-8 {
    margin-top: 2rem
  }

  .md\:tw-mt-9 {
    margin-top: 2.25rem
  }

  .md\:tw-block {
    display: block
  }

  .md\:tw-inline-block {
    display: inline-block
  }

  .md\:tw-inline {
    display: inline
  }

  .md\:tw-flex {
    display: flex
  }

  .md\:tw-grid {
    display: grid
  }

  .md\:tw-hidden {
    display: none
  }

  .md\:\!tw-h-11 {
    height: 2.75rem !important
  }

  .md\:\!tw-h-\[250px\] {
    height: 250px !important
  }

  .md\:tw-h-1\/2 {
    height: 50%
  }

  .md\:tw-h-100px {
    height: 6.25rem
  }

  .md\:tw-h-88 {
    height: 22rem
  }

  .md\:tw-h-\[100px\] {
    height: 100px
  }

  .md\:tw-h-\[70vh\] {
    height: 70vh
  }

  .md\:tw-h-\[90px\] {
    height: 90px
  }

  .md\:tw-h-auto {
    height: auto
  }

  .md\:tw-h-fit {
    height: -moz-fit-content;
    height: fit-content
  }

  .md\:tw-h-full {
    height: 100%
  }

  .md\:tw-max-h-\[90vh\] {
    max-height: 90vh
  }

  .md\:\!tw-min-h-screen {
    min-height: 100vh !important
  }

  .md\:tw-min-h-\[110px\] {
    min-height: 110px
  }

  .md\:tw-w-1\/2 {
    width: 50%
  }

  .md\:tw-w-11 {
    width: 2.75rem
  }

  .md\:tw-w-4\/5 {
    width: 80%
  }

  .md\:tw-w-4\/6 {
    width: 66.666667%
  }

  .md\:tw-w-60 {
    width: 15rem
  }

  .md\:tw-w-96 {
    width: 24rem
  }

  .md\:tw-w-\[40px\] {
    width: 40px
  }

  .md\:tw-w-\[420px\] {
    width: 420px
  }

  .md\:tw-w-\[650px\] {
    width: 650px
  }

  .md\:tw-w-auto {
    width: auto
  }

  .md\:tw-w-max {
    width: -moz-max-content;
    width: max-content
  }

  .md\:tw-min-w-\[33\%\] {
    min-width: 33%
  }

  .md\:tw-min-w-\[36px\] {
    min-width: 36px
  }

  .md\:tw-min-w-\[38px\] {
    min-width: 38px
  }

  .md\:tw-min-w-\[48px\] {
    min-width: 48px
  }

  .md\:tw-min-w-\[58px\] {
    min-width: 58px
  }

  .md\:tw-min-w-\[90px\] {
    min-width: 90px
  }

  .md\:tw-max-w-2xl {
    max-width: 42rem
  }

  .md\:tw-max-w-4xl {
    max-width: 56rem
  }

  .md\:tw-max-w-\[200px\] {
    max-width: 200px
  }

  .md\:tw-max-w-\[33\%\] {
    max-width: 33%
  }

  .md\:tw-max-w-\[420px\] {
    max-width: 420px
  }

  .md\:tw-max-w-full {
    max-width: 100%
  }

  .md\:tw-max-w-lg {
    max-width: 32rem
  }

  .md\:tw-max-w-md {
    max-width: 28rem
  }

  .md\:tw-flex-grow {
    flex-grow: 1
  }

  .md\:tw-basis-3\/4 {
    flex-basis: 75%
  }

  .md\:tw-basis-full {
    flex-basis: 100%
  }

  .md\:tw-translate-x-4 {
    --tw-translate-x: 1rem;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }

  .md\:tw-grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr))
  }

  .md\:tw-grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr))
  }

  .md\:tw-grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr))
  }

  .md\:tw-grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr))
  }

  .md\:tw-grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr))
  }

  .md\:tw-grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr))
  }

  .md\:tw-grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr))
  }

  .md\:tw-grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr))
  }

  .md\:tw-flex-row {
    flex-direction: row
  }

  .md\:tw-flex-row-reverse {
    flex-direction: row-reverse
  }

  .md\:tw-flex-col {
    flex-direction: column
  }

  .md\:tw-flex-wrap {
    flex-wrap: wrap
  }

  .md\:tw-items-start {
    align-items: flex-start
  }

  .md\:tw-items-center {
    align-items: center
  }

  .md\:tw-justify-start {
    justify-content: flex-start
  }

  .md\:tw-justify-end {
    justify-content: flex-end
  }

  .md\:tw-justify-center {
    justify-content: center
  }

  .md\:tw-justify-between {
    justify-content: space-between
  }

  .md\:tw-justify-around {
    justify-content: space-around
  }

  .md\:tw-gap-0 {
    grid-gap: 0;
    gap: 0
  }

  .md\:tw-gap-4 {
    grid-gap: 1rem;
    gap: 1rem
  }

  .md\:tw-gap-8 {
    grid-gap: 2rem;
    gap: 2rem
  }

  .md\:tw-gap-x-2 {
    grid-column-gap: .5rem;
    -moz-column-gap: .5rem;
    column-gap: .5rem
  }

  .md\:tw-gap-x-8 {
    grid-column-gap: 2rem;
    -moz-column-gap: 2rem;
    column-gap: 2rem
  }

  .md\:tw-gap-y-0 {
    grid-row-gap: 0;
    row-gap: 0
  }

  .md\:tw-gap-y-12 {
    grid-row-gap: 3rem;
    row-gap: 3rem
  }

  .md\:tw-gap-y-8 {
    grid-row-gap: 2rem;
    row-gap: 2rem
  }

  .md\:tw-space-x-0>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0px*var(--tw-space-x-reverse));
    margin-left: calc(0px*(1 - var(--tw-space-x-reverse)))
  }

  .md\:tw-space-x-5>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(1.25rem*var(--tw-space-x-reverse));
    margin-left: calc(1.25rem*(1 - var(--tw-space-x-reverse)))
  }

  .md\:tw-self-center {
    align-self: center
  }

  .md\:tw-rounded-md {
    border-radius: .375rem
  }

  .md\:tw-rounded-none {
    border-radius: 0
  }

  .md\:tw-rounded-xl {
    border-radius: .75rem
  }

  .md\:tw-border-l {
    border-left-width: 1px
  }

  .md\:tw-border-gray-200 {
    --tw-border-opacity: 1;
    border-color: rgb(239 242 245/var(--tw-border-opacity))
  }

  .md\:tw-px-10 {
    padding-left: 2.5rem;
    padding-right: 2.5rem
  }

  .md\:tw-px-16 {
    padding-left: 4rem;
    padding-right: 4rem
  }

  .md\:tw-px-4 {
    padding-left: 1rem;
    padding-right: 1rem
  }

  .md\:tw-py-0 {
    padding-top: 0;
    padding-bottom: 0
  }

  .md\:tw-py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem
  }

  .md\:tw-py-6 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem
  }

  .md\:tw-pb-0 {
    padding-bottom: 0
  }

  .md\:tw-pl-2 {
    padding-left: .5rem
  }

  .md\:tw-pl-3 {
    padding-left: .75rem
  }

  .md\:tw-pl-4 {
    padding-left: 1rem
  }

  .md\:tw-pr-0 {
    padding-right: 0
  }

  .md\:tw-pr-4 {
    padding-right: 1rem
  }

  .md\:tw-pr-8 {
    padding-right: 2rem
  }

  .md\:tw-pt-0 {
    padding-top: 0
  }

  .md\:tw-pt-4 {
    padding-top: 1rem
  }

  .md\:tw-text-left {
    text-align: left
  }

  .md\:tw-text-center {
    text-align: center
  }

  .md\:\!tw-text-2xl {
    font-size: 1.5rem !important;
    line-height: 2rem !important
  }

  .md\:\!tw-text-sm {
    font-size: .875rem !important;
    line-height: 1.25rem !important
  }

  .md\:\!tw-text-xl {
    font-size: 1.25rem !important;
    line-height: 1.75rem !important
  }

  .md\:tw-text-2xl {
    font-size: 1.5rem;
    line-height: 2rem
  }

  .md\:tw-text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem
  }

  .md\:tw-text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem
  }

  .md\:tw-text-5xl {
    font-size: 3rem;
    line-height: 1
  }

  .md\:tw-text-base {
    font-size: 1rem;
    line-height: 1.5rem
  }

  .md\:tw-text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem
  }

  .md\:tw-text-sm {
    font-size: .875rem;
    line-height: 1.25rem
  }

  .md\:tw-text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem
  }

  .md\:tw-font-bold {
    font-weight: 700
  }

  .md\:tw-leading-8 {
    line-height: 2rem
  }

  .md\:tw-text-gray-900 {
    --tw-text-opacity: 1;
    color: rgb(15 23 42/var(--tw-text-opacity))
  }

  .md\:tw-shadow-lg {
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0/0.1), 0 4px 6px -4px rgb(0 0 0/0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: 0 0 transparent, 0 0 transparent, var(--tw-shadow);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow)
  }

  :is(.tw-dark .dark\:md\:tw-border-moon-700) {
    --tw-border-opacity: 1;
    border-color: rgb(33 45 59/var(--tw-border-opacity))
  }

  :is(.tw-dark .dark\:md\:tw-text-moon-50) {
    --tw-text-opacity: 1;
    color: rgb(223 229 236/var(--tw-text-opacity))
  }
}

@media (min-width:1024px) {
  .lg\:tw-relative {
    position: relative
  }

  .lg\:tw--left-64 {
    left: -16rem
  }

  .lg\:tw-bottom-auto {
    bottom: auto
  }

  .lg\:tw-right-\[-48px\] {
    right: -48px
  }

  .lg\:-tw-order-1 {
    order: -1
  }

  .lg\:tw-order-1 {
    order: 1
  }

  .lg\:tw-order-2 {
    order: 2
  }

  .lg\:tw-order-none {
    order: 0
  }

  .lg\:tw-col-span-1 {
    grid-column: span 1/span 1
  }

  .lg\:tw-col-span-2 {
    grid-column: span 2/span 2
  }

  .lg\:tw-col-span-3 {
    grid-column: span 3/span 3
  }

  .lg\:tw-col-span-4 {
    grid-column: span 4/span 4
  }

  .lg\:tw-col-span-6 {
    grid-column: span 6/span 6
  }

  .lg\:tw-col-span-8 {
    grid-column: span 8/span 8
  }

  .lg\:tw-col-start-1 {
    grid-column-start: 1
  }

  .lg\:tw-col-start-2 {
    grid-column-start: 2
  }

  .lg\:tw-row-span-3 {
    grid-row: span 3/span 3
  }

  .lg\:tw-mx-0 {
    margin-left: 0;
    margin-right: 0
  }

  .lg\:tw-mx-3 {
    margin-left: .75rem;
    margin-right: .75rem
  }

  .lg\:tw-mx-60 {
    margin-left: 15rem;
    margin-right: 15rem
  }

  .lg\:tw-mx-8 {
    margin-left: 2rem;
    margin-right: 2rem
  }

  .lg\:tw-mx-96 {
    margin-left: 24rem;
    margin-right: 24rem
  }

  .lg\:tw-my-0 {
    margin-top: 0;
    margin-bottom: 0
  }

  .lg\:tw-my-12 {
    margin-top: 3rem;
    margin-bottom: 3rem
  }

  .lg\:tw-my-8 {
    margin-top: 2rem;
    margin-bottom: 2rem
  }

  .lg\:tw-mb-0 {
    margin-bottom: 0
  }

  .lg\:tw-mb-12 {
    margin-bottom: 3rem
  }

  .lg\:tw-mb-3 {
    margin-bottom: .75rem
  }

  .lg\:tw-mb-4 {
    margin-bottom: 1rem
  }

  .lg\:tw-mb-6 {
    margin-bottom: 1.5rem
  }

  .lg\:tw-mb-8 {
    margin-bottom: 2rem
  }

  .lg\:tw-ml-0 {
    margin-left: 0
  }

  .lg\:tw-ml-10 {
    margin-left: 2.5rem
  }

  .lg\:tw-ml-3 {
    margin-left: .75rem
  }

  .lg\:tw-ml-6 {
    margin-left: 1.5rem
  }

  .lg\:tw-mr-1 {
    margin-right: .25rem
  }

  .lg\:tw-mr-2 {
    margin-right: .5rem
  }

  .lg\:tw-mt-0 {
    margin-top: 0
  }

  .lg\:tw-mt-10 {
    margin-top: 2.5rem
  }

  .lg\:tw-mt-12 {
    margin-top: 3rem
  }

  .lg\:tw-mt-2 {
    margin-top: .5rem
  }

  .lg\:tw-mt-24 {
    margin-top: 6rem
  }

  .lg\:tw-mt-4 {
    margin-top: 1rem
  }

  .lg\:tw-mt-6 {
    margin-top: 1.5rem
  }

  .lg\:tw-mt-8 {
    margin-top: 2rem
  }

  .lg\:tw-mt-\[2px\] {
    margin-top: 2px
  }

  .lg\:tw-block {
    display: block
  }

  .lg\:\!tw-inline {
    display: inline !important
  }

  .lg\:tw-inline {
    display: inline
  }

  .lg\:tw-flex {
    display: flex
  }

  .lg\:\!tw-inline-flex {
    display: inline-flex !important
  }

  .lg\:tw-inline-flex {
    display: inline-flex
  }

  .lg\:tw-table {
    display: table
  }

  .lg\:tw-grid {
    display: grid
  }

  .lg\:tw-hidden {
    display: none
  }

  .lg\:tw-aspect-\[1\.4\/1\] {
    aspect-ratio: 1.4/1
  }

  .lg\:tw-h-\[110px\] {
    height: 110px
  }

  .lg\:tw-h-\[300px\] {
    height: 300px
  }

  .lg\:tw-h-\[400px\] {
    height: 400px
  }

  .lg\:tw-h-\[679px\] {
    height: 679px
  }

  .lg\:tw-h-auto {
    height: auto
  }

  .lg\:tw-h-screen {
    height: 100vh
  }

  .lg\:tw-w-1\/2 {
    width: 50%
  }

  .lg\:tw-w-1\/3 {
    width: 33.333333%
  }

  .lg\:tw-w-11\/12 {
    width: 91.666667%
  }

  .lg\:tw-w-14 {
    width: 3.5rem
  }

  .lg\:tw-w-2\/3 {
    width: 66.666667%
  }

  .lg\:tw-w-2\/5 {
    width: 40%
  }

  .lg\:tw-w-4\/6 {
    width: 66.666667%
  }

  .lg\:tw-w-52 {
    width: 13rem
  }

  .lg\:tw-w-56 {
    width: 14rem
  }

  .lg\:tw-w-60 {
    width: 15rem
  }

  .lg\:tw-w-\[192px\] {
    width: 192px
  }

  .lg\:tw-w-auto {
    width: auto
  }

  .lg\:tw-w-full {
    width: 100%
  }

  .lg\:tw-min-w-56 {
    min-width: 14rem
  }

  .lg\:tw-min-w-\[200px\] {
    min-width: 200px
  }

  .lg\:tw-min-w-\[250px\] {
    min-width: 250px
  }

  .lg\:tw-min-w-\[330px\] {
    min-width: 330px
  }

  .lg\:tw-max-w-7xl {
    max-width: 80rem
  }

  .lg\:tw-max-w-\[20rem\] {
    max-width: 20rem
  }

  .lg\:tw-max-w-\[320px\] {
    max-width: 320px
  }

  .lg\:tw-max-w-\[400px\] {
    max-width: 400px
  }

  .lg\:tw-max-w-\[500px\] {
    max-width: 500px
  }

  .lg\:tw-max-w-lg {
    max-width: 32rem
  }

  .lg\:tw-max-w-none {
    max-width: none
  }

  .lg\:tw-flex-1 {
    flex: 1 1
  }

  .lg\:tw-cursor-auto {
    cursor: auto
  }

  .lg\:tw-snap-none {
    -ms-scroll-snap-type: none;
    scroll-snap-type: none
  }

  .lg\:tw-grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr))
  }

  .lg\:tw-grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr))
  }

  .lg\:tw-grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr))
  }

  .lg\:tw-grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr))
  }

  .lg\:tw-grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr))
  }

  .lg\:tw-grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr))
  }

  .lg\:tw-grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr))
  }

  .lg\:tw-flex-row {
    flex-direction: row
  }

  .lg\:tw-flex-col {
    flex-direction: column
  }

  .lg\:tw-items-start {
    align-items: flex-start
  }

  .lg\:tw-items-center {
    align-items: center
  }

  .lg\:tw-gap-12 {
    grid-gap: 3rem;
    gap: 3rem
  }

  .lg\:tw-gap-2 {
    grid-gap: .5rem;
    gap: .5rem
  }

  .lg\:tw-gap-24 {
    grid-gap: 6rem;
    gap: 6rem
  }

  .lg\:tw-gap-4 {
    grid-gap: 1rem;
    gap: 1rem
  }

  .lg\:tw-gap-6 {
    grid-gap: 1.5rem;
    gap: 1.5rem
  }

  .lg\:tw-gap-8 {
    grid-gap: 2rem;
    gap: 2rem
  }

  .lg\:tw-gap-x-4 {
    grid-column-gap: 1rem;
    -moz-column-gap: 1rem;
    column-gap: 1rem
  }

  .lg\:tw-gap-x-5 {
    grid-column-gap: 1.25rem;
    -moz-column-gap: 1.25rem;
    column-gap: 1.25rem
  }

  .lg\:tw-gap-x-8 {
    grid-column-gap: 2rem;
    -moz-column-gap: 2rem;
    column-gap: 2rem
  }

  .lg\:tw-gap-y-12 {
    grid-row-gap: 3rem;
    row-gap: 3rem
  }

  .lg\:tw-gap-y-3 {
    grid-row-gap: .75rem;
    row-gap: .75rem
  }

  .lg\:tw-space-x-8>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(2rem*var(--tw-space-x-reverse));
    margin-left: calc(2rem*(1 - var(--tw-space-x-reverse)))
  }

  .lg\:tw-space-y-12>:not([hidden])~:not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(3rem*(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(3rem*var(--tw-space-y-reverse))
  }

  .lg\:tw-space-y-4>:not([hidden])~:not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(1rem*(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(1rem*var(--tw-space-y-reverse))
  }

  .lg\:tw-divide-x>:not([hidden])~:not([hidden]) {
    --tw-divide-x-reverse: 0;
    border-right-width: calc(1px*var(--tw-divide-x-reverse));
    border-left-width: calc(1px*(1 - var(--tw-divide-x-reverse)))
  }

  .lg\:tw-overflow-y-auto {
    overflow-y: auto
  }

  .lg\:tw-overflow-x-hidden {
    overflow-x: hidden
  }

  .lg\:tw-overflow-x-visible {
    overflow-x: visible
  }

  .lg\:tw-border-0 {
    border-width: 0
  }

  .lg\:tw-border-b-0 {
    border-bottom-width: 0
  }

  .lg\:tw-border-r {
    border-right-width: 1px
  }

  .lg\:tw-border-t-0 {
    border-top-width: 0
  }

  .lg\:tw-border-gray-200 {
    --tw-border-opacity: 1;
    border-color: rgb(239 242 245/var(--tw-border-opacity))
  }

  .lg\:tw-p-5 {
    padding: 1.25rem
  }

  .lg\:tw-p-6 {
    padding: 1.5rem
  }

  .lg\:tw-px-0 {
    padding-left: 0;
    padding-right: 0
  }

  .lg\:tw-px-32 {
    padding-left: 8rem;
    padding-right: 8rem
  }

  .lg\:tw-px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem
  }

  .lg\:tw-px-8 {
    padding-left: 2rem;
    padding-right: 2rem
  }

  .lg\:tw-py-0 {
    padding-top: 0;
    padding-bottom: 0
  }

  .lg\:tw-py-2 {
    padding-top: .5rem;
    padding-bottom: .5rem
  }

  .lg\:tw-py-3 {
    padding-top: .75rem;
    padding-bottom: .75rem
  }

  .lg\:tw-py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem
  }

  .lg\:tw-pb-0 {
    padding-bottom: 0
  }

  .lg\:tw-pb-16 {
    padding-bottom: 4rem
  }

  .lg\:tw-pb-24 {
    padding-bottom: 6rem
  }

  .lg\:tw-pb-4 {
    padding-bottom: 1rem
  }

  .lg\:tw-pl-0 {
    padding-left: 0
  }

  .lg\:tw-pl-12 {
    padding-left: 3rem
  }

  .lg\:tw-pl-4 {
    padding-left: 1rem
  }

  .lg\:tw-pr-12 {
    padding-right: 3rem
  }

  .lg\:tw-pr-8 {
    padding-right: 2rem
  }

  .lg\:tw-pt-16 {
    padding-top: 4rem
  }

  .lg\:tw-pt-6 {
    padding-top: 1.5rem
  }

  .lg\:tw-text-left {
    text-align: left
  }

  .lg\:tw-text-center {
    text-align: center
  }

  .lg\:tw-text-start {
    text-align: start
  }

  .lg\:\!tw-text-4xl {
    font-size: 2.25rem !important;
    line-height: 2.5rem !important
  }

  .lg\:\!tw-text-5xl {
    font-size: 3rem !important;
    line-height: 1 !important
  }

  .lg\:\!tw-text-base {
    font-size: 1rem !important;
    line-height: 1.5rem !important
  }

  .lg\:tw-text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem
  }

  .lg\:tw-text-5xl {
    font-size: 3rem;
    line-height: 1
  }

  .lg\:tw-text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem
  }

  .lg\:tw-text-sm {
    font-size: .875rem;
    line-height: 1.25rem
  }

  .lg\:tw-text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem
  }

  .lg\:tw-shadow-none {
    --tw-shadow: 0 0 transparent;
    --tw-shadow-colored: 0 0 transparent;
    box-shadow: 0 0 transparent, 0 0 transparent, var(--tw-shadow);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow)
  }
}

@media (min-width:1200px) {
  .\32lg\:tw-static {
    position: static
  }

  .\32lg\:tw-relative {
    position: relative
  }

  .\32lg\:\!tw-left-\[unset\] {
    left: unset !important
  }

  .\32lg\:\!tw-right-0 {
    right: 0 !important
  }

  .\32lg\:tw--left-64 {
    left: -16rem
  }

  .\32lg\:tw-left-\[unset\] {
    left: unset
  }

  .\32lg\:tw-right-\[unset\] {
    right: unset
  }

  .\32lg\:tw-top-44 {
    top: 11rem
  }

  .\32lg\:tw-order-1 {
    order: 1
  }

  .\32lg\:tw-order-2 {
    order: 2
  }

  .\32lg\:tw-order-none {
    order: 0
  }

  .\32lg\:tw-col-span-1 {
    grid-column: span 1/span 1
  }

  .\32lg\:tw-col-span-2 {
    grid-column: span 2/span 2
  }

  .\32lg\:tw-col-span-4 {
    grid-column: span 4/span 4
  }

  .\32lg\:tw-col-start-2 {
    grid-column-start: 2
  }

  .\32lg\:tw-row-span-1 {
    grid-row: span 1/span 1
  }

  .\32lg\:tw-row-span-2 {
    grid-row: span 2/span 2
  }

  .\32lg\:tw-row-span-3 {
    grid-row: span 3/span 3
  }

  .\32lg\:tw-row-start-1 {
    grid-row-start: 1
  }

  .\32lg\:tw-row-start-2 {
    grid-row-start: 2
  }

  .\32lg\:tw-row-start-4 {
    grid-row-start: 4
  }

  .\32lg\:-tw-my-2 {
    margin-top: -.5rem;
    margin-bottom: -.5rem
  }

  .\32lg\:-tw-my-2\.5 {
    margin-top: -.625rem;
    margin-bottom: -.625rem
  }

  .\32lg\:tw-mx-8 {
    margin-left: 2rem;
    margin-right: 2rem
  }

  .\32lg\:tw-my-24 {
    margin-top: 6rem;
    margin-bottom: 6rem
  }

  .\32lg\:tw-mb-0 {
    margin-bottom: 0
  }

  .\32lg\:tw-mb-1 {
    margin-bottom: .25rem
  }

  .\32lg\:tw-mb-10 {
    margin-bottom: 2.5rem
  }

  .\32lg\:tw-mb-12 {
    margin-bottom: 3rem
  }

  .\32lg\:tw-mb-24 {
    margin-bottom: 6rem
  }

  .\32lg\:tw-mb-4 {
    margin-bottom: 1rem
  }

  .\32lg\:tw-mb-5 {
    margin-bottom: 1.25rem
  }

  .\32lg\:tw-mb-6 {
    margin-bottom: 1.5rem
  }

  .\32lg\:tw-ml-1 {
    margin-left: .25rem
  }

  .\32lg\:tw-ml-4 {
    margin-left: 1rem
  }

  .\32lg\:tw-ml-8 {
    margin-left: 2rem
  }

  .\32lg\:tw-mr-0 {
    margin-right: 0
  }

  .\32lg\:tw-mr-0\.5 {
    margin-right: .125rem
  }

  .\32lg\:tw-mr-4 {
    margin-right: 1rem
  }

  .\32lg\:tw-mr-8 {
    margin-right: 2rem
  }

  .\32lg\:tw-mt-0 {
    margin-top: 0
  }

  .\32lg\:tw-mt-10 {
    margin-top: 2.5rem
  }

  .\32lg\:tw-mt-6 {
    margin-top: 1.5rem
  }

  .\32lg\:\!tw-block {
    display: block !important
  }

  .\32lg\:tw-block {
    display: block
  }

  .\32lg\:tw-inline {
    display: inline
  }

  .\32lg\:tw-flex {
    display: flex
  }

  .\32lg\:\!tw-hidden {
    display: none !important
  }

  .\32lg\:tw-hidden {
    display: none
  }

  .\32lg\:\!tw-h-10 {
    height: 2.5rem !important
  }

  .\32lg\:tw-h-11 {
    height: 2.75rem
  }

  .\32lg\:tw-h-12 {
    height: 3rem
  }

  .\32lg\:tw-h-auto {
    height: auto
  }

  .\32lg\:tw-max-h-\[28rem\] {
    max-height: 28rem
  }

  .\32lg\:\!tw-w-52 {
    width: 13rem !important
  }

  .\32lg\:tw-w-1\/2 {
    width: 50%
  }

  .\32lg\:tw-w-5\/12 {
    width: 41.666667%
  }

  .\32lg\:tw-w-52 {
    width: 13rem
  }

  .\32lg\:tw-w-9 {
    width: 2.25rem
  }

  .\32lg\:tw-w-\[600px\] {
    width: 600px
  }

  .\32lg\:tw-w-\[768px\] {
    width: 768px
  }

  .\32lg\:tw-w-auto {
    width: auto
  }

  .\32lg\:tw-w-full {
    width: 100%
  }

  .\32lg\:tw-min-w-\[180px\] {
    min-width: 180px
  }

  .\32lg\:tw-min-w-\[220px\] {
    min-width: 220px
  }

  .\32lg\:tw-max-w-\[500px\] {
    max-width: 500px
  }

  .\32lg\:tw-flex-1 {
    flex: 1 1
  }

  .\32lg\:tw-rotate-0 {
    --tw-rotate: 0deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }

  .\32lg\:tw-cursor-pointer {
    cursor: pointer
  }

  .\32lg\:tw-grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr))
  }

  .\32lg\:tw-grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr))
  }

  .\32lg\:tw-grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr))
  }

  .\32lg\:tw-grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr))
  }

  .\32lg\:tw-grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr))
  }

  .\32lg\:tw-grid-rows-none {
    grid-template-rows: none
  }

  .\32lg\:tw-flex-row {
    flex-direction: row
  }

  .\32lg\:tw-items-center {
    align-items: center
  }

  .\32lg\:tw-justify-center {
    justify-content: center
  }

  .\32lg\:tw-gap-9 {
    grid-gap: 2.25rem;
    gap: 2.25rem
  }

  .\32lg\:tw-gap-x-1 {
    grid-column-gap: .25rem;
    -moz-column-gap: .25rem;
    column-gap: .25rem
  }

  .\32lg\:tw-overflow-hidden {
    overflow: hidden
  }

  .\32lg\:tw-overflow-y-auto {
    overflow-y: auto
  }

  .\32lg\:tw-overflow-x-visible {
    overflow-x: visible
  }

  .\32lg\:tw-border-r {
    border-right-width: 1px
  }

  .\32lg\:tw-p-10 {
    padding: 2.5rem
  }

  .\32lg\:tw-p-2 {
    padding: .5rem
  }

  .\32lg\:tw-p-2\.5 {
    padding: .625rem
  }

  .\32lg\:tw-p-4 {
    padding: 1rem
  }

  .\32lg\:tw-p-6 {
    padding: 1.5rem
  }

  .\32lg\:\!tw-px-0 {
    padding-left: 0 !important;
    padding-right: 0 !important
  }

  .\32lg\:\!tw-px-2 {
    padding-left: .5rem !important;
    padding-right: .5rem !important
  }

  .\32lg\:\!tw-px-2\.5 {
    padding-left: .625rem !important;
    padding-right: .625rem !important
  }

  .\32lg\:tw-px-0 {
    padding-left: 0;
    padding-right: 0
  }

  .\32lg\:tw-px-4 {
    padding-left: 1rem;
    padding-right: 1rem
  }

  .\32lg\:tw-py-0 {
    padding-top: 0;
    padding-bottom: 0
  }

  .\32lg\:tw-py-2 {
    padding-top: .5rem;
    padding-bottom: .5rem
  }

  .\32lg\:tw-py-2\.5 {
    padding-top: .625rem;
    padding-bottom: .625rem
  }

  .\32lg\:tw-py-3 {
    padding-top: .75rem;
    padding-bottom: .75rem
  }

  .\32lg\:\!tw-pl-2 {
    padding-left: .5rem !important
  }

  .\32lg\:tw-pb-0 {
    padding-bottom: 0
  }

  .\32lg\:tw-pb-9 {
    padding-bottom: 2.25rem
  }

  .\32lg\:tw-pl-2 {
    padding-left: .5rem
  }

  .\32lg\:tw-pl-2\.5 {
    padding-left: .625rem
  }

  .\32lg\:tw-pl-6 {
    padding-left: 1.5rem
  }

  .\32lg\:tw-pr-0 {
    padding-right: 0
  }

  .\32lg\:tw-pr-6 {
    padding-right: 1.5rem
  }

  .\32lg\:tw-pt-0 {
    padding-top: 0
  }

  .\32lg\:\!tw-text-lg {
    font-size: 1.125rem !important;
    line-height: 1.75rem !important
  }

  .\32lg\:\!tw-text-sm {
    font-size: .875rem !important;
    line-height: 1.25rem !important
  }

  .\32lg\:tw-text-base {
    font-size: 1rem;
    line-height: 1.5rem
  }

  .\32lg\:tw-text-sm {
    font-size: .875rem;
    line-height: 1.25rem
  }

  .\32lg\:\!tw-text-primary-500 {
    --tw-text-opacity: 1 !important;
    color: rgb(75 204 0/var(--tw-text-opacity)) !important
  }

  .\32lg\:tw-shadow-lg {
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0/0.1), 0 4px 6px -4px rgb(0 0 0/0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)
  }

  .\32lg\:tw-shadow-lg,
  .\32lg\:tw-shadow-none {
    box-shadow: 0 0 transparent, 0 0 transparent, var(--tw-shadow);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow)
  }

  .\32lg\:tw-shadow-none {
    --tw-shadow: 0 0 transparent;
    --tw-shadow-colored: 0 0 transparent
  }

  :is(.tw-dark .\32lg\:dark\:\!tw-text-primary-500) {
    --tw-text-opacity: 1 !important;
    color: rgb(75 204 0/var(--tw-text-opacity)) !important
  }
}

@media (min-width:1280px) {
  .xl\:tw-fixed {
    position: fixed
  }

  .xl\:tw-right-36 {
    right: 9rem
  }

  .xl\:tw-col-span-5 {
    grid-column: span 5/span 5
  }

  .xl\:tw-mt-0 {
    margin-top: 0
  }

  .xl\:tw-grid {
    display: grid
  }

  .xl\:tw-h-40 {
    height: 10rem
  }

  .xl\:tw-h-\[120px\] {
    height: 120px
  }

  .xl\:tw-w-44 {
    width: 11rem
  }

  .xl\:tw-w-72 {
    width: 18rem
  }

  .xl\:tw-w-\[120px\] {
    width: 120px
  }

  .xl\:tw-min-w-\[250px\] {
    min-width: 250px
  }

  .xl\:tw-max-w-2xl {
    max-width: 42rem
  }

  .xl\:tw-grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr))
  }

  .xl\:tw-grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr))
  }

  .xl\:tw-grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr))
  }

  .xl\:tw-grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr))
  }

  .xl\:tw-grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr))
  }

  .xl\:tw-grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr))
  }

  .xl\:tw-flex-row {
    flex-direction: row
  }

  .xl\:tw-gap-8 {
    grid-gap: 2rem;
    gap: 2rem
  }

  .xl\:tw-gap-x-9 {
    grid-column-gap: 2.25rem;
    -moz-column-gap: 2.25rem;
    column-gap: 2.25rem
  }

  .xl\:tw-gap-y-4 {
    grid-row-gap: 1rem;
    row-gap: 1rem
  }

  .xl\:tw-space-x-6>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(1.5rem*var(--tw-space-x-reverse));
    margin-left: calc(1.5rem*(1 - var(--tw-space-x-reverse)))
  }

  .xl\:tw-px-16 {
    padding-left: 4rem;
    padding-right: 4rem
  }

  .xl\:tw-px-24 {
    padding-left: 6rem;
    padding-right: 6rem
  }

  .xl\:tw-pb-0 {
    padding-bottom: 0
  }

  .xl\:tw-text-6xl {
    font-size: 3.75rem;
    line-height: 1
  }

  .xl\:tw-text-base {
    font-size: 1rem;
    line-height: 1.5rem
  }

  .xl\:tw-text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem
  }
}

@media (min-width:1536px) {
  .\32xl\:tw-left-0 {
    left: 0
  }

  .\32xl\:\!tw-inline-block {
    display: inline-block !important
  }

  .\32xl\:tw-min-w-1\/4 {
    min-width: 25%
  }

  .\32xl\:tw-justify-center {
    justify-content: center
  }
}

.\[\&\>\*\:last-child\]\:\!tw-border-b>:last-child {
  border-bottom-width: 1px !important
}

.\[\&\>\*\]\:tw-mx-auto>* {
  margin-left: auto;
  margin-right: auto
}

.\[\&\>a\]\:tw-whitespace-nowrap>a {
  white-space: nowrap
}

.\[\&\>a\]\:tw-text-2xl>a {
  font-size: 1.5rem;
  line-height: 2rem
}

.\[\&\>li\]\:marker\:tw-content-\[\'\A7_\'\] *>li::marker {
  --tw-content: "§ ";
  content: var(--tw-content)
}

.\[\&\>li\]\:marker\:tw-content-\[\'\A7_\'\]>li::marker {
  --tw-content: "§ ";
  content: var(--tw-content)
}

.\[\&\>ol\>li\>ul\]\:tw-list-outside>ol>li>ul {
  list-style-position: outside
}

.\[\&\>ol\>li\>ul\]\:tw-list-disc>ol>li>ul {
  list-style-type: disc
}

.\[\&\>ol\>li\>ul\]\:tw-pl-5>ol>li>ul {
  padding-left: 1.25rem
}

.\[\&\>ol\]\:tw-list-inside>ol {
  list-style-position: inside
}

.\[\&\>ol\]\:tw-list-\[lower-roman\]>ol {
  list-style-type: lower-roman
}

.\[\&\>ol\]\:tw-space-y-4>ol>:not([hidden])~:not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem*(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem*var(--tw-space-y-reverse))
}

.\[\&\>ol\]\:tw-pl-5>ol {
  padding-left: 1.25rem
}

.\[\&\>tbody\:first-of-type\]\:\!tw-border-t-0>tbody:first-of-type {
  border-top-width: 0 !important
}

.\[\&\>tbody\:first-of-type\]\:\!tw-border-t-2>tbody:first-of-type {
  border-top-width: 2px !important
}

.\[\&\>tr\>th\]\:\!tw-whitespace-normal>tr>th {
  white-space: normal !important
}

.\[\&\>ul\]\:tw-list-outside>ul {
  list-style-position: outside
}

.\[\&\>ul\]\:tw-list-disc>ul {
  list-style-type: disc
}

.\[\&\>ul\]\:tw-pl-5>ul {
  padding-left: 1.25rem
}

.\[\&_\.gecko-chip\]\:tw-cursor-pointer .gecko-chip {
  cursor: pointer
}

.\[\&_img\]\:tw-max-w-none img {
  max-width: none
}

.\[\&_li\]\:tw-mx-8 li {
  margin-left: 2rem;
  margin-right: 2rem
}

.\[\&_p\]\:tw-pb-4 p {
  padding-bottom: 1rem
}

.\[\&_td\]\:tw-pt-6 td {
  padding-top: 1.5rem
}

.\[\&_ul\]\:tw-ml-4 ul {
  margin-left: 1rem
}
</style>
