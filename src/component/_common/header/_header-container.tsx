import { Box } from "@/component/ui/box";

import ButtonSection from "./button-section";
import HeaderBackgroundController from "./header-background-controller";
import LogoSection from "./logo-section";
import MenuSheet from "./menu-sheet";

const HeaderContainer = () => {
  return (
    <HeaderBackgroundController>
      <Box className="gnb-container flex w-full items-center justify-between px-4">
        <LogoSection />
        <Box className="flex items-center justify-end gap-x-2 sm:hidden xs:hidden">
          <ButtonSection />
        </Box>
        <Box className="flex items-center justify-end gap-x-2 md:hidden lg:hidden xl:hidden">
          <MenuSheet />
        </Box>
      </Box>
    </HeaderBackgroundController>
  );
};

export default HeaderContainer;
