import Container from '../styledcomponents/Container.styled'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styledcomponents/GlobalStyles'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import content from '../content'


const theme = {
    colors: {
        header: '#ebfbff',
        body: '#fff',
        footer: '#003333'
    },
    mobile: '768px'
}



function HomePage() {
    return (
        <ThemeProvider  theme={theme}>
            <>
                <GlobalStyles />
                <Header/>
                <Container>
                    {content.map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                </Container>
                <Footer/>
        </>
        </ThemeProvider>
     
  )
}

export default HomePage