import { Children, FC } from "react"
import Header from "./header"
import Footer from "./footer"

type Props = {
    children: React.AwaitedReactNode
}

const Layout: FC<Props> = ({children}) =>{
    return (
        <>
        <Header />
        {children}
        <Footer />
        </>
    );
}
export default Layout;