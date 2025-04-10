import Image from "next/image";
import Link from "next/link";

import { Box } from "@/component/ui/box";
import { Button } from "@/component/ui/button";
import { Container } from "@/component/ui/container";
import { Typography } from "@/component/ui/typography";

import LogoSection from "../header/logo-section";

const FooterContainer = () => {
  return (
    <Container
      className="flex flex-col items-start justify-start gap-4 bg-secondary text-center"
      component="footer"
      fullSize>
      <Box className="gnb-container mx-auto flex w-full flex-col items-start justify-start gap-4 px-4 pt-6 text-center">
        <LogoSection />

        <Box className="h-px w-full bg-typo-dark-gray" />
      </Box>

      <Box className="h-px w-full bg-typo-dark-gray" />
    </Container>
  );
};

export default FooterContainer;
// import dayjs from "dayjs";
// import Link from "next/link";

// import { Box } from "@/component/ui/box";
// import { Button } from "@/component/ui/button";
// import { Container } from "@/component/ui/container";
// import { Typography } from "@/component/ui/typography";

// import Logo from "../header/logo";

// const FooterContainer = () => {
//   return (
//     <Container
//       className="flex justify-self-end border-t border-border bg-secondary p-4 text-center"
//       component="footer">
//       <Box className="flex flex-col items-center justify-center">
//         <Logo />
//         <Typography className="text-typo-gray" component="p">
//           (07806) 서울특별시 강서구 공항대로 220, 우성에스비타워2 608호
//         </Typography>
//         <Typography className="font-bold text-typo" component="p" variant="p">
//           (주)명승종합건설 필로스점
//         </Typography>
//         <Typography className="text-typo-gray" component="p">
//           (대표전화) 010-8981-0536
//         </Typography>
//         <Typography className="text-typo-gray" component="p">
//           (이메일) higun14@philosdesign.co.kr
//         </Typography>
//       </Box>
//       <Box className="mx-auto flex max-w-screen-lg flex-col items-center">
//         {/* <Box
//           className="flex flex-col items-start justify-center"
//           component="ul">
//           <Typography className="font-bold text-typo" component="p" variant="p">
//             (주)명승종합건설 필로스점
//           </Typography>
//           <Typography className="text-typo-gray" component="p">
//             대표자 : 박건우
//           </Typography>

//           <Typography className="text-typo-gray" component="p">
//             사업자번호 : 594-85-02228
//           </Typography>
//           <Typography className="text-typo-gray" component="p">
//             Tel : 010-8981-0536
//           </Typography>
//           <Typography className="text-typo-gray" component="p">
//             주소 : 서울특별시 강서구 공항대로 220, 우성에스비타워2 608호
//           </Typography>
//           <Typography className="text-typo-gray" component="p">
//             E-mail : higun14@philosdesign.co.kr
//           </Typography>
//         </Box> */}
//         {/* <p className="text-sm text-gray-600">
//         © {dayjs().format("YYYY")} philos-design All rights reserved.
//       </p> */}
//         {/* <Box
//           className="flex flex-col items-center justify-center gap-2"
//           component="ul">
//           <Box
//             className="flex items-center justify-center separator"
//             component="li">
//             <Link href="/about">
//               <Typography className="text-typo-dark-gray" component="span">
//                 회사소개
//               </Typography>
//             </Link>
//             <Link href="/about">
//               <Typography className="text-typo-dark-gray" component="span">
//                 개인정보 처리방침
//               </Typography>
//             </Link>
//             <Link href="/about">
//               <Typography className="text-typo-dark-gray" component="span">
//                 서비스 이용약관
//               </Typography>
//             </Link>
//           </Box>

//           <Box
//             className="flex items-center justify-center separator"
//             component="li">
//             (주)명승종합건설 필로스점 대표자 : 박건우 사업자번호 : 594-85-02228
//             Tel : 010-8981-0536 주소 : 서울특별시 강서구 공항대로 220,
//             우성에스비타워2 608호 E-mail : higun14@philosdesign.co.kr Copyright
//             © (주)명승종합건설 필로스점. All rights reserved.
//           </Box> */}

//         <Box className="flex items-center justify-between gap-4">
//           <Box className="flex items-center justify-center">
//             <Logo />
//           </Box>
//           <Box
//             className="flex items-center justify-center separator"
//             component="li">
//             <Link href="/about">
//               <Typography className="text-typo-dark-gray" component="span">
//                 About
//               </Typography>
//             </Link>
//             <Link href="/about">
//               <Typography className="text-typo-dark-gray" component="span">
//                 Privacy
//               </Typography>
//             </Link>
//             <Link href="/about">
//               <Typography className="text-typo-dark-gray" component="span">
//                 Legal
//               </Typography>
//             </Link>
//           </Box>
//         </Box>
//       </Box>
//       <Box className="mx-auto flex h-14 w-full max-w-screen-lg items-center justify-center bg-primary">
//         <Box className="flex items-center justify-center">
//           <Logo />
//         </Box>
//         <Box
//           className="flex items-center justify-center separator"
//           component="li">
//           <Link href="/about">
//             <Typography className="text-typo-dark-gray" component="span">
//               회사소개
//             </Typography>
//           </Link>
//           <Link href="/about">
//             <Typography className="text-typo-dark-gray" component="span">
//               개인정보 처리방침
//             </Typography>
//           </Link>
//           <Link href="/about">
//             <Typography className="text-typo-dark-gray" component="span">
//               서비스 이용약관
//             </Typography>
//           </Link>
//         </Box>
//       </Box>
//       {/* </Box> */}
//     </Container>
//   );
// };

// export default FooterContainer;
