import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Script from "next/script";
import ScrollContext from "@/components/ScrollContext";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-SWV6JRQWMQ";
const FB_PIXEL_ID = "1451782203097846";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairSerif = Playfair_Display({
  variable: "--font-playfair-serif",
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "TradieQuote AI",
  description: "AI-powered instant quotes for tradies",
  verification: {
    google: "akpUO33Rh8NWkmI-P3iIu0vLNnHwsPi4jJZZy8PdCvM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full min-w-0 flex-col overflow-x-hidden">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "w9g28oako7");
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <Script id="tracking-smoke-test" strategy="afterInteractive">
          {`
            (function () {
              var once = false;
              var start = Date.now();

              function fireAll(source) {
                var payload = {
                  source: source,
                  test_timestamp: new Date().toISOString(),
                  page_path: window.location.pathname,
                };

                if (typeof window.gtag === "function") {
                  window.gtag("event", "tracking_smoke_test", payload);
                }

                if (typeof window.fbq === "function") {
                  window.fbq("trackCustom", "TrackingSmokeTest", payload);
                }

                if (typeof window.clarity === "function") {
                  window.clarity("event", "tracking_smoke_test");
                  window.clarity("set", "tracking_test_source", String(source));
                }
              }

              window.runTrackingSmokeTest = function () {
                fireAll("manual_console");
                console.info("[tracking] Smoke test fired for GA, Meta Pixel, and Clarity.");
              };

              window.addEventListener("click", function () {
                if (once) return;
                once = true;
                fireAll("first_click");
              }, { once: true });

              window.addEventListener("scroll", function () {
                if (window.scrollY < 250) return;
                fireAll("scroll_depth_250");
              }, { once: true, passive: true });

              setTimeout(function () {
                fireAll("time_on_page_15s");
              }, 15000);

              console.info("[tracking] Helper loaded. Run window.runTrackingSmokeTest() in console.");
            })();
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        <ScrollContext>{children}</ScrollContext>
      </body>
    </html>
  );
}
