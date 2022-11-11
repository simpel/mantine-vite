import { useMantineTheme, AppShell, Navbar, MediaQuery, Aside, Footer, Header, Burger, Text, ScrollArea } from '@mantine/core';
import { useState } from 'react'
import './App.css'

function App() {


    const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }} height="auto">
          <Navbar.Section grow  component={ScrollArea}>

              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              <Text>Navbar Content</Text>
              
              <Text>END</Text>

          </Navbar.Section>
          <Navbar.Section>
            <Text>EAT MY SHORTS</Text>
            <Text>EAT MY SHORTS</Text>
            <Text>EAT MY SHORTS</Text>
            <Text>EAT MY SHORTS</Text>
            <Text>EAT MY SHORTS</Text>
            <Text>EAT MY SHORTS</Text>
            <Text>EAT MY SHORTS</Text>
            <Text>EAT MY SHORTS</Text>
            <Text>EAT MY SHORTS</Text>
            <Text>EAT MY SHORTS</Text>
          </Navbar.Section>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }
      
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text>
          </div>
        </Header>
      }
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
  
}

export default App
