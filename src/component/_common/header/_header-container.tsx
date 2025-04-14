import { Box } from "@/component/ui/box";
import { Container } from "@/component/ui/container";

import ButtonSection from "./button-section";
// import LogoSection from "./logo-section";
import MenuSheet from "./menu-sheet";

const HeaderContainer = () => {
  return (
    // TODO: 메인 페이지 제외 버튼 노출되도록 구성 필요
    <Container
      className="fixed top-0 z-50 flex h-14 w-full items-center justify-between bg-background"
      // className="fixed top-0 z-50 flex h-14 w-full items-center justify-between bg-background shadow-md"
      component="header"
      fullSize>
      <Box className="flex w-full items-center justify-end px-4 gnb-container">
        {/* <Box className="flex w-full items-center justify-between px-4 gnb-container"> */}
        {/* <LogoSection /> */}
        <Box className="flex items-center justify-end gap-x-2 sm:hidden xs:hidden">
          <ButtonSection />
        </Box>
        <Box className="flex items-center justify-end gap-x-2 md:hidden lg:hidden xl:hidden">
          <MenuSheet />
        </Box>
      </Box>
    </Container>
  );
};

export default HeaderContainer;
