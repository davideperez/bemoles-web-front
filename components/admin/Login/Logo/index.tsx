import { chakra, HTMLChakraProps } from '@chakra-ui/react';

const Logo = (props: HTMLChakraProps<'svg'>) => {
  return (
    <chakra.svg
      width="186"
      height="56"
      viewBox="0 0 186 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M185.528 14.8643C185.016 14.3533 184.325 14.1222 183.452 14.1622C182.579 14.2066 181.622 14.4599 180.58 14.9265C179.537 15.3931 178.482 16.0197 177.422 16.8062C176.357 17.5928 175.391 18.4415 174.518 19.3525C173.645 20.2679 172.923 21.2233 172.349 22.2187C171.774 23.2185 171.489 24.1384 171.489 24.9871C171.489 25.476 171.583 26.0092 171.761 26.5736C171.694 26.6402 171.623 26.698 171.556 26.7691C170.83 27.4934 169.895 28.3066 168.746 29.222C167.596 30.1374 166.354 31.0573 165.013 31.9905C163.673 32.9237 162.287 33.8169 160.862 34.6656C159.437 35.5144 158.105 36.2165 156.871 36.7675C155.638 37.3185 154.542 37.6918 153.584 37.8829C152.627 38.074 151.959 37.9584 151.576 37.5318C151.023 36.9808 151.001 36.0565 151.513 34.7634C152.026 33.4702 152.832 32.0349 153.941 30.4663C154.622 31.1906 155.526 31.6883 156.653 31.9638C157.78 32.2393 158.96 32.0171 160.194 31.2973C160.916 30.9151 161.802 30.3107 162.844 29.4842C163.886 28.6577 164.906 27.7334 165.908 26.7158C166.906 25.6981 167.77 24.6361 168.492 23.5296C169.213 22.4275 169.641 21.3877 169.77 20.4101C169.899 19.4325 169.801 18.6282 169.485 17.9883C169.164 17.3528 168.772 16.8418 168.305 16.4596C167.837 16.0774 167.356 15.8019 166.87 15.6331C166.38 15.4642 166.011 15.3798 165.752 15.3798C165.026 15.3798 164.069 15.7308 162.88 16.4329C161.686 17.1351 160.421 18.046 159.081 19.1703C157.74 20.2946 156.39 21.5566 155.027 22.9608C153.883 24.1384 152.832 25.316 151.87 26.4936C151.776 26.5869 151.678 26.6758 151.585 26.7824C150.306 28.0578 148.872 29.3598 147.278 30.6973C145.683 32.0349 144.151 33.2125 142.681 34.2301C141.211 35.2477 139.969 36.0032 138.949 36.492C137.929 36.9808 137.354 36.9719 137.225 36.4609C137.096 35.9498 137.216 35.1678 137.577 34.1057C137.938 33.0436 138.481 31.8127 139.203 30.413C139.924 29.0132 140.775 27.5067 141.755 25.8892C142.735 24.2761 143.777 22.6631 144.881 21.05C145.861 20.7523 147.082 20.2457 148.551 19.5213C150.021 18.8015 151.455 17.9616 152.858 17.0062C154.261 16.0508 155.54 15.0332 156.689 13.9489C157.838 12.8646 158.582 11.7937 158.925 10.7316C159.094 10.1362 159.125 9.41628 159.023 8.56753C158.916 7.71877 158.68 6.90112 158.319 6.11458C157.958 5.32804 157.468 4.67037 156.849 4.14156C156.23 3.61276 155.54 3.34613 154.774 3.34613C154.092 3.39057 153.166 3.98159 151.999 5.12807C150.827 6.27456 149.549 7.74988 148.168 9.55404C146.783 11.3582 145.371 13.3668 143.924 15.5709C143.202 16.6729 142.503 17.7661 141.835 18.8415C141.715 18.8637 141.594 18.8903 141.47 18.9126C139.96 19.1881 137.777 19.3925 134.927 19.5169C134.758 18.5837 134.321 17.8105 133.617 17.1928C132.914 16.5796 132.01 16.4818 130.905 16.904V16.8418C130.562 16.2907 130.215 15.8864 129.849 15.6331C129.489 15.3798 129.092 15.2287 128.669 15.1887C128.242 15.1487 127.81 15.1887 127.36 15.3176C126.914 15.4464 126.433 15.5931 125.926 15.7619C124.946 16.1041 123.788 16.8995 122.447 18.1482C121.106 19.4014 119.797 20.8456 118.523 22.4809C117.655 23.5918 116.857 24.7383 116.118 25.9159C115.797 26.1603 115.472 26.4447 115.143 26.778C114.715 27.2046 114.109 27.7778 113.325 28.4977C112.537 29.222 111.677 29.973 110.742 30.7596C109.807 31.5461 108.849 32.3415 107.869 33.1458C106.89 33.9546 105.985 34.6656 105.157 35.2788C104.329 35.8965 103.625 36.3853 103.05 36.7453C102.476 37.1052 102.124 37.2208 101.995 37.0963C101.825 36.9275 101.897 36.4387 102.217 35.6299C102.538 34.8256 102.992 33.848 103.589 32.7015C104.186 31.555 104.876 30.3241 105.665 29.0087C106.453 27.6934 107.228 26.4314 107.994 25.2182C108.76 24.0095 109.464 22.9386 110.101 22.0009C110.738 21.0678 111.205 20.4101 111.504 20.0279C111.802 19.6058 111.927 19.0814 111.887 18.4682C111.842 17.8549 111.673 17.2817 111.375 16.7484C111.076 16.2196 110.715 15.793 110.288 15.4731C109.86 15.1531 109.437 15.082 109.01 15.2509C108.796 15.3353 108.422 15.6242 107.892 16.1086C107.357 16.5974 106.734 17.2239 106.008 17.9883C105.282 18.7526 104.484 19.6013 103.616 20.5345C102.743 21.4677 101.883 22.4053 101.033 23.3385C98.9883 25.587 96.7346 28.1155 94.2671 30.9151C95.3717 29.302 96.3961 27.7956 97.3314 26.3958C98.1376 25.2093 98.8858 24.0806 99.5673 23.0186C100.249 21.9565 100.654 21.2766 100.779 20.9789C100.908 20.6812 100.917 20.259 100.81 19.7035C100.703 19.1525 100.525 18.6015 100.267 18.046C100.013 17.495 99.6697 17.0506 99.2466 16.7085C98.819 16.3707 98.3514 16.2641 97.8436 16.3885C97.5007 16.4729 97.0152 16.7929 96.3738 17.3439C95.7369 17.8949 95.0109 18.5748 94.2048 19.3836C93.3986 20.1923 92.5479 21.0944 91.6527 22.0898C90.7574 23.0897 89.8756 24.094 89.0026 25.116C88.1296 26.1336 87.3012 27.1246 86.5129 28.0755C85.7245 29.0309 85.0564 29.8486 84.5041 30.5285C85.2257 29.1687 86.0452 27.7911 86.9627 26.3869C87.8758 24.9871 88.771 23.6807 89.644 22.472C90.5169 21.2633 91.3231 20.2012 92.0713 19.2858C92.8151 18.3749 93.3585 17.6816 93.7015 17.215C93.9999 16.8329 94.0088 16.504 93.7327 16.2285C93.4565 15.953 93.0735 15.7397 92.5835 15.5931C92.0936 15.4464 91.5725 15.3931 91.0202 15.4331C90.4679 15.4775 90.0404 15.6242 89.742 15.8775C89.1897 16.3441 88.4859 17.1839 87.6352 18.3926C86.7845 19.6013 85.8804 20.9922 84.9228 22.5653C83.9652 24.1384 82.9854 25.7915 81.9877 27.5334C81.9253 27.6445 81.863 27.7512 81.8006 27.8622C81.3151 28.2888 80.7718 28.7421 80.166 29.222C79.0169 30.1374 77.7743 31.0573 76.4336 31.9905C75.093 32.9237 73.7078 33.8169 72.2826 34.6656C70.8573 35.5144 69.5256 36.2165 68.2919 36.7675C67.0582 37.3185 65.9625 37.6918 65.0049 37.8829C64.0473 38.074 63.3792 37.9584 62.9962 37.5318C62.4439 36.9808 62.4216 36.0565 62.9338 34.7634C63.446 33.4702 64.2522 32.0349 65.3612 30.4663C66.0427 31.1906 66.9468 31.6883 68.0736 31.9638C69.2005 32.2393 70.3808 32.0171 71.6145 31.2973C72.336 30.9151 73.2224 30.3107 74.2646 29.4842C75.3068 28.6577 76.3268 27.7334 77.3289 26.7158C78.3266 25.6981 79.1906 24.6361 79.9122 23.5296C80.6337 22.4275 81.0613 21.3877 81.1904 20.4101C81.3196 19.4325 81.2216 18.6282 80.9054 17.9883C80.5847 17.3528 80.1927 16.8418 79.7251 16.4596C79.2574 16.0774 78.7764 15.8019 78.2909 15.6331C77.801 15.4642 77.4313 15.3798 77.173 15.3798C76.447 15.3798 75.4894 15.7308 74.3002 16.4329C73.1066 17.1351 71.8417 18.046 70.501 19.1703C69.1604 20.2946 67.8109 21.5566 66.448 22.9608C65.0851 24.3606 63.8513 25.7648 62.7468 27.1646C61.6422 28.5644 60.738 29.9019 60.0343 31.1773C59.3306 32.4526 58.9832 33.5147 58.9832 34.3634C58.9832 35.6388 59.1836 36.7319 59.5889 37.6429C59.9942 38.5583 60.4931 39.3004 61.0899 39.8737C61.6867 40.4469 62.3459 40.8735 63.0674 41.149C63.789 41.4245 64.4482 41.5623 65.045 41.5623C66.2787 41.5623 67.7351 41.1046 69.4187 40.1936C71.0979 39.2826 72.8661 38.1051 74.7144 36.6608C76.0996 35.581 77.4937 34.4212 78.9011 33.177C78.2553 34.3945 77.6897 35.4699 77.2086 36.3764C76.6341 37.4607 76.2822 38.1273 76.1575 38.385C75.9437 38.8116 75.9259 39.256 76.0951 39.7226C76.2644 40.1892 76.5005 40.5936 76.7989 40.9313C77.0973 41.2734 77.4269 41.4956 77.7876 41.5978C78.1484 41.7045 78.4379 41.589 78.6472 41.2468C79.1594 40.4425 80.0413 39.3138 81.2973 37.8695C82.5533 36.4253 84.0098 34.8656 85.6711 33.1903C87.3324 31.515 89.0872 29.8042 90.9356 28.0622C92.7884 26.3203 94.5433 24.7516 96.2001 23.3518C95.9017 23.8184 95.4964 24.445 94.9887 25.2315C94.4765 26.0181 93.9153 26.8668 93.2962 27.7778C92.6771 28.6932 92.0268 29.6353 91.3498 30.6129C90.6684 31.5905 90.0404 32.4926 89.4658 33.3192C88.8912 34.1457 88.3924 34.8567 87.9648 35.4521C87.5373 36.0476 87.2611 36.452 87.1364 36.6608C86.9226 37.003 86.838 37.4785 86.8825 38.0917C86.9226 38.7094 87.0429 39.2471 87.2344 39.7137C87.4259 40.1803 87.702 40.478 88.0628 40.6069C88.4236 40.7358 88.8601 40.4602 89.3723 39.7803C89.6707 39.3582 90.223 38.6961 91.0336 37.8073C91.8397 36.9141 92.7795 35.9276 93.844 34.8478C94.9085 33.7635 96.0353 32.6526 97.2245 31.5061C98.4137 30.3596 99.5539 29.2887 100.641 28.2888C101.727 27.2934 102.694 26.4536 103.545 25.7737C104.395 25.0938 105.014 24.6716 105.393 24.4983C104.244 25.8137 103.202 27.1335 102.266 28.4488C101.416 29.5553 100.618 30.764 99.8746 32.0794C99.1308 33.3947 98.6498 34.5856 98.436 35.6432C98.3068 36.3676 98.3514 37.0874 98.5652 37.8073C98.7789 38.5317 99.1085 39.1671 99.5539 39.7181C99.9993 40.2692 100.512 40.718 101.086 41.0557C101.661 41.3979 102.222 41.5667 102.779 41.5667C103.117 41.5667 103.683 41.2601 104.471 40.6424C105.259 40.0292 106.15 39.2338 107.152 38.2561C108.15 37.2785 109.192 36.2076 110.279 35.0389C111.366 33.8702 112.408 32.737 113.406 31.6305C113.415 31.6216 113.419 31.6128 113.428 31.6083C113.357 31.8749 113.294 32.1416 113.245 32.3949C113.031 33.4125 113 34.4656 113.147 35.5455C113.299 36.6297 113.593 37.6163 114.043 38.505C114.488 39.3982 115.107 40.127 115.895 40.7002C116.684 41.2734 117.61 41.5578 118.67 41.5578C119.521 41.5578 120.478 41.269 121.543 40.7002C122.607 40.127 123.69 39.3538 124.799 38.3761C125.903 37.3985 126.99 36.2654 128.055 34.9678C129.119 33.6747 130.108 32.3238 131.021 30.924C131.934 29.5242 132.722 28.1022 133.381 26.658C134.041 25.2138 134.499 23.8362 134.753 22.5164C135.689 22.5164 136.668 22.432 137.688 22.2631C138.521 22.1254 139.314 21.9521 140.093 21.7565C140.036 21.8499 139.978 21.9476 139.924 22.0409C138.69 24.1428 137.626 26.0847 136.731 27.8667C135.836 29.6486 135.261 31.0084 135.007 31.9416C134.624 33.3014 134.464 34.5767 134.531 35.7632C134.593 36.9541 134.775 37.994 135.074 38.8827C135.372 39.7759 135.755 40.4736 136.223 40.9846C136.691 41.4956 137.158 41.7045 137.626 41.6201C138.178 41.5356 138.935 41.1535 139.893 40.4736C140.851 39.7937 141.893 38.9538 143.02 37.9584C144.147 36.963 145.305 35.8787 146.498 34.71C146.904 34.3146 147.291 33.9279 147.678 33.5413C147.616 33.8302 147.581 34.1057 147.581 34.359C147.581 35.6343 147.781 36.7275 148.186 37.6385C148.592 38.5539 149.09 39.296 149.687 39.8692C150.284 40.4425 150.943 40.8691 151.665 41.1446C152.386 41.4201 153.045 41.5578 153.642 41.5578C154.876 41.5578 156.332 41.1001 158.016 40.1892C159.695 39.2782 161.463 38.1006 163.312 36.6564C165.165 35.2122 167.035 33.6213 168.928 31.8794C170.171 30.7373 171.36 29.6131 172.505 28.5066C172.135 30.3818 170.197 33.8124 167.467 37.5674C167.245 37.2741 167.084 36.9897 166.982 36.7231C166.853 36.3853 166.75 36.0654 166.661 35.7677C166.576 35.4699 166.407 35.2566 166.149 35.1322C165.895 35.0033 165.597 35.11 165.254 35.4521C164.915 35.7943 164.617 36.2254 164.358 36.7586C164.105 37.2919 163.913 37.874 163.784 38.5094C163.655 39.1449 163.677 39.7181 163.846 40.2292C163.998 40.678 164.211 41.0601 164.488 41.3845C163.129 43.0154 161.677 44.6329 160.181 46.1305C157.66 48.6589 151.553 53.116 148.16 53.2093C146.939 53.2449 146.031 52.8272 145.648 51.9073C145.719 51.9384 145.83 51.9606 145.959 51.9784C147.117 52.2139 148.422 52.1651 149.727 51.7784C153.166 50.7564 155.308 47.7658 154.511 45.104C153.714 42.4422 150.284 41.109 146.846 42.1355C145.563 42.5177 144.463 43.1709 143.63 43.9797C143.461 44.1219 143.3 44.2685 143.158 44.4152C137.733 50.0676 142.993 55.5645 146.396 55.96C152.956 56.7288 160.31 49.5566 165.601 42.2155C165.797 42.3088 166.006 42.3888 166.234 42.4555C167.445 42.7932 168.799 42.7621 170.287 42.3577C171.774 41.9533 173.222 41.2024 174.629 40.0959C176.032 38.9938 177.119 37.5718 177.885 35.8299C178.482 34.4301 178.727 33.2081 178.62 32.1682C178.513 31.1284 178.259 30.1952 177.854 29.3642C177.448 28.5377 176.994 27.7823 176.482 27.1024C175.97 26.4225 175.609 25.7248 175.395 25.0005C176.5 24.7872 177.693 24.3872 178.967 23.7918C180.246 23.1963 181.265 22.6231 182.032 22.0721C182.668 21.6499 183.288 21.1078 183.884 20.4501C184.481 19.7924 184.958 19.1259 185.319 18.446C185.679 17.7661 185.902 17.1084 185.987 16.4729C186.071 15.8375 185.924 15.3042 185.541 14.8821L185.528 14.8643ZM158.114 25.3071C159.201 24.1606 160.23 23.1652 161.209 22.312C162.189 21.4633 163.071 20.8278 163.86 20.4012C164.648 19.979 165.209 19.8724 165.552 20.0813C165.766 20.2501 165.752 20.6234 165.521 21.1966C165.285 21.7699 164.884 22.4364 164.309 23.2008C163.735 23.9651 163.053 24.7383 162.265 25.5248C161.477 26.3114 160.657 27.0002 159.807 27.5956C158.956 28.1911 158.114 28.6266 157.286 28.9021C156.457 29.1776 155.722 29.1687 155.085 28.871C156.021 27.6401 157.032 26.4491 158.118 25.3026L158.114 25.3071ZM150.645 13.0779C151.642 11.847 152.538 10.7983 153.326 9.92731C154.114 9.05634 154.796 8.42088 155.37 8.0165C155.945 7.61212 156.337 7.49658 156.551 7.66545C156.889 8.00761 156.871 8.53642 156.488 9.2563C156.105 9.98063 155.477 10.785 154.604 11.6781C153.731 12.5713 152.68 13.4912 151.447 14.4466C150.213 15.402 148.934 16.2596 147.616 17.024C148.636 15.6242 149.647 14.3088 150.649 13.0735L150.645 13.0779ZM69.5167 25.3071C70.6035 24.1606 71.6323 23.1652 72.6122 22.312C73.592 21.4633 74.4739 20.8278 75.2623 20.4012C76.0506 19.979 76.6118 19.8724 76.9548 20.0813C77.1685 20.2501 77.1552 20.6234 76.9236 21.1966C76.6875 21.7699 76.2867 22.4364 75.7121 23.2008C75.1376 23.9651 74.4561 24.7383 73.6678 25.5248C72.8794 26.3114 72.0599 27.0002 71.2092 27.5956C70.3585 28.1911 69.5167 28.6266 68.6883 28.9021C67.8599 29.1776 67.125 29.1687 66.4881 28.871C67.4234 27.6401 68.4344 26.4491 69.5212 25.3026L69.5167 25.3071ZM129.391 25.9425C128.518 27.3023 127.551 28.6488 126.487 29.9864C125.422 31.3239 124.327 32.577 123.2 33.7458C122.073 34.9145 121.017 35.8699 120.042 36.612C119.062 37.3541 118.189 37.834 117.423 38.0429C116.657 38.2561 116.105 38.0429 115.762 37.4074C115.419 36.7719 115.379 35.941 115.633 34.9233C115.886 33.9057 116.354 32.7903 117.036 31.5817C117.717 30.373 118.537 29.1198 119.494 27.8267C120.452 26.5336 121.472 25.3026 122.558 24.1339C123.645 22.9652 124.727 21.9032 125.814 20.9478C126.901 19.9924 127.89 19.2592 128.781 18.7526C128.438 19.348 128.451 19.9924 128.812 20.6945C129.172 21.3966 130.032 21.8943 131.395 22.192C130.927 23.3385 130.255 24.5917 129.386 25.947L129.391 25.9425ZM174.228 35.5588C173.801 36.7053 173.101 37.6385 172.122 38.3628C171.142 39.0871 170.166 39.2338 169.186 38.8072C168.799 38.6472 168.478 38.4783 168.207 38.2961C170.621 34.4212 172.282 30.9062 172.741 28.9732C172.914 29.3687 173.093 29.7731 173.275 30.1819C173.698 31.1373 174.041 32.0705 174.295 32.9859C174.549 33.9013 174.527 34.7589 174.233 35.5632L174.228 35.5588ZM180.165 19.1925C179.056 20.1701 178.121 20.9433 177.355 21.5166C176.589 22.0898 175.97 22.5475 175.502 22.8853C175.542 22.8008 175.578 22.6942 175.6 22.5653C175.622 22.4364 175.676 22.3342 175.76 22.2454C176.397 21.1433 177.154 20.2057 178.027 19.4414C178.9 18.677 179.653 18.1349 180.295 17.8194C180.931 17.4994 181.306 17.4461 181.412 17.6594C181.519 17.8727 181.105 18.3837 180.17 19.1881L180.165 19.1925ZM52.9348 19.3169C53.8122 18.8637 54.9034 18.2504 56.1995 17.4728C57.5 16.6951 58.8006 15.8286 60.1056 14.8687C61.4106 13.9089 62.5864 12.8513 63.642 11.7004C64.6931 10.5494 65.3924 9.37184 65.7398 8.1587C65.9714 7.33661 65.9981 6.55007 65.8155 5.79908C65.6329 5.04808 65.3122 4.3593 64.8535 3.74163C64.3992 3.12395 63.8424 2.60403 63.1877 2.18632C62.533 1.7686 61.8382 1.4531 61.0988 1.24424C58.6269 0.542132 56.0481 0.137752 53.3579 0.0311025C50.6722 -0.079991 48.0488 0.0755399 45.4923 0.493251C42.9357 0.910963 40.5084 1.57308 38.2101 2.48405C35.9119 3.39501 33.8676 4.52817 32.0771 5.88351C31.5961 6.26123 31.1373 6.66561 30.7097 7.10554C30.2777 7.54102 29.9882 8.04316 29.8279 8.60308C29.6453 9.25186 29.6542 9.86954 29.859 10.465C30.0639 11.0605 30.4692 11.4426 31.0794 11.6159C31.6406 11.7759 32.282 11.7937 32.9991 11.6693C33.7117 11.5448 34.3887 11.3493 35.03 11.0871C35.667 10.8249 36.2192 10.5228 36.6914 10.1895C37.159 9.85621 37.4352 9.55848 37.5064 9.2963C37.5554 9.12299 37.5198 8.99857 37.404 8.91858C37.2882 8.83859 37.1857 8.78527 37.0967 8.76305C36.7938 8.67862 36.5221 8.64751 36.2771 8.66973C36.0366 8.69639 35.805 8.67862 35.5912 8.61641C35.2438 8.51864 35.1147 8.31868 35.1993 8.0165C35.6001 7.10109 36.2549 6.31899 37.1679 5.66576C38.081 5.01253 39.1455 4.48373 40.3614 4.07935C41.5773 3.67497 42.8823 3.37724 44.2719 3.18616C45.6615 2.99508 47.0289 2.87954 48.3784 2.83955C49.7235 2.79955 50.9795 2.83955 52.142 2.95953C53.3045 3.07951 54.2754 3.24837 55.0549 3.47056C55.7897 3.67941 56.5202 3.96826 57.2328 4.33264C57.9499 4.70147 58.5645 5.13252 59.0767 5.62577C59.5934 6.12347 59.9631 6.7056 60.1947 7.38105C60.4263 8.0565 60.4218 8.80304 60.1902 9.62514C59.9185 10.5761 59.393 11.4693 58.618 12.3003C57.843 13.1312 56.9656 13.9 55.9946 14.6066C55.0192 15.3131 54.0082 15.9397 52.966 16.4818C51.9193 17.0284 51.0151 17.495 50.2446 17.886C49.7057 17.6416 49.2603 17.4683 48.9174 17.3706L48.0043 17.1128C47.3986 16.9395 46.8062 16.7973 46.2272 16.6818C45.6526 16.5663 45.0469 16.4641 44.4144 16.3796C45.5814 15.0732 46.7973 13.6067 48.0577 11.9759C49.3182 10.345 50.2446 8.49198 50.837 6.41676C50.935 6.07014 50.8103 5.84796 50.4629 5.7502C50.2045 5.67465 49.8749 5.6791 49.4785 5.7502C49.0821 5.82574 48.6813 5.9235 48.2715 6.03904C47.8618 6.15902 47.501 6.27456 47.1848 6.39898C46.8686 6.51896 46.6548 6.61228 46.5434 6.67449C46.3653 6.81225 46.1604 6.95001 45.9288 7.09665C45.7016 7.24329 45.5546 7.42548 45.4923 7.63878C45.0113 9.3274 44.2719 10.8472 43.2787 12.2025C42.2855 13.5578 41.2076 14.8687 40.0541 16.1263C39.1855 16.2063 38.2458 16.3485 37.2258 16.5529C36.2059 16.7573 35.2483 17.0462 34.3441 17.4195C33.44 17.7927 32.6472 18.2727 31.9702 18.8503C31.2888 19.428 30.8345 20.1301 30.5984 20.9522C30.4247 21.5566 30.5227 22.1209 30.8879 22.6497C31.2531 23.1741 31.8945 23.5651 32.8031 23.8229L33.195 23.934C31.173 26.2625 29.1687 28.5777 27.1733 30.8884C25.178 33.1992 23.2851 35.621 21.4857 38.1495C20.9779 37.6296 20.5682 37.0119 20.2564 36.292C19.9446 35.5721 19.8867 34.8656 20.0872 34.1724C20.2475 33.6124 20.5147 33.1947 20.8978 32.9281C21.2763 32.6615 21.5169 32.3549 21.6148 32.0083C21.7084 31.5194 21.4946 31.2039 20.9735 31.0528C20.3678 30.8795 19.713 30.9062 19.0182 31.1284C18.3234 31.3506 17.6642 31.6927 17.0407 32.146C16.4171 32.5993 15.8648 33.1458 15.3794 33.7813C14.8939 34.4168 14.5598 35.0567 14.3728 35.7054C14.1634 36.4387 14.159 37.163 14.355 37.874C14.5509 38.585 14.8538 39.2427 15.268 39.8515C15.6822 40.4602 16.1677 41.0068 16.7334 41.4956C17.299 41.98 17.8602 42.3977 18.4169 42.7443C18.1942 43.1931 17.8958 43.7531 17.5172 44.4196C17.1387 45.0862 16.8714 45.6994 16.7111 46.2593C16.5151 46.9525 16.6755 47.3703 17.1966 47.5213C17.544 47.6191 17.9849 47.628 18.5238 47.548C19.0628 47.468 19.5883 47.3125 20.0961 47.0814C20.6083 46.8503 21.067 46.5837 21.4857 46.2815C21.8999 45.9794 22.1582 45.6505 22.2562 45.3084L22.4789 44.5307C22.8575 44.6818 23.2494 44.8284 23.6547 44.9706C24.06 45.1084 24.4564 45.2328 24.8484 45.3439C27.7969 46.1793 30.9948 46.4771 34.4377 46.2371C37.8806 45.9971 41.172 45.2506 44.3209 43.993C47.4654 42.7354 50.2535 41.0157 52.6809 38.8294C55.1038 36.6431 56.7562 34.0168 57.6292 30.9506C59.0188 26.067 57.4511 22.192 52.9259 19.3214L52.9348 19.3169ZM41.5105 19.6858C41.8713 19.7435 42.2008 19.8102 42.5037 19.8991L44.3254 20.4145C43.056 20.7567 41.7243 20.9878 40.3302 21.1078L41.506 19.6858H41.5105ZM36.1302 19.5658C36.1792 19.3925 36.3529 19.3125 36.6557 19.3303C36.9541 19.3436 37.1546 19.3436 37.257 19.3258L36.384 20.4101C36.3217 20.299 36.2593 20.1524 36.1925 19.9702C36.1257 19.788 36.1079 19.6547 36.1302 19.5658ZM52.0485 32.5593C51.3091 35.1544 50.0442 37.2074 48.2582 38.7094C46.4722 40.2158 44.4545 41.2912 42.2053 41.94C39.9561 42.5888 37.6178 42.8732 35.1815 42.7888C32.7452 42.7043 30.487 42.3711 28.4026 41.78C27.7078 41.5845 27.0664 41.3668 26.4785 41.1312C25.8906 40.8957 25.3027 40.6469 24.7237 40.3891C25.4452 39.3315 26.2068 38.2606 27.0085 37.1808C27.8102 36.1009 28.7278 34.9322 29.7611 33.6835C30.7944 32.4349 31.9524 31.044 33.2307 29.5109C34.5089 27.9778 35.9965 26.2136 37.689 24.2139C41.0874 23.9606 44.3833 23.1652 47.5767 21.8232C49.7948 23.2452 51.2512 24.8405 51.946 26.6047C52.6408 28.3688 52.672 30.3507 52.044 32.5593H52.0485ZM16.3548 17.2461C16.9338 16.5396 17.4727 15.8064 17.976 15.0421C18.4748 14.2777 18.9024 13.5001 19.2632 12.7135C19.6239 11.927 19.8734 11.1716 20.0114 10.4561C20.5236 10.4561 21.0581 10.4117 21.6148 10.3184C21.7885 10.2873 21.9578 10.2561 22.127 10.2206C22.1092 10.2606 22.087 10.2961 22.0647 10.3361C21.8108 10.8561 21.6817 11.3493 21.6817 11.8115C21.6817 12.2069 21.7841 12.6469 21.9934 13.1312C22.2028 13.6156 22.421 14.1222 22.6571 14.6421C22.8887 15.162 23.0757 15.6731 23.2138 16.1708C23.3519 16.6685 23.343 17.1395 23.1782 17.5794C22.9466 18.206 22.5635 18.7126 22.0291 19.1081C21.4946 19.5036 20.9601 19.5836 20.4257 19.3525C20.0293 19.1925 19.7487 19.0059 19.5705 18.797C19.3968 18.5882 19.2765 18.3926 19.2053 18.206C19.134 18.0194 19.0761 17.8461 19.0316 17.6861C18.987 17.5261 18.8935 17.4106 18.751 17.3395C18.6129 17.2684 18.4481 17.3261 18.2655 17.5128C18.0784 17.6994 17.9181 17.9349 17.78 18.2238C17.642 18.5126 17.5351 18.8326 17.4683 19.1792C17.397 19.5258 17.4103 19.8413 17.5039 20.1168C17.7132 20.7434 18.1497 21.1478 18.8089 21.3344C19.4725 21.521 20.2074 21.5033 21.018 21.2811C21.8286 21.0589 22.6214 20.6501 23.3875 20.0457C24.1536 19.4458 24.7459 18.6681 25.1646 17.7172C25.4452 17.0462 25.5833 16.4596 25.5833 15.9619C25.5833 15.4642 25.5076 15.0065 25.3561 14.5888C25.2047 14.1711 25.0132 13.7934 24.7816 13.4601C24.55 13.1268 24.3451 12.7891 24.1714 12.4514C23.9977 12.1136 23.8774 11.7803 23.8062 11.4426C23.7349 11.1093 23.8062 10.7316 24.0155 10.3139L24.0868 10.1762C24.8039 10.0606 25.4898 9.8651 26.14 9.58514C26.7903 9.30963 27.3292 8.99412 27.7568 8.64751C28.1844 8.3009 28.4694 7.94096 28.6119 7.57213C28.75 7.2033 28.6698 6.86557 28.367 6.5634C28.0641 6.26123 27.69 6.11903 27.2357 6.12791C26.7814 6.14124 26.3137 6.26567 25.8238 6.51007C25.3383 6.75448 24.8439 7.06998 24.3451 7.46548C23.9309 7.79431 23.5657 8.16315 23.2316 8.56308C22.4433 8.67862 21.4055 8.76305 20.1139 8.82082C20.0203 8.30979 19.7843 7.88763 19.4013 7.55435C19.0182 7.21663 18.5238 7.16775 17.9226 7.39882V7.36327C17.7355 7.0611 17.544 6.84336 17.348 6.70116C17.152 6.5634 16.9338 6.48341 16.7022 6.45675C16.4706 6.43453 16.2345 6.45675 15.9896 6.52785C15.7446 6.59895 15.4863 6.67894 15.2057 6.77225C14.6712 6.95889 14.0387 7.39438 13.3083 8.07427C12.5778 8.75861 11.8652 9.54515 11.166 10.4383C10.6938 11.0427 10.2574 11.6693 9.85651 12.3136C9.67835 12.438 9.50465 12.5891 9.32204 12.7846C8.62723 13.4779 7.84334 14.1933 6.97037 14.9221C6.10186 15.6508 5.26452 16.2952 4.46281 16.8507C3.66111 17.4061 2.98411 17.8194 2.42737 18.086C1.87064 18.3526 1.55886 18.3482 1.4876 18.0682C1.39407 17.6727 1.54105 17.0284 1.92408 16.1219C2.30712 15.2198 2.83268 14.1889 3.50968 13.029L3.79027 12.7846C3.92834 12.6469 4.24457 12.3891 4.73005 12.0203C5.21553 11.6515 5.79008 11.216 6.45372 10.7183C7.11735 10.2206 7.81661 9.66957 8.56042 9.06967C9.30422 8.46976 10.0035 7.86542 10.6671 7.26551C11.3308 6.66116 11.9053 6.08348 12.3908 5.52801C12.8763 4.97254 13.1925 4.47484 13.3306 4.03491C13.4241 3.71052 13.4419 3.31503 13.384 2.85288C13.3261 2.39073 13.1969 1.94635 13.001 1.51531C12.805 1.08871 12.5378 0.72877 12.1993 0.439927C11.8563 0.14664 11.4777 -3.65637e-06 11.0635 -3.65637e-06C10.6938 0.022215 10.1861 0.346608 9.54919 0.973175C8.91228 1.59974 8.21301 2.40406 7.4603 3.38613C6.70759 4.37264 5.93261 5.4658 5.14426 6.67005C4.35592 7.8743 3.62548 9.04745 2.95294 10.1939C2.2804 11.3404 1.70139 12.398 1.21146 13.3712C0.725979 14.3444 0.409751 15.0865 0.271679 15.5931C0.0623454 16.3352 -0.022279 17.0284 0.00889839 17.6772C0.0445297 18.326 0.142516 18.8948 0.302857 19.3791C0.467652 19.868 0.672532 20.2501 0.930859 20.5256C1.18473 20.8056 1.44306 20.9211 1.69693 20.8722C1.9998 20.8278 2.40956 20.6189 2.93067 20.2457C3.45178 19.8768 4.02188 19.4191 4.63652 18.8726C5.25116 18.3304 5.88361 17.7394 6.53389 17.0995C7.18416 16.4641 7.7988 15.8508 8.37781 15.2598C8.39562 15.242 8.40898 15.2287 8.4268 15.2109C8.36444 15.4242 8.311 15.6331 8.27537 15.833C8.15956 16.3885 8.14175 16.9618 8.22192 17.5528C8.30209 18.1438 8.46688 18.6815 8.7074 19.1703C8.95236 19.6547 9.28641 20.0546 9.71844 20.3701C10.146 20.6812 10.6538 20.8411 11.2328 20.8411C11.696 20.8411 12.2171 20.6856 12.8005 20.3701C13.3796 20.059 13.9719 19.6369 14.5777 19.1036C15.1789 18.5704 15.7713 17.9527 16.3548 17.2461ZM7.31777 7.26107C8.07049 6.24345 8.77421 5.34581 9.42448 4.56816C10.0747 3.79495 10.6359 3.19504 11.1125 2.78178C11.5891 2.36407 11.8964 2.22631 12.0345 2.36407C12.2438 2.5507 12.1547 2.91953 11.7717 3.475C11.3887 4.03047 10.8497 4.69258 10.1549 5.45691C9.46011 6.22123 8.6584 7.03888 7.75426 7.90541C6.85011 8.77194 5.97715 9.60292 5.14426 10.3895C5.83907 9.32296 6.56506 8.28313 7.32223 7.26551L7.31777 7.26107ZM11.9988 18.1527C11.4644 18.5571 10.9878 18.8192 10.5736 18.9348C10.1549 19.0503 9.85205 18.9348 9.66944 18.5882C9.48238 18.2415 9.46011 17.7883 9.59818 17.2328C9.73625 16.6774 9.99458 16.0686 10.3643 15.4109C10.7339 14.7488 11.1838 14.0689 11.7049 13.3623C12.226 12.6558 12.7827 11.9848 13.3751 11.3493C13.9675 10.7139 14.5598 10.1317 15.1522 9.6118C15.7446 9.09189 16.2835 8.69195 16.7734 8.41199C16.5864 8.73639 16.5953 9.09189 16.7913 9.4696C16.9872 9.85177 17.4593 10.1228 18.2031 10.2873C17.9493 10.9138 17.5841 11.5937 17.1075 12.3358C16.6309 13.0779 16.1054 13.8111 15.5219 14.5399C14.9429 15.2687 14.3416 15.953 13.727 16.5885C13.1123 17.2239 12.5378 17.7483 12.0033 18.1527H11.9988Z"
        fill="url(#paint0_linear_1_41)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_41"
          x1="93.0022"
          y1="56"
          x2="93.0022"
          y2="-2.86065e-06"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C5A266" />
          <stop offset="1" stopColor="#956429" />
        </linearGradient>
      </defs>
    </chakra.svg>
  );
};

export default Logo;
