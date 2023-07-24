import { chakra, HTMLChakraProps } from "@chakra-ui/react";

const FooterLogo = (props: HTMLChakraProps<"svg">) => {
  return (
    <chakra.svg
      xmlns="http://www.w3.org/2000/svg"
      width="186"
      height="56"
      viewBox="0 0 186 56"
      fill="none"
      {...props}
    >
      <g opacity="0.3" clipPath="url(#clip0_70_14)">
        <path
          d="M185.528 14.8645C185.016 14.3535 184.325 14.1224 183.452 14.1624C182.579 14.2069 181.622 14.4602 180.58 14.9268C179.537 15.3933 178.482 16.0199 177.422 16.8065C176.357 17.593 175.391 18.4418 174.518 19.3527C173.645 20.2681 172.923 21.2235 172.349 22.2189C171.774 23.2188 171.489 24.1386 171.489 24.9874C171.489 25.4762 171.583 26.0094 171.761 26.5738C171.694 26.6405 171.623 26.6982 171.556 26.7693C170.83 27.4937 169.895 28.3069 168.746 29.2223C167.596 30.1377 166.354 31.0575 165.013 31.9907C163.673 32.9239 162.287 33.8171 160.862 34.6658C159.437 35.5146 158.105 36.2167 156.871 36.7677C155.638 37.3188 154.542 37.692 153.584 37.8831C152.627 38.0742 151.959 37.9587 151.576 37.5321C151.023 36.981 151.001 36.0567 151.513 34.7636C152.026 33.4705 152.832 32.0351 153.941 30.4665C154.622 31.1908 155.526 31.6885 156.653 31.9641C157.78 32.2396 158.96 32.0174 160.194 31.2975C160.916 30.9153 161.802 30.311 162.844 29.4844C163.886 28.6579 164.906 27.7336 165.908 26.716C166.906 25.6984 167.77 24.6363 168.492 23.5298C169.213 22.4278 169.641 21.388 169.77 20.4103C169.899 19.4327 169.801 18.6284 169.485 17.9885C169.164 17.353 168.772 16.842 168.305 16.4598C167.837 16.0777 167.356 15.8022 166.87 15.6333C166.38 15.4644 166.011 15.38 165.752 15.38C165.026 15.38 164.069 15.7311 162.88 16.4332C161.686 17.1353 160.421 18.0463 159.081 19.1705C157.74 20.2948 156.39 21.5568 155.027 22.961C153.883 24.1386 152.832 25.3162 151.87 26.4938C151.776 26.5871 151.678 26.676 151.585 26.7826C150.306 28.058 148.872 29.36 147.278 30.6976C145.683 32.0352 144.151 33.2127 142.681 34.2304C141.211 35.248 139.969 36.0034 138.949 36.4922C137.929 36.981 137.354 36.9721 137.225 36.4611C137.096 35.9501 137.216 35.168 137.577 34.1059C137.938 33.0439 138.481 31.813 139.203 30.4132C139.924 29.0134 140.775 27.507 141.755 25.8895C142.735 24.2764 143.777 22.6633 144.881 21.0502C145.861 20.7525 147.082 20.2459 148.551 19.5216C150.021 18.8017 151.455 17.9618 152.858 17.0064C154.261 16.051 155.54 15.0334 156.689 13.9491C157.838 12.8649 158.582 11.7939 158.925 10.7319C159.094 10.1364 159.125 9.41652 159.023 8.56776C158.916 7.71901 158.68 6.90136 158.319 6.11482C157.958 5.32828 157.468 4.6706 156.849 4.1418C156.23 3.61299 155.54 3.34637 154.774 3.34637C154.092 3.39081 153.166 3.98182 151.999 5.12831C150.827 6.27479 149.549 7.75011 148.168 9.55427C146.783 11.3584 145.371 13.367 143.924 15.5711C143.202 16.6731 142.503 17.7663 141.835 18.8417C141.715 18.8639 141.594 18.8906 141.47 18.9128C139.96 19.1883 137.777 19.3927 134.927 19.5171C134.758 18.584 134.321 17.8107 133.617 17.1931C132.914 16.5798 132.01 16.4821 130.905 16.9042V16.842C130.562 16.291 130.215 15.8866 129.849 15.6333C129.489 15.38 129.092 15.2289 128.669 15.1889C128.242 15.1489 127.81 15.1889 127.36 15.3178C126.914 15.4467 126.433 15.5933 125.926 15.7622C124.946 16.1043 123.788 16.8998 122.447 18.1485C121.106 19.4016 119.797 20.8458 118.523 22.4811C117.655 23.592 116.857 24.7385 116.118 25.9161C115.797 26.1605 115.472 26.4449 115.143 26.7782C114.715 27.2048 114.109 27.778 113.325 28.4979C112.537 29.2223 111.677 29.9733 110.742 30.7598C109.807 31.5463 108.849 32.3418 107.869 33.1461C106.89 33.9548 105.985 34.6658 105.157 35.2791C104.329 35.8968 103.625 36.3856 103.05 36.7455C102.476 37.1055 102.124 37.221 101.995 37.0966C101.825 36.9277 101.897 36.4389 102.217 35.6301C102.538 34.8258 102.992 33.8482 103.589 32.7017C104.186 31.5552 104.876 30.3243 105.665 29.009C106.453 27.6936 107.228 26.4316 107.994 25.2185C108.76 24.0098 109.464 22.9388 110.101 22.0012C110.738 21.068 111.205 20.4103 111.504 20.0282C111.802 19.606 111.927 19.0817 111.887 18.4684C111.842 17.8552 111.673 17.2819 111.375 16.7487C111.076 16.2199 110.715 15.7933 110.288 15.4733C109.86 15.1534 109.437 15.0823 109.01 15.2511C108.796 15.3356 108.422 15.6244 107.892 16.1088C107.357 16.5976 106.734 17.2242 106.008 17.9885C105.282 18.7528 104.484 19.6016 103.616 20.5348C102.743 21.4679 101.883 22.4056 101.033 23.3388C98.9883 25.5873 96.7346 28.1158 94.2671 30.9153C95.3717 29.3022 96.3961 27.7958 97.3314 26.396C98.1376 25.2096 98.8858 24.0809 99.5673 23.0188C100.249 21.9567 100.654 21.2769 100.779 20.9791C100.908 20.6814 100.917 20.2592 100.81 19.7038C100.703 19.1528 100.525 18.6017 100.267 18.0463C100.013 17.4952 99.6697 17.0509 99.2466 16.7087C98.819 16.371 98.3514 16.2643 97.8436 16.3887C97.5007 16.4732 97.0152 16.7931 96.3738 17.3441C95.7369 17.8952 95.0109 18.5751 94.2048 19.3838C93.3986 20.1926 92.5479 21.0947 91.6527 22.0901C90.7574 23.0899 89.8756 24.0942 89.0026 25.1162C88.1296 26.1339 87.3012 27.1248 86.5129 28.0758C85.7245 29.0312 85.0564 29.8488 84.5041 30.5287C85.2257 29.1689 86.0452 27.7914 86.9627 26.3872C87.8758 24.9874 88.771 23.6809 89.644 22.4722C90.5169 21.2635 91.3231 20.2015 92.0713 19.2861C92.8151 18.3751 93.3585 17.6819 93.7015 17.2153C93.9999 16.8331 94.0088 16.5043 93.7327 16.2288C93.4565 15.9533 93.0735 15.74 92.5835 15.5933C92.0936 15.4467 91.5725 15.3933 91.0202 15.4333C90.4679 15.4778 90.0404 15.6244 89.742 15.8777C89.1897 16.3443 88.4859 17.1842 87.6352 18.3929C86.7845 19.6016 85.8804 20.9925 84.9228 22.5655C83.9652 24.1386 82.9854 25.7917 81.9877 27.5336C81.9253 27.6447 81.863 27.7514 81.8006 27.8625C81.3151 28.2891 80.7718 28.7423 80.166 29.2223C79.0169 30.1377 77.7743 31.0575 76.4336 31.9907C75.093 32.9239 73.7078 33.8171 72.2826 34.6658C70.8573 35.5146 69.5256 36.2167 68.2919 36.7677C67.0582 37.3188 65.9625 37.692 65.0049 37.8831C64.0473 38.0742 63.3792 37.9587 62.9962 37.5321C62.4439 36.981 62.4216 36.0567 62.9338 34.7636C63.446 33.4705 64.2522 32.0351 65.3612 30.4665C66.0427 31.1908 66.9468 31.6885 68.0736 31.9641C69.2005 32.2396 70.3808 32.0174 71.6145 31.2975C72.336 30.9153 73.2224 30.311 74.2646 29.4844C75.3068 28.6579 76.3268 27.7336 77.3289 26.716C78.3266 25.6984 79.1906 24.6363 79.9122 23.5298C80.6337 22.4278 81.0613 21.388 81.1904 20.4103C81.3196 19.4327 81.2216 18.6284 80.9054 17.9885C80.5847 17.353 80.1927 16.842 79.7251 16.4598C79.2574 16.0777 78.7764 15.8022 78.2909 15.6333C77.801 15.4644 77.4313 15.38 77.173 15.38C76.447 15.38 75.4894 15.7311 74.3002 16.4332C73.1066 17.1353 71.8417 18.0463 70.501 19.1705C69.1604 20.2948 67.8109 21.5568 66.448 22.961C65.0851 24.3608 63.8513 25.765 62.7468 27.1648C61.6422 28.5646 60.738 29.9022 60.0343 31.1775C59.3306 32.4529 58.9832 33.5149 58.9832 34.3637C58.9832 35.639 59.1836 36.7322 59.5889 37.6432C59.9942 38.5586 60.4931 39.3007 61.0899 39.8739C61.6867 40.4472 62.3459 40.8737 63.0674 41.1493C63.789 41.4248 64.4482 41.5625 65.045 41.5625C66.2787 41.5625 67.7351 41.1048 69.4187 40.1939C71.0979 39.2829 72.8661 38.1053 74.7144 36.6611C76.0996 35.5813 77.4937 34.4214 78.9011 33.1772C78.2553 34.3948 77.6897 35.4702 77.2086 36.3767C76.6341 37.461 76.2822 38.1275 76.1575 38.3853C75.9437 38.8119 75.9259 39.2562 76.0951 39.7228C76.2644 40.1894 76.5005 40.5938 76.7989 40.9315C77.0973 41.2737 77.4269 41.4959 77.7876 41.5981C78.1484 41.7047 78.4379 41.5892 78.6472 41.247C79.1594 40.4427 80.0413 39.314 81.2973 37.8698C82.5533 36.4256 84.0098 34.8658 85.6711 33.1905C87.3324 31.5152 89.0872 29.8044 90.9356 28.0624C92.7884 26.3205 94.5433 24.7519 96.2001 23.3521C95.9017 23.8187 95.4964 24.4452 94.9887 25.2318C94.4765 26.0183 93.9153 26.8671 93.2962 27.778C92.6771 28.6935 92.0268 29.6355 91.3498 30.6132C90.6684 31.5908 90.0404 32.4929 89.4658 33.3194C88.8912 34.1459 88.3924 34.8569 87.9648 35.4524C87.5373 36.0478 87.2611 36.4522 87.1364 36.6611C86.9226 37.0033 86.838 37.4787 86.8825 38.092C86.9226 38.7096 87.0429 39.2473 87.2344 39.7139C87.4259 40.1805 87.702 40.4783 88.0628 40.6071C88.4236 40.736 88.8601 40.4605 89.3723 39.7806C89.6707 39.3584 90.223 38.6963 91.0336 37.8076C91.8397 36.9144 92.7795 35.9279 93.844 34.848C94.9085 33.7638 96.0353 32.6528 97.2245 31.5063C98.4137 30.3599 99.5539 29.2889 100.641 28.2891C101.727 27.2937 102.694 26.4538 103.545 25.7739C104.395 25.094 105.014 24.6719 105.393 24.4986C104.244 25.8139 103.202 27.1337 102.266 28.4491C101.416 29.5555 100.618 30.7642 99.8746 32.0796C99.1308 33.3949 98.6498 34.5859 98.436 35.6435C98.3068 36.3678 98.3514 37.0877 98.5652 37.8076C98.7789 38.5319 99.1085 39.1674 99.5539 39.7184C99.9993 40.2694 100.512 40.7182 101.086 41.0559C101.661 41.3981 102.222 41.567 102.779 41.567C103.117 41.567 103.683 41.2604 104.471 40.6427C105.259 40.0294 106.15 39.234 107.152 38.2564C108.15 37.2788 109.192 36.2078 110.279 35.0391C111.366 33.8704 112.408 32.7373 113.406 31.6308C113.415 31.6219 113.419 31.613 113.428 31.6086C113.357 31.8752 113.294 32.1418 113.245 32.3951C113.031 33.4127 113 34.4659 113.147 35.5457C113.299 36.63 113.593 37.6165 114.043 38.5052C114.488 39.3984 115.107 40.1272 115.895 40.7004C116.684 41.2737 117.61 41.5581 118.67 41.5581C119.521 41.5581 120.478 41.2692 121.543 40.7004C122.607 40.1272 123.69 39.354 124.799 38.3764C125.903 37.3987 126.99 36.2656 128.055 34.968C129.119 33.6749 130.108 32.324 131.021 30.9242C131.934 29.5244 132.722 28.1024 133.381 26.6582C134.041 25.214 134.499 23.8365 134.753 22.5167C135.689 22.5167 136.668 22.4322 137.688 22.2634C138.521 22.1256 139.314 21.9523 140.093 21.7568C140.036 21.8501 139.978 21.9479 139.924 22.0412C138.69 24.1431 137.626 26.085 136.731 27.8669C135.836 29.6489 135.261 31.0086 135.007 31.9418C134.624 33.3016 134.464 34.577 134.531 35.7635C134.593 36.9544 134.775 37.9942 135.074 38.883C135.372 39.7761 135.755 40.4738 136.223 40.9848C136.691 41.4959 137.158 41.7047 137.626 41.6203C138.178 41.5359 138.935 41.1537 139.893 40.4738C140.851 39.7939 141.893 38.9541 143.02 37.9587C144.147 36.9633 145.305 35.879 146.498 34.7103C146.904 34.3148 147.291 33.9282 147.678 33.5416C147.616 33.8304 147.581 34.1059 147.581 34.3592C147.581 35.6346 147.781 36.7277 148.186 37.6387C148.592 38.5541 149.09 39.2962 149.687 39.8695C150.284 40.4427 150.943 40.8693 151.665 41.1448C152.386 41.4203 153.045 41.5581 153.642 41.5581C154.876 41.5581 156.332 41.1004 158.016 40.1894C159.695 39.2784 161.463 38.1009 163.312 36.6566C165.165 35.2124 167.035 33.6216 168.928 31.8796C170.171 30.7376 171.36 29.6133 172.505 28.5068C172.135 30.3821 170.197 33.8126 167.467 37.5676C167.245 37.2743 167.084 36.9899 166.982 36.7233C166.853 36.3856 166.75 36.0656 166.661 35.7679C166.576 35.4702 166.407 35.2569 166.149 35.1324C165.895 35.0036 165.597 35.1102 165.254 35.4524C164.915 35.7946 164.617 36.2256 164.358 36.7588C164.105 37.2921 163.913 37.8742 163.784 38.5097C163.655 39.1451 163.677 39.7184 163.846 40.2294C163.998 40.6782 164.211 41.0604 164.488 41.3848C163.129 43.0156 161.677 44.6332 160.181 46.1307C157.66 48.6592 151.553 53.1162 148.16 53.2096C146.939 53.2451 146.031 52.8274 145.648 51.9076C145.719 51.9387 145.83 51.9609 145.959 51.9787C147.117 52.2142 148.422 52.1653 149.727 51.7787C153.166 50.7566 155.308 47.766 154.511 45.1042C153.714 42.4424 150.284 41.1093 146.846 42.1358C145.563 42.5179 144.463 43.1712 143.63 43.9799C143.461 44.1221 143.3 44.2688 143.158 44.4154C137.733 50.0678 142.993 55.5648 146.396 55.9602C152.956 56.729 160.31 49.5568 165.601 42.2158C165.797 42.3091 166.006 42.3891 166.234 42.4557C167.445 42.7934 168.799 42.7623 170.287 42.358C171.774 41.9536 173.222 41.2026 174.629 40.0961C176.032 38.994 177.119 37.572 177.885 35.8301C178.482 34.4303 178.727 33.2083 178.62 32.1685C178.513 31.1286 178.259 30.1954 177.854 29.3645C177.448 28.5379 176.994 27.7825 176.482 27.1026C175.97 26.4227 175.609 25.725 175.395 25.0007C176.5 24.7874 177.693 24.3875 178.967 23.792C180.246 23.1966 181.265 22.6233 182.032 22.0723C182.668 21.6501 183.288 21.108 183.884 20.4503C184.481 19.7926 184.958 19.1261 185.319 18.4462C185.679 17.7663 185.902 17.1086 185.987 16.4732C186.071 15.8377 185.924 15.3045 185.541 14.8823L185.528 14.8645ZM158.114 25.3073C159.201 24.1608 160.23 23.1654 161.209 22.3122C162.189 21.4635 163.071 20.828 163.86 20.4014C164.648 19.9793 165.209 19.8726 165.552 20.0815C165.766 20.2504 165.752 20.6236 165.521 21.1969C165.285 21.7701 164.884 22.4367 164.309 23.201C163.735 23.9653 163.053 24.7385 162.265 25.5251C161.477 26.3116 160.657 27.0004 159.807 27.5959C158.956 28.1913 158.114 28.6268 157.286 28.9023C156.457 29.1778 155.722 29.1689 155.085 28.8712C156.021 27.6403 157.032 26.4494 158.118 25.3029L158.114 25.3073ZM150.645 13.0782C151.642 11.8472 152.538 10.7985 153.326 9.92755C154.114 9.05657 154.796 8.42112 155.37 8.01674C155.945 7.61236 156.337 7.49682 156.551 7.66568C156.889 8.00785 156.871 8.53666 156.488 9.25654C156.105 9.98087 155.477 10.7852 154.604 11.6784C153.731 12.5716 152.68 13.4914 151.447 14.4468C150.213 15.4022 148.934 16.2599 147.616 17.0242C148.636 15.6244 149.647 14.3091 150.649 13.0737L150.645 13.0782ZM69.5167 25.3073C70.6035 24.1608 71.6323 23.1654 72.6122 22.3122C73.592 21.4635 74.4739 20.828 75.2623 20.4014C76.0506 19.9793 76.6118 19.8726 76.9548 20.0815C77.1685 20.2504 77.1552 20.6236 76.9236 21.1969C76.6875 21.7701 76.2867 22.4367 75.7121 23.201C75.1376 23.9653 74.4561 24.7385 73.6678 25.5251C72.8794 26.3116 72.0599 27.0004 71.2092 27.5959C70.3585 28.1913 69.5167 28.6268 68.6883 28.9023C67.8599 29.1778 67.125 29.1689 66.4881 28.8712C67.4234 27.6403 68.4344 26.4494 69.5212 25.3029L69.5167 25.3073ZM129.391 25.9428C128.518 27.3026 127.551 28.649 126.487 29.9866C125.422 31.3242 124.327 32.5773 123.2 33.746C122.073 34.9147 121.017 35.8701 120.042 36.6122C119.062 37.3543 118.189 37.8342 117.423 38.0431C116.657 38.2564 116.105 38.0431 115.762 37.4076C115.419 36.7722 115.379 35.9412 115.633 34.9236C115.886 33.906 116.354 32.7906 117.036 31.5819C117.717 30.3732 118.537 29.1201 119.494 27.8269C120.452 26.5338 121.472 25.3029 122.558 24.1342C123.645 22.9655 124.727 21.9034 125.814 20.948C126.901 19.9926 127.89 19.2594 128.781 18.7528C128.438 19.3483 128.451 19.9926 128.812 20.6947C129.172 21.3968 130.032 21.8945 131.395 22.1923C130.927 23.3388 130.255 24.5919 129.386 25.9472L129.391 25.9428ZM174.228 35.559C173.801 36.7055 173.101 37.6387 172.122 38.363C171.142 39.0874 170.166 39.234 169.186 38.8074C168.799 38.6474 168.478 38.4786 168.207 38.2964C170.621 34.4214 172.282 30.9064 172.741 28.9734C172.914 29.3689 173.093 29.7733 173.275 30.1821C173.698 31.1375 174.041 32.0707 174.295 32.9861C174.549 33.9015 174.527 34.7592 174.233 35.5635L174.228 35.559ZM180.165 19.1927C179.056 20.1704 178.121 20.9436 177.355 21.5168C176.589 22.0901 175.97 22.5478 175.502 22.8855C175.542 22.8011 175.578 22.6944 175.6 22.5655C175.622 22.4367 175.676 22.3345 175.76 22.2456C176.397 21.1435 177.154 20.2059 178.027 19.4416C178.9 18.6773 179.653 18.1351 180.295 17.8196C180.931 17.4997 181.306 17.4464 181.412 17.6597C181.519 17.873 181.105 18.384 180.17 19.1883L180.165 19.1927ZM52.9348 19.3172C53.8122 18.8639 54.9034 18.2507 56.1995 17.473C57.5 16.6954 58.8006 15.8288 60.1056 14.869C61.4106 13.9091 62.5864 12.8515 63.642 11.7006C64.6931 10.5497 65.3924 9.37208 65.7398 8.15894C65.9714 7.33685 65.9981 6.5503 65.8155 5.79931C65.6329 5.04832 65.3122 4.35954 64.8535 3.74186C64.3992 3.12418 63.8424 2.60426 63.1877 2.18655C62.533 1.76884 61.8382 1.45334 61.0988 1.24448C58.6269 0.542369 56.0481 0.137989 53.3579 0.031339C50.6722 -0.0797544 48.0488 0.0757764 45.4923 0.493488C42.9357 0.911199 40.5084 1.57332 38.2101 2.48428C35.9119 3.39525 33.8676 4.5284 32.0771 5.88374C31.5961 6.26146 31.1373 6.66584 30.7097 7.10577C30.2777 7.54126 29.9882 8.0434 29.8279 8.60331C29.6453 9.2521 29.6542 9.86978 29.859 10.4652C30.0639 11.0607 30.4692 11.4429 31.0794 11.6162C31.6406 11.7761 32.282 11.7939 32.9991 11.6695C33.7117 11.5451 34.3887 11.3495 35.03 11.0874C35.667 10.8252 36.2192 10.523 36.6914 10.1897C37.159 9.85645 37.4352 9.55872 37.5064 9.29654C37.5554 9.12323 37.5198 8.99881 37.404 8.91882C37.2882 8.83883 37.1857 8.78551 37.0967 8.76329C36.7938 8.67885 36.5221 8.64775 36.2771 8.66997C36.0366 8.69663 35.805 8.67885 35.5912 8.61664C35.2438 8.51888 35.1147 8.31891 35.1993 8.01674C35.6001 7.10133 36.2549 6.31923 37.1679 5.666C38.081 5.01277 39.1455 4.48397 40.3614 4.07959C41.5773 3.67521 42.8823 3.37747 44.2719 3.18639C45.6615 2.99531 47.0289 2.87978 48.3784 2.83978C49.7235 2.79979 50.9795 2.83978 52.142 2.95976C53.3045 3.07974 54.2754 3.24861 55.0549 3.47079C55.7897 3.67965 56.5202 3.96849 57.2328 4.33288C57.9499 4.70171 58.5645 5.13275 59.0767 5.62601C59.5934 6.12371 59.9631 6.70584 60.1947 7.38128C60.4263 8.05673 60.4218 8.80328 60.1902 9.62537C59.9185 10.5763 59.393 11.4695 58.618 12.3005C57.843 13.1315 56.9656 13.9002 55.9946 14.6068C55.0192 15.3134 54.0082 15.9399 52.966 16.4821C51.9193 17.0286 51.0151 17.4952 50.2446 17.8863C49.7057 17.6419 49.2603 17.4686 48.9174 17.3708L48.0043 17.1131C47.3986 16.9398 46.8062 16.7976 46.2272 16.682C45.6526 16.5665 45.0469 16.4643 44.4144 16.3799C45.5814 15.0734 46.7973 13.607 48.0577 11.9761C49.3182 10.3453 50.2446 8.49222 50.837 6.41699C50.935 6.07038 50.8103 5.84819 50.4629 5.75043C50.2045 5.67489 49.8749 5.67933 49.4785 5.75043C49.0821 5.82597 48.6813 5.92374 48.2715 6.03927C47.8618 6.15926 47.501 6.27479 47.1848 6.39922C46.8686 6.5192 46.6548 6.61252 46.5434 6.67473C46.3653 6.81249 46.1604 6.95024 45.9288 7.09688C45.7016 7.24353 45.5546 7.42572 45.4923 7.63902C45.0113 9.32764 44.2719 10.8474 43.2787 12.2027C42.2855 13.5581 41.2076 14.869 40.0541 16.1266C39.1855 16.2066 38.2458 16.3488 37.2258 16.5532C36.2059 16.7576 35.2483 17.0464 34.3441 17.4197C33.44 17.793 32.6472 18.2729 31.9702 18.8506C31.2888 19.4283 30.8345 20.1304 30.5984 20.9525C30.4247 21.5568 30.5227 22.1212 30.8879 22.65C31.2531 23.1743 31.8945 23.5654 32.8031 23.8231L33.195 23.9342C31.173 26.2627 29.1687 28.5779 27.1733 30.8887C25.178 33.1994 23.2851 35.6212 21.4857 38.1497C20.9779 37.6298 20.5682 37.0121 20.2564 36.2923C19.9446 35.5724 19.8867 34.8658 20.0872 34.1726C20.2475 33.6127 20.5147 33.195 20.8978 32.9283C21.2763 32.6617 21.5169 32.3551 21.6148 32.0085C21.7084 31.5197 21.4946 31.2042 20.9735 31.0531C20.3678 30.8798 19.713 30.9064 19.0182 31.1286C18.3234 31.3508 17.6642 31.693 17.0407 32.1462C16.4171 32.5995 15.8648 33.1461 15.3794 33.7815C14.8939 34.417 14.5598 35.0569 14.3728 35.7057C14.1634 36.4389 14.159 37.1632 14.355 37.8742C14.5509 38.5852 14.8538 39.2429 15.268 39.8517C15.6822 40.4605 16.1677 41.0071 16.7334 41.4959C17.299 41.9802 17.8602 42.398 18.4169 42.7446C18.1942 43.1934 17.8958 43.7533 17.5172 44.4199C17.1387 45.0864 16.8714 45.6996 16.7111 46.2596C16.5151 46.9528 16.6755 47.3705 17.1966 47.5216C17.544 47.6193 17.9849 47.6282 18.5238 47.5482C19.0628 47.4683 19.5883 47.3127 20.0961 47.0816C20.6083 46.8506 21.067 46.584 21.4857 46.2818C21.8999 45.9796 22.1582 45.6508 22.2562 45.3086L22.4789 44.5309C22.8575 44.682 23.2494 44.8287 23.6547 44.9709C24.06 45.1086 24.4564 45.2331 24.8484 45.3442C27.7969 46.1796 30.9948 46.4773 34.4377 46.2373C37.8806 45.9974 41.172 45.2508 44.3209 43.9933C47.4654 42.7357 50.2535 41.0159 52.6809 38.8296C55.1038 36.6433 56.7562 34.0171 57.6292 30.9509C59.0188 26.0672 57.4511 22.1923 52.9259 19.3216L52.9348 19.3172ZM41.5105 19.686C41.8713 19.7438 42.2008 19.8104 42.5037 19.8993L44.3254 20.4148C43.056 20.7569 41.7243 20.988 40.3302 21.108L41.506 19.686H41.5105ZM36.1302 19.566C36.1792 19.3927 36.3529 19.3127 36.6557 19.3305C36.9541 19.3438 37.1546 19.3438 37.257 19.3261L36.384 20.4103C36.3217 20.2992 36.2593 20.1526 36.1925 19.9704C36.1257 19.7882 36.1079 19.6549 36.1302 19.566ZM52.0485 32.5595C51.3091 35.1547 50.0442 37.2077 48.2582 38.7096C46.4722 40.2161 44.4545 41.2915 42.2053 41.9402C39.9561 42.589 37.6178 42.8734 35.1815 42.789C32.7452 42.7046 30.487 42.3713 28.4026 41.7803C27.7078 41.5847 27.0664 41.367 26.4785 41.1315C25.8906 40.896 25.3027 40.6471 24.7237 40.3894C25.4452 39.3318 26.2068 38.2608 27.0085 37.181C27.8102 36.1012 28.7278 34.9325 29.7611 33.6838C30.7944 32.4351 31.9524 31.0442 33.2307 29.5111C34.5089 27.978 35.9965 26.2139 37.689 24.2142C41.0874 23.9609 44.3833 23.1654 47.5767 21.8234C49.7948 23.2454 51.2512 24.8407 51.946 26.6049C52.6408 28.3691 52.672 30.351 52.044 32.5595H52.0485ZM16.3548 17.2464C16.9338 16.5398 17.4727 15.8066 17.976 15.0423C18.4748 14.278 18.9024 13.5003 19.2632 12.7138C19.6239 11.9272 19.8734 11.1718 20.0114 10.4564C20.5236 10.4564 21.0581 10.4119 21.6148 10.3186C21.7885 10.2875 21.9578 10.2564 22.127 10.2208C22.1092 10.2608 22.087 10.2964 22.0647 10.3364C21.8108 10.8563 21.6817 11.3495 21.6817 11.8117C21.6817 12.2072 21.7841 12.6471 21.9934 13.1315C22.2028 13.6158 22.421 14.1224 22.6571 14.6424C22.8887 15.1623 23.0757 15.6733 23.2138 16.171C23.3519 16.6687 23.343 17.1397 23.1782 17.5797C22.9466 18.2062 22.5635 18.7128 22.0291 19.1083C21.4946 19.5038 20.9601 19.5838 20.4257 19.3527C20.0293 19.1927 19.7487 19.0061 19.5705 18.7973C19.3968 18.5884 19.2765 18.3929 19.2053 18.2062C19.134 18.0196 19.0761 17.8463 19.0316 17.6863C18.987 17.5263 18.8935 17.4108 18.751 17.3397C18.6129 17.2686 18.4481 17.3264 18.2655 17.513C18.0784 17.6996 17.9181 17.9352 17.78 18.224C17.642 18.5129 17.5351 18.8328 17.4683 19.1794C17.397 19.526 17.4103 19.8415 17.5039 20.117C17.7132 20.7436 18.1497 21.148 18.8089 21.3346C19.4725 21.5213 20.2074 21.5035 21.018 21.2813C21.8286 21.0591 22.6214 20.6503 23.3875 20.0459C24.1536 19.446 24.7459 18.6684 25.1646 17.7174C25.4452 17.0464 25.5833 16.4598 25.5833 15.9621C25.5833 15.4644 25.5076 15.0067 25.3561 14.589C25.2047 14.1713 25.0132 13.7936 24.7816 13.4603C24.55 13.127 24.3451 12.7893 24.1714 12.4516C23.9977 12.1139 23.8774 11.7806 23.8062 11.4429C23.7349 11.1096 23.8062 10.7319 24.0155 10.3142L24.0868 10.1764C24.8039 10.0609 25.4898 9.86533 26.14 9.58538C26.7903 9.30987 27.3292 8.99436 27.7568 8.64775C28.1844 8.30114 28.4694 7.9412 28.6119 7.57236C28.75 7.20353 28.6698 6.86581 28.367 6.56364C28.0641 6.26146 27.69 6.11926 27.2357 6.12815C26.7814 6.14148 26.3137 6.26591 25.8238 6.51031C25.3383 6.75472 24.8439 7.07022 24.3451 7.46571C23.9309 7.79455 23.5657 8.16338 23.2316 8.56332C22.4433 8.67886 21.4055 8.76329 20.1139 8.82106C20.0203 8.31003 19.7843 7.88787 19.4013 7.55459C19.0182 7.21687 18.5238 7.16798 17.9226 7.39906V7.36351C17.7355 7.06133 17.544 6.84359 17.348 6.70139C17.152 6.56364 16.9338 6.48365 16.7022 6.45699C16.4706 6.43477 16.2345 6.45699 15.9896 6.52809C15.7446 6.59919 15.4863 6.67917 15.2057 6.77249C14.6712 6.95913 14.0387 7.39461 13.3083 8.07451C12.5778 8.75884 11.8652 9.54538 11.166 10.4386C10.6938 11.0429 10.2574 11.6695 9.85651 12.3138C9.67835 12.4383 9.50465 12.5893 9.32204 12.7849C8.62723 13.4781 7.84334 14.1935 6.97037 14.9223C6.10186 15.6511 5.26452 16.2954 4.46281 16.8509C3.66111 17.4064 2.98411 17.8196 2.42737 18.0863C1.87064 18.3529 1.55886 18.3484 1.4876 18.0685C1.39407 17.673 1.54105 17.0286 1.92408 16.1221C2.30712 15.22 2.83268 14.1891 3.50968 13.0293L3.79027 12.7849C3.92834 12.6471 4.24457 12.3894 4.73005 12.0205C5.21553 11.6517 5.79008 11.2162 6.45372 10.7185C7.11735 10.2208 7.81661 9.66981 8.56042 9.0699C9.30422 8.47 10.0035 7.86565 10.6671 7.26575C11.3308 6.6614 11.9053 6.08371 12.3908 5.52824C12.8763 4.97278 13.1925 4.47508 13.3306 4.03515C13.4241 3.71076 13.4419 3.31526 13.384 2.85311C13.3261 2.39096 13.1969 1.94659 13.001 1.51555C12.805 1.08895 12.5378 0.729006 12.1993 0.440163C11.8563 0.146876 11.4777 0.000232855 11.0635 0.000232855C10.6938 0.0224516 10.1861 0.346845 9.54919 0.973412C8.91228 1.59998 8.21301 2.4043 7.4603 3.38636C6.70759 4.37287 5.93261 5.46603 5.14426 6.67029C4.35592 7.87454 3.62548 9.04769 2.95294 10.1942C2.2804 11.3407 1.70139 12.3983 1.21146 13.3714C0.725979 14.3446 0.409751 15.0867 0.271679 15.5933C0.0623454 16.3354 -0.022279 17.0286 0.00889839 17.6774C0.0445297 18.3262 0.142516 18.895 0.302857 19.3794C0.467652 19.8682 0.672532 20.2504 0.930859 20.5259C1.18473 20.8058 1.44306 20.9214 1.69693 20.8725C1.9998 20.828 2.40956 20.6192 2.93067 20.2459C3.45178 19.8771 4.02188 19.4194 4.63652 18.8728C5.25116 18.3307 5.88361 17.7396 6.53389 17.0997C7.18416 16.4643 7.7988 15.8511 8.37781 15.26C8.39562 15.2423 8.40898 15.2289 8.4268 15.2112C8.36444 15.4245 8.311 15.6333 8.27537 15.8333C8.15956 16.3887 8.14175 16.962 8.22192 17.553C8.30209 18.144 8.46688 18.6817 8.7074 19.1705C8.95236 19.6549 9.28641 20.0548 9.71844 20.3703C10.146 20.6814 10.6538 20.8414 11.2328 20.8414C11.696 20.8414 12.2171 20.6858 12.8005 20.3703C13.3796 20.0593 13.9719 19.6371 14.5777 19.1039C15.1789 18.5706 15.7713 17.9529 16.3548 17.2464ZM7.31777 7.2613C8.07049 6.24369 8.77421 5.34605 9.42448 4.5684C10.0747 3.79519 10.6359 3.19528 11.1125 2.78201C11.5891 2.3643 11.8964 2.22655 12.0345 2.3643C12.2438 2.55094 12.1547 2.91977 11.7717 3.47524C11.3887 4.0307 10.8497 4.69282 10.1549 5.45714C9.46011 6.22147 8.6584 7.03912 7.75426 7.90565C6.85011 8.77217 5.97715 9.60315 5.14426 10.3897C5.83907 9.3232 6.56506 8.28336 7.32223 7.26575L7.31777 7.2613ZM11.9988 18.1529C11.4644 18.5573 10.9878 18.8195 10.5736 18.935C10.1549 19.0505 9.85205 18.935 9.66944 18.5884C9.48238 18.2418 9.46011 17.7885 9.59818 17.2331C9.73625 16.6776 9.99458 16.0688 10.3643 15.4111C10.7339 14.749 11.1838 14.0691 11.7049 13.3626C12.226 12.656 12.7827 11.985 13.3751 11.3495C13.9675 10.7141 14.5598 10.132 15.1522 9.61204C15.7446 9.09212 16.2835 8.69219 16.7734 8.41223C16.5864 8.73662 16.5953 9.09212 16.7913 9.46984C16.9872 9.852 17.4593 10.1231 18.2031 10.2875C17.9493 10.9141 17.5841 11.5939 17.1075 12.3361C16.6309 13.0782 16.1054 13.8114 15.5219 14.5401C14.9429 15.2689 14.3416 15.9533 13.727 16.5887C13.1123 17.2242 12.5378 17.7485 12.0033 18.1529H11.9988Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_70_14">
          <rect width="186" height="56" fill="white" />
        </clipPath>
      </defs>
    </chakra.svg>
  );
};

export default FooterLogo;
