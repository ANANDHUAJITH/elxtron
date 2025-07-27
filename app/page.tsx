import GridDemo from "../grid-demo"
import FloatingNavDemo from "../components/floating-navbar-demo"
import ShopNowButton from "../components/shop-now-button"
import Logo from "../components/logo"
import MoreButton from "../components/more-button"

export default function Page() {
  return (
    <>
      <Logo />
      <FloatingNavDemo />
      <ShopNowButton />
      <GridDemo />
      <MoreButton />
    </>
  )
}
