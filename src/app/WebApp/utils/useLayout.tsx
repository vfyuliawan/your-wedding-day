import { useMediaQuery } from 'react-responsive';

const useLayout = () => {
  const isPhoneScreen = useMediaQuery({ maxWidth: 567 });
  const isTabletScreen = useMediaQuery({ minWidth: 568, maxWidth: 768 });
  const isDesktopScreen = useMediaQuery({ minWidth: 769, maxWidth: 992 });
  const isLargeDesktopScreen = useMediaQuery({ minWidth: 993, maxWidth: 1200 });
  const isExtraLargeScreen = useMediaQuery({ minWidth: 1201 });

  return {
    isPhoneScreen,
    isTabletScreen,
    isDesktopScreen,
    isLargeDesktopScreen,
    isExtraLargeScreen,
  };
};

export default useLayout;