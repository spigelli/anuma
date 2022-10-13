// src/pages/_app.tsx
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { MantineProvider, Global } from "@mantine/core";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          headings: {
            fontFamily: 'Ubuntu',
            fontWeight: 400,
            sizes: {
              h3: {
                fontSize: 42.5,
                fontWeight: 400,
                lineHeight: '48px',
              },
              h4: {
                fontSize: 34,
                fontWeight: 400,
                lineHeight: '39px',
              },
            },
          },
          fontSizes: {
            xs: 10,
            sm: 12,
            md: 27,
            lg: 16,
            xl: 20,
          },
          fontFamily: 'Ubuntu, sans-serif',
        }}
      >
        <Global
          styles={[
            {
              '@font-face': {
                fontFamily: 'Ubuntu',
                src: ` url(https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKfw72nU6AFw.woff2) format('woff2')`,
                fontWeight: 400,
                fontStyle: 'normal',
              },
            },
          ]}
        />

        <Component {...pageProps} />
      </MantineProvider>

    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
