import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { signIn, signOut, useSession } from "next-auth/react";
import { Container, Title, Button, Box, Text } from "@mantine/core";
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  const { data } = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>aNUma</title>
        <meta name="description" content="Digital group therapeutics combining virtual reality (VR) with the science of psychedelics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="/images/hands.png"
        alt="Background image"
        objectFit="cover"
        layout="fill"
        style={{
          zIndex: -1,
        }}
      />
      <Container
        size="xl"
        mx={62.5}
        p={0}
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          // alignItems: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: 574,
            paddingBottom: 10,
          }}
        >
          <Box
            sx={{
              paddingRight: '17px !important',
              paddingBottom: '34px !important',
              paddingTop: '0 !important',
            }}
          >
            <Image
              src="/images/logo-white.png"
              alt="aNUma logo"
              height="157.44"
              width="574"
              layout="fixed"
            />
          </Box>
          <Title
            order={3}
            color="white"
            mb={34}
          >
            Digital group therapeutics combining virtual reality (VR) with the science of psychedelics
          </Title>
          <Title
            order={4}
            color="white"
            mb={34}
          >
            Inventing the future of authentic, human connection to address the global mental health crisis
          </Title>
          <Link
            href="/try"
            passHref
          >
            <Button
              component="a"
              variant="outline"
              color="white"
              size="xl"
              radius="xl"
              sx={{
                border: '2px solid white !important',
                color: 'white !important',
                ['&:hover']: {
                  color: 'black !important',
                  backgroundColor: 'white !important',
                },
                transition: 'all 0.1s ease-in-out',
              }}
            >
              TRY ANUMA
            </Button>
          </Link>
        </Box>
      </Container>
      <Box
        sx={{
          backgroundColor: 'rgb(222, 242, 247)',
          height: 487.5,
          padding: 110,
          display: 'flex',
          width: '100vw',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          sx={{
            maxWidth: 958,
            textAlign: 'center',
          }}
        >
          aNUma’s immersive group experiences leave participants feeling calmer, happier and more connected. Backed by research, we are transforming mental health and wellbeing by combining multi-user virtual reality with psychedelic science and group therapeutic processes.
        </Text>
        <Link
          href="/science"
          passHref
        >
          <Button
            component="a"
            variant="outline"
            color="black"
            size="xl"
            radius="xl"
            sx={{
              border: '2px solid black !important',
              color: 'black !important',
              ['&:hover']: {
                color: 'white !important',
                backgroundColor: 'black !important',
              },
              transition: 'all 0.1s ease-in-out',
            }}
          >
            LEARN ABOUT THE SCIENCE
          </Button>
        </Link>
      </Box>
    </>
  );
}

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery();

  const { data: sessionData } = useSession();

  return (
    <div>
      {sessionData && <p>Logged in as {sessionData?.user?.name}</p>}
      {secretMessage && <p>{secretMessage}</p>}
      <button
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
