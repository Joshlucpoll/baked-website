import "../styles/logo.css";
import { motion } from "framer-motion";

export default function GenerateLogo(props: {
  timings: [number, number, number, number, number];
}) {
  const handWritingVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (custom: { delay: number; duration: number }) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        opacity: { duration: 0, delay: custom.delay },
        default: {
          delay: custom.delay,
          duration: custom.duration,
          ease: "linear",
        },
      },
    }),
  };

  const bakedVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const bakedItemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="120.616 121 1694.884 1176.142"
      className="svg"
      // width="1694.884pt"
      // height="1176.142pt"
      initial="hidden"
      animate="visible"
    >
      <motion.path
        d=" M 1006 1173 C 1026.969 1127.464 1032.666 1100.494 1027 1086 C 1019.166 1065.962 1008.813 1078 1005 1088 C 1001.188 1098 1002.341 1175.637 1006 1187 C 1009.097 1196.617 1016.607 1207.752 1025 1204 C 1032.217 1200.773 1042.988 1188.679 1041 1177 C 1038.869 1164.48 1030.479 1162.708 1028 1163 C 1022.798 1163.341 1021.638 1166.736 1021.857 1170.312 C 1022.121 1174.623 1024.39 1179.197 1024 1179 C 1020.949 1177.461 1018.09 1162.312 1028.34 1162.93 C 1032.336 1162.21 1034.694 1165.375 1036.054 1167.056 C 1039.304 1170.448 1041.373 1178.043 1040.996 1182.088 C 1040.855 1185.287 1040.975 1187.691 1041.269 1189.213 C 1042.314 1194.636 1050.933 1195.757 1054 1196 C 1062.175 1196.647 1078.143 1171.444 1080 1164 C 1081.265 1158.928 1079.359 1166.432 1076.766 1176.173 C 1074.532 1183.341 1072.237 1186.42 1074 1193 C 1075.763 1199.58 1084.946 1203.65 1092 1200 C 1099.054 1196.35 1105.242 1165.875 1105 1167 C 1102.619 1187.871 1101.306 1200.557 1101 1205 C 1100.728 1208.949 1101.01 1226.968 1101 1259 C 1100.42 1275.1 1095.106 1283.786 1089 1285 C 1082.67 1286.258 1076.656 1284.938 1076 1279 C 1075.344 1273.063 1075.969 1257.719 1084 1242 C 1092.031 1226.281 1096.875 1219.563 1099 1217 Q 1101.125 1214.438 1119 1196 Q 1130.313 1182.125 1131 1178"
        stroke="rgb(0,0,0)"
        className="signature"
        custom={{ duration: props.timings[0], delay: 0 }}
        variants={handWritingVariants}
      />
      <motion.path
        d=" M 1178 1192 Q 1195.883 1181.95 1195 1170.312 C 1194.008 1157.242 1181.726 1162.288 1179 1165 C 1176.363 1167.624 1169.174 1175.86 1174 1186 C 1178.108 1194.632 1182.111 1202.333 1194 1203 Q 1205.889 1203.667 1212 1193 L 1227 1165 Q 1235.295 1154.352 1236 1167 C 1236.469 1175.411 1236.479 1184.087 1236 1193 C 1235.561 1204.21 1238.238 1204.22 1244 1193 Q 1250.434 1180.472 1256 1170.312 C 1262.755 1160.564 1271.359 1160.057 1271 1170.312 C 1270.717 1178.392 1270.727 1185.965 1271 1193 C 1269.456 1205.505 1272.743 1205.831 1279 1193 C 1284.387 1181.952 1288.397 1174.4 1291 1170.312 C 1295.128 1164.294 1298.256 1163.926 1302 1165 C 1304.8 1165.803 1306.541 1168.872 1307 1175 C 1305.83 1184.649 1305.625 1192.25 1308 1197 C 1313.374 1202.999 1321.975 1203.993 1328 1197 C 1345.019 1177.247 1343 1157.75 1343 1161 Q 1338.111 1202 1353 1204 Q 1367.889 1206 1391 1157 Q 1404.755 1114.595 1406 1108 C 1407.445 1100.344 1408.064 1085.439 1405 1080 C 1401.219 1073.289 1393.167 1069.697 1387 1083 Q 1381.649 1094.541 1380 1119 Q 1379.111 1183.667 1389 1196 Q 1398.889 1208.333 1411 1199 C 1425.707 1182.712 1430.151 1171.493 1431 1165 C 1432.448 1153.922 1424.556 1192.08 1428 1197 C 1432.062 1202.803 1443.242 1203.601 1449 1193 C 1451.994 1187.488 1457.042 1163.708 1457 1167.056 C 1454.192 1192.028 1453.041 1207.401 1454 1213 C 1455.436 1221.388 1451.994 1264.43 1449 1273.37 C 1447.91 1276.182 1447.266 1281.867 1443 1285 C 1437.246 1288.723 1428.863 1285.998 1428 1278 Q 1427.357 1265.726 1431 1256 C 1434.643 1246.274 1438.875 1231.951 1450 1220 C 1460.914 1208.275 1480.444 1185.667 1483 1178"
        stroke="rgb(0,0,0)"
        className="signature"
        custom={{
          duration: props.timings[1] - props.timings[0],
          delay: props.timings[0],
        }}
        variants={handWritingVariants}
      />
      <motion.path
        d=" M 1543 1163 Q 1527 1167.813 1524 1177 C 1521 1186.188 1520.875 1195.125 1526 1199 C 1531.125 1202.875 1541.115 1199.98 1547 1189 C 1552.911 1177.971 1568.557 1128.98 1569 1125 C 1569.656 1119.105 1571.181 1096.131 1568 1091 C 1564.936 1086.057 1560.313 1082.625 1555 1091 C 1549.688 1099.375 1548 1117.688 1548 1121 C 1548 1124.313 1547 1167.75 1555 1187 C 1563 1206.25 1571.75 1201.563 1573 1201 Q 1581.781 1194.984 1585 1191 C 1588.059 1187.213 1595.653 1169.828 1602 1166 C 1608.448 1162.111 1613.87 1160.969 1623 1167 C 1631.831 1172.833 1612.312 1154.689 1601 1167.056 C 1590.536 1178.495 1590.5 1182.375 1591 1187 C 1591.5 1191.625 1592.813 1198.25 1596 1200 C 1599.188 1201.75 1607.173 1202.014 1614 1194 C 1619.122 1187.987 1618.969 1179.188 1619 1181 C 1618.382 1190.675 1622.059 1196.685 1626 1199 C 1630.046 1201.376 1638.003 1203.83 1646 1193 C 1653.526 1182.807 1657.046 1179.967 1659 1164 C 1660.814 1149.177 1654.269 1182.897 1663 1194 C 1671.65 1205.001 1671.296 1203.247 1680 1194 C 1684.824 1188.875 1687.563 1178.625 1689 1161 C 1688.219 1158.75 1696.729 1181.446 1702 1182.088 C 1708.056 1182.825 1714.515 1184.76 1718 1181 C 1720.237 1178.586 1720.813 1157.719 1721 1160 Q 1717.813 1196.438 1726 1202 Q 1734.188 1207.563 1742 1201 C 1761.033 1172.121 1770.585 1156.081 1766 1151 C 1764.688 1149.563 1760.425 1151.027 1761 1153 C 1762.946 1159.677 1771.939 1177.057 1773 1180 C 1773.904 1182.507 1776.919 1194.031 1771 1198 C 1764.373 1202.444 1759.224 1200.081 1756 1198 C 1753.004 1196.067 1767.791 1208.129 1779 1205 C 1789.477 1202.076 1802.413 1184.934 1805 1178"
        stroke="rgb(0,0,0)"
        className="signature"
        custom={{
          duration: props.timings[2] - props.timings[1],
          delay: props.timings[1],
        }}
        variants={handWritingVariants}
      />
      <motion.path
        d=" M 1338 1132 C 1338 1128.689 1340.689 1126 1344 1126 C 1347.311 1126 1350 1128.689 1350 1132 C 1350 1135.311 1347.311 1138 1344 1138 C 1340.689 1138 1338 1135.311 1338 1132 Z "
        stroke="rgb(0,0,0)"
        className="signature"
        custom={{
          duration: props.timings[3] - props.timings[2],
          delay: props.timings[2],
        }}
        variants={handWritingVariants}
      />
      <motion.path
        d=" M 1716 1132 C 1716 1128.689 1718.689 1126 1722 1126 C 1725.311 1126 1728 1128.689 1728 1132 C 1728 1135.311 1725.311 1138 1722 1138 C 1718.689 1138 1716 1135.311 1716 1132 Z "
        stroke="rgb(0,0,0)"
        className="signature"
        custom={{
          duration: props.timings[4] - props.timings[3],
          delay: props.timings[3],
        }}
        variants={handWritingVariants}
      />
      {/* wisk */}
      <motion.path
        d=" M 935.814 122.332 C 925.111 125.251 918.717 128.309 905.651 137.343 C 883.551 152.494 851.581 189.607 835.458 218.796 C 833.512 222.41 830.176 227.831 828.23 230.889 C 823.226 238.395 812.523 260.634 803.349 282.318 C 795.287 301.499 789.31 323.739 788.198 338.751 C 787.503 349.037 787.642 349.732 793.063 360.99 C 800.569 376.697 818.083 398.103 841.434 420.203 C 851.859 429.933 862.006 439.802 863.952 442.165 C 865.898 444.389 872.709 451.339 878.964 457.455 C 888.833 467.045 890.223 469.13 889.667 472.327 C 889.111 475.524 890.362 477.331 898.145 484.698 L 907.319 493.177 L 907.319 513.193 L 907.319 533.208 L 903.149 533.208 C 898.979 533.208 898.979 533.208 898.979 541.409 L 898.979 549.61 L 926.223 550.583 C 941.235 551.139 963.613 551.139 975.984 550.444 L 998.363 549.193 L 998.363 541.548 C 998.363 533.903 998.363 533.903 993.915 533.486 L 989.328 533.069 L 989.328 514.027 L 989.328 494.984 L 999.336 484.837 L 1009.204 474.829 L 1006.563 469.825 L 1003.922 464.96 L 1007.536 461.902 C 1009.482 460.235 1017.266 454.119 1024.772 448.42 C 1042.703 434.798 1049.375 428.821 1068.973 408.805 C 1093.576 383.786 1109.699 359.322 1111.228 344.867 C 1112.479 334.025 1102.333 297.886 1090.518 270.642 C 1087.46 263.275 1084.263 256.603 1083.707 255.908 C 1083.29 255.074 1079.259 247.846 1074.95 239.507 C 1068.417 226.858 1056.046 206.286 1052.294 201.699 C 1051.738 200.865 1049.931 198.363 1048.541 196.139 C 1043.676 188.495 1026.579 167.645 1017.822 158.749 C 1001.281 141.93 983.49 129.421 969.034 124.417 C 958.748 120.803 944.71 119.969 935.814 122.332 Z  M 947.628 130.394 C 947.628 132.201 947.211 137.76 946.794 142.764 L 945.822 151.938 L 934.563 152.772 C 922.192 153.745 911.489 156.942 899.257 163.475 C 891.474 167.645 887.165 170.981 876.045 181.545 C 856.446 200.031 840.461 230.472 832.261 264.943 C 821.419 310.256 826.979 372.666 845.326 410.195 C 847.133 413.948 848.523 417.284 848.245 417.562 C 847.272 418.535 819.751 388.79 811.967 378.504 C 792.229 352.095 790.561 340.419 801.959 305.947 C 822.114 244.927 864.786 177.514 902.037 147.629 C 906.485 144.154 910.516 141.235 911.072 141.235 C 911.489 141.235 913.018 140.262 914.269 139.15 C 918.161 135.676 938.316 127.475 943.181 127.336 C 946.933 127.336 947.628 127.892 947.628 130.394 Z  M 966.671 130.394 C 977.652 134.564 992.664 143.737 1001.281 151.66 C 1014.764 163.892 1024.633 174.734 1032.834 186.132 C 1035.197 189.329 1037.421 192.247 1037.977 192.664 C 1038.95 193.359 1050.487 210.595 1059.104 224.217 C 1070.78 242.843 1088.016 279.955 1095.522 303.028 C 1102.194 323.044 1105.252 340.697 1103.445 348.62 C 1102.333 353.484 1091.074 374.473 1088.016 377.531 C 1087.599 377.948 1084.541 381.701 1081.066 385.871 C 1070.78 398.659 1042.008 426.875 1029.359 436.466 C 1023.243 441.053 1022.826 440.497 1027.413 433.408 C 1031.722 426.458 1035.475 418.118 1039.784 405.331 C 1042.981 396.157 1045.205 386.705 1052.155 354.596 C 1053.267 349.315 1053.823 335.971 1053.823 318.457 C 1053.823 286.071 1052.294 276.063 1042.008 241.87 C 1040.34 236.171 1024.494 204.479 1022.27 202.116 C 1021.297 201.143 1019.768 199.336 1019.073 198.085 C 1016.154 192.803 1003.783 179.738 995.861 173.344 C 985.158 164.865 974.177 158.888 964.169 155.691 C 956.385 153.328 956.246 153.328 955.412 147.073 C 954.995 143.598 954.578 137.76 954.578 134.147 C 954.578 126.224 954.995 126.085 966.671 130.394 Z  M 944.571 162.363 C 944.154 166.255 943.459 166.95 936.926 169.174 C 928.308 172.093 919.551 178.487 912.462 186.966 C 906.068 194.888 895.782 214.487 891.613 226.997 C 889.806 232.279 885.775 240.48 882.439 245.483 C 864.508 272.866 855.612 305.391 855.612 343.477 C 855.612 369.33 858.948 389.068 866.732 410.89 C 869.512 418.952 880.354 439.524 884.802 445.223 C 886.609 447.725 887.721 449.81 887.165 449.81 C 886.192 449.81 870.346 437.717 866.871 434.381 C 864.091 431.601 856.168 418.118 852.554 410.195 C 851.164 407.138 848.94 402.134 847.55 399.076 C 844.214 391.848 838.654 371.832 835.736 355.986 C 832.122 337.222 832.4 298.303 836.292 278.148 C 841.851 248.402 850.191 226.719 864.369 205.452 C 874.794 189.468 894.809 171.676 909.404 165.004 C 915.242 162.363 933.312 158.193 939.706 158.054 C 944.849 157.915 944.988 158.054 944.571 162.363 Z  M 972.648 166.255 C 998.641 179.043 1021.158 205.591 1033.251 237.839 C 1042.147 261.468 1047.985 289.685 1047.568 307.337 C 1047.429 311.924 1047.151 311.229 1045.622 303.167 C 1040.34 273.839 1024.216 242.565 1005.312 224.773 C 1000.865 220.603 996 214.348 994.332 210.873 C 985.714 192.803 972.509 176.819 962.223 171.954 C 956.802 169.452 955.968 168.479 955.968 164.726 C 955.968 160.695 956.107 160.556 960.555 161.39 C 962.918 161.946 968.478 164.17 972.648 166.255 Z  M 943.459 180.85 C 943.459 185.576 942.903 187.383 941.096 188.078 C 936.231 189.885 931.088 194.471 925.945 201.699 C 923.026 205.73 918.439 210.456 915.659 212.263 C 913.018 214.07 908.431 217.267 905.651 219.491 C 902.732 221.715 900.369 222.966 900.369 222.549 C 900.369 221.993 903.149 215.738 906.624 208.649 C 914.686 192.247 927.891 177.931 937.204 175.568 C 943.042 174.178 943.459 174.456 943.459 180.85 Z  M 965.837 182.101 C 971.814 186.549 975.15 190.718 982.934 203.367 C 988.772 212.958 983.768 210.873 972.092 198.919 C 966.393 193.22 960.833 188.495 959.582 188.495 C 958.331 188.495 957.358 187.383 957.358 185.993 C 957.358 184.742 956.941 182.24 956.524 180.433 C 955.273 175.985 958.609 176.541 965.837 182.101 Z  M 949.991 199.197 C 949.574 200.587 949.296 199.475 949.296 196.834 C 949.296 194.193 949.574 193.081 949.991 194.332 C 950.269 195.722 950.269 197.946 949.991 199.197 Z  M 942.069 198.78 C 942.069 202.255 939.845 203.784 934.702 203.784 C 932.061 203.784 932.061 203.506 935.814 199.614 C 940.679 194.61 942.069 194.332 942.069 198.78 Z  M 963.474 198.78 C 968.2 203.089 968.061 203.645 962.64 202.533 C 959.304 201.838 957.914 200.726 957.636 198.502 C 957.08 194.61 959.165 194.61 963.474 198.78 Z  M 953.188 256.603 C 955.829 331.801 956.524 384.342 954.856 405.053 C 954.022 415.477 952.91 431.184 952.354 439.663 C 951.52 454.953 951.381 455.37 948.184 455.37 C 945.683 455.37 944.849 454.536 944.849 452.173 C 944.849 450.505 943.876 435.632 942.764 419.23 C 938.177 354.874 938.872 318.596 945.683 245.344 C 946.794 233.391 947.628 220.464 947.628 216.711 C 947.628 209.761 948.74 206.981 950.547 208.927 C 951.103 209.622 952.215 231.028 953.188 256.603 Z  M 971.675 211.429 C 974.177 212.541 980.988 226.024 983.768 235.337 C 995.166 274.673 996.973 288.295 996.973 337.222 C 996.973 370.025 996.417 381.284 994.471 393.516 C 991.83 409.222 984.185 439.107 979.876 449.393 L 977.513 455.37 L 967.227 455.37 C 957.358 455.37 957.08 455.231 957.775 452.173 C 958.331 450.505 959.582 431.879 960.833 410.89 C 962.779 378.087 962.918 364.604 961.528 315.677 C 960.694 284.264 959.443 248.402 958.748 235.754 C 957.914 223.105 957.358 211.846 957.358 210.595 C 957.358 208.788 958.331 208.51 963.335 209.344 C 966.532 209.9 970.285 210.873 971.675 211.429 Z  M 940.679 213.792 C 940.54 218.935 937.482 266.611 934.98 299.692 C 932.895 327.631 933.034 374.89 935.119 403.941 C 935.953 416.589 937.204 433.269 937.621 441.053 L 938.594 455.37 L 930.81 455.37 L 923.026 455.37 L 920.107 448.698 C 901.064 405.887 896.755 315.121 910.933 255.213 C 917.327 228.387 922.47 216.989 930.254 212.541 C 938.177 207.954 940.679 208.371 940.679 213.792 Z  M 988.077 219.213 C 992.525 221.576 995.722 230.75 1002.393 259.383 C 1008.648 286.349 1010.594 336.11 1006.702 368.913 C 1004.617 385.593 999.614 412.141 998.224 413.531 C 997.251 414.504 997.668 410.473 999.058 405.331 C 999.753 402.69 1001.281 391.153 1002.532 379.755 C 1008.092 325.407 1001.976 262.302 987.521 226.302 C 983.768 217.128 983.768 216.85 988.077 219.213 Z  M 911.628 229.082 C 889.945 288.851 890.501 390.458 912.601 448.003 C 915.242 454.953 915.242 455.37 913.018 455.37 C 910.516 455.37 906.207 447.169 898.84 428.96 C 883.273 390.18 878.825 316.094 888.833 264.248 C 893.002 242.148 894.253 239.09 903.566 230.194 C 908.292 225.607 912.601 221.854 913.157 221.854 C 913.713 221.854 913.018 225.19 911.628 229.082 Z  M 1004.617 232.557 C 1004.617 233.252 1006.702 235.893 1009.343 238.534 C 1011.845 241.314 1016.849 248.541 1020.324 254.518 C 1037.699 284.403 1045.483 322.349 1042.147 360.573 C 1040.479 379.477 1036.448 393.238 1026.718 412.697 C 1016.849 432.435 999.614 454.397 992.803 455.648 C 988.494 456.482 988.494 455.926 992.525 448.281 C 996.973 439.941 1003.922 419.647 1007.119 405.331 C 1014.486 373.222 1015.042 367.523 1015.042 327.492 C 1014.903 291.77 1014.625 288.017 1011.15 269.808 C 1009.065 259.105 1006.285 246.178 1004.895 240.897 C 1003.366 235.754 1002.81 231.584 1003.366 231.584 C 1004.061 231.584 1004.617 232.001 1004.617 232.557 Z  M 879.937 277.036 C 876.462 300.109 876.462 357.654 880.076 379.616 C 885.08 409.917 890.779 430.489 898.979 446.335 C 901.203 450.783 902.871 454.814 902.454 455.092 C 900.23 457.316 885.914 436.744 878.13 419.925 C 868.4 399.215 865.064 386.288 862.701 360.434 C 860.338 334.998 864.091 302.75 871.597 282.318 C 875.35 272.171 881.327 259.244 881.883 259.939 C 882.3 260.217 881.327 268.001 879.937 277.036 Z "
        fill="rgb(0,0,0)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      />
      {/* BAKED */}
      <motion.g variants={bakedVariants} initial="hidden" animate="visible">
        <motion.path
          d=" M 122.401 685.549 C 119.76 686.661 120.177 695.418 122.818 696.391 C 124.069 696.808 132.686 697.225 142.138 697.225 C 157.845 697.225 159.513 697.503 160.903 699.866 C 162.71 703.48 162.849 959.652 160.903 962.71 C 159.93 964.378 155.482 964.934 140.47 965.49 L 121.289 966.185 L 121.289 971.745 L 121.289 977.305 L 203.019 977.722 C 291.839 978 295.869 977.722 311.715 970.355 C 326.866 963.127 341.322 946.726 347.299 929.907 C 351.329 918.509 352.441 892.239 349.383 877.922 C 343.685 850.956 326.171 831.08 301.985 823.713 C 298.927 822.879 295.591 821.906 294.479 821.489 C 293.507 821.211 296.286 818.57 301.151 815.234 C 320.75 802.168 330.48 783.265 330.48 758.384 C 330.341 725.581 312.271 699.31 282.248 688.746 L 272.796 685.41 L 198.432 685.132 C 157.567 684.993 123.235 685.132 122.401 685.549 Z  M 269.46 698.615 C 294.757 703.48 312.827 722.523 316.441 747.959 C 320.472 776.315 307.406 801.056 281.97 813.149 L 272.796 817.458 L 225.259 817.875 C 178.556 818.292 177.722 818.292 176.193 815.512 C 175.22 813.427 174.803 795.218 175.081 756.299 C 175.498 707.928 175.776 699.727 177.583 698.615 C 180.363 696.808 260.008 696.808 269.46 698.615 Z  M 294.757 834.694 C 325.476 843.172 342.573 873.196 337.569 909.752 C 333.538 939.22 315.607 958.54 287.391 963.544 C 275.02 965.768 180.919 966.324 177.583 964.1 C 175.776 962.988 175.498 954.092 175.081 900.161 C 174.803 857.906 175.22 836.64 176.193 834.833 C 177.583 832.192 179.251 832.053 231.514 832.053 C 279.885 832.053 286.279 832.331 294.757 834.694 Z "
          fill="rgb(0,0,0)"
          variants={bakedItemVariants}
        />
        <motion.path
          d=" M 595.687 682.213 C 594.436 683.186 584.011 708.345 572.613 738.229 C 531.192 845.952 490.605 951.034 488.381 956.316 C 484.767 964.795 483.377 965.351 464.334 965.49 L 447.238 965.49 L 446.404 969.243 C 444.319 977.305 444.041 977.305 492.273 977.722 L 536.196 978 L 537.725 974.664 C 538.837 972.301 538.837 970.633 537.725 968.409 C 536.196 965.768 534.945 965.49 520.489 965.49 C 511.871 965.49 504.088 964.934 503.115 964.378 C 501.725 963.405 504.922 953.675 516.736 922.957 C 525.215 900.856 533.138 881.397 534.25 879.59 L 536.196 876.532 L 601.247 876.532 C 651.147 876.532 666.854 876.949 668.522 878.2 C 671.58 880.563 702.159 960.625 701.186 963.405 C 700.491 965.073 697.433 965.49 684.506 965.49 C 667.966 965.49 665.464 966.324 665.464 971.745 C 665.464 977.861 666.576 978 712.028 978 C 757.48 978 758.592 977.861 758.592 971.745 C 758.592 966.324 756.09 965.49 738.993 965.49 C 725.511 965.49 722.314 965.073 719.812 962.988 C 718.144 961.598 713.418 951.451 708.692 939.081 C 651.564 789.102 610.699 684.993 608.197 682.908 C 604.861 680.128 598.884 679.85 595.687 682.213 Z  M 633.216 783.265 C 649.479 825.381 662.406 860.547 661.989 861.242 C 661.433 862.076 638.498 862.632 601.386 862.632 C 548.706 862.632 541.756 862.354 541.756 860.547 C 541.756 856.238 600.691 705.565 602.081 705.982 C 602.915 706.26 616.954 741.009 633.216 783.265 Z "
          fill="rgb(0,0,0)"
          variants={bakedItemVariants}
        />
        <motion.path
          d=" M 850.608 686.383 C 848.245 688.746 848.523 695.418 851.164 696.391 C 852.415 696.808 861.033 697.225 870.485 697.225 C 886.192 697.225 887.86 697.503 889.25 699.866 C 891.057 703.48 891.196 959.652 889.25 962.71 C 888.277 964.378 883.829 964.934 868.817 965.49 L 849.635 966.185 L 849.635 971.745 L 849.635 977.305 L 894.531 977.722 L 939.428 978 L 940.54 974.942 C 941.235 973.135 941.235 970.494 940.679 968.965 C 939.706 966.463 938.038 966.185 922.748 965.49 C 909.821 964.934 905.512 964.378 904.539 962.71 C 903.705 961.459 903.149 943.112 903.149 920.177 L 903.149 879.729 L 930.393 849.983 C 945.405 833.582 958.053 820.099 958.609 819.96 C 959.721 819.543 1062.301 961.32 1062.301 963.266 C 1062.301 964.239 1055.768 965.073 1044.371 965.49 C 1028.108 966.185 1026.44 966.463 1025.467 968.965 C 1024.911 970.494 1024.911 973.135 1025.606 974.942 L 1026.718 978 L 1073.699 977.722 L 1120.68 977.305 L 1120.68 971.745 L 1120.68 966.185 L 1102.333 965.49 C 1084.124 964.795 1083.846 964.795 1079.815 960.625 C 1077.591 958.262 1052.155 923.93 1023.382 884.177 C 994.471 844.423 970.285 811.203 969.59 810.23 C 968.756 809.118 983.629 792.021 1018.378 754.353 C 1046.039 724.469 1069.807 699.449 1071.197 698.615 C 1072.726 697.92 1080.788 697.225 1089.267 697.225 C 1097.607 697.225 1105.391 696.808 1106.642 696.391 C 1109.699 695.279 1109.699 686.661 1106.642 685.549 C 1105.391 685.132 1083.985 684.715 1058.965 684.715 C 1011.011 684.715 1010.177 684.854 1010.177 691.109 C 1010.177 696.113 1013.096 697.086 1030.471 697.503 C 1044.788 697.92 1047.012 698.198 1046.873 700.144 C 1046.734 701.534 1014.486 737.395 975.289 779.929 L 903.844 857.489 L 903.427 780.902 C 903.288 733.226 903.705 703.063 904.539 700.839 C 905.79 697.225 905.929 697.225 921.775 697.225 C 934.563 697.225 938.177 696.808 939.984 695.001 C 942.208 692.638 941.652 687.634 938.733 685.827 C 935.953 683.881 852.415 684.576 850.608 686.383 Z "
          fill="rgb(0,0,0)"
          variants={bakedItemVariants}
        />
        <motion.path
          d=" M 1218.951 686.383 C 1216.589 688.746 1216.867 695.418 1219.507 696.391 C 1220.758 696.808 1229.376 697.225 1238.828 697.225 C 1254.535 697.225 1256.203 697.503 1257.593 699.866 C 1259.4 703.48 1259.539 959.652 1257.593 962.71 C 1256.62 964.378 1252.172 964.934 1237.16 965.49 L 1217.979 966.185 L 1217.562 970.911 C 1217.284 973.691 1217.84 976.054 1218.951 976.749 C 1219.924 977.444 1268.157 978 1325.98 978 C 1428.699 978 1431.34 978 1432.73 975.359 C 1433.564 973.691 1434.12 960.486 1434.12 942 C 1434.12 913.088 1433.981 911.142 1431.34 908.501 C 1428.004 905.165 1427.309 905.165 1423.278 907.945 C 1420.359 910.03 1420.22 910.725 1420.22 936.301 C 1420.22 960.903 1420.081 962.71 1417.579 964.1 C 1413.965 965.907 1277.191 966.046 1274.272 964.1 C 1272.466 962.988 1272.188 954.231 1271.771 902.246 C 1271.493 861.381 1271.91 840.81 1272.882 839.003 C 1274.272 836.362 1275.801 836.223 1325.702 836.223 L 1377.131 836.223 L 1377.826 839.281 C 1378.243 841.088 1378.66 848.037 1378.938 854.987 C 1379.216 867.08 1379.355 867.497 1382.968 868.748 C 1390.752 871.528 1391.03 870.277 1391.03 829.412 C 1391.03 790.492 1390.752 788.963 1384.775 788.963 C 1379.494 788.963 1378.521 791.604 1378.521 805.643 C 1378.521 814.122 1377.965 819.543 1376.853 820.655 C 1375.602 821.906 1362.119 822.323 1324.729 822.323 C 1276.357 822.323 1274.272 822.184 1272.882 819.682 C 1271.076 816.068 1270.937 705.704 1272.882 700.839 L 1274.272 697.225 L 1343.493 697.225 C 1395.478 697.225 1413.131 697.642 1414.382 698.893 C 1415.494 700.005 1416.05 708.206 1416.05 726.415 C 1416.05 744.623 1416.606 752.824 1417.718 753.936 C 1420.359 756.577 1426.892 756.021 1428.56 752.963 C 1429.394 751.295 1429.95 738.09 1429.95 719.604 C 1429.95 693.75 1429.672 688.746 1427.726 686.939 C 1425.78 684.993 1414.382 684.715 1323.061 684.715 C 1245.222 684.715 1220.202 685.132 1218.951 686.383 Z "
          fill="rgb(0,0,0)"
          variants={bakedItemVariants}
        />
        <motion.path
          d=" M 1551.294 686.244 C 1548.792 688.746 1549.07 695.418 1551.711 696.391 C 1552.962 696.808 1561.58 697.225 1571.032 697.225 C 1586.739 697.225 1588.407 697.503 1589.797 699.866 C 1591.604 703.48 1591.743 959.652 1589.797 962.71 C 1588.824 964.378 1584.376 964.934 1569.364 965.49 L 1550.182 966.185 L 1550.182 971.745 L 1550.182 977.305 L 1618.291 977.722 C 1663.743 978 1690.153 977.583 1697.52 976.61 C 1751.868 968.826 1793.845 930.185 1809.135 874.03 C 1812.471 861.52 1812.749 858.462 1812.749 831.358 C 1812.749 804.253 1812.471 801.195 1809.135 788.685 C 1801.907 762.415 1789.953 741.565 1771.327 722.801 C 1753.814 705.426 1734.493 694.584 1709.612 688.607 C 1698.354 685.827 1692.933 685.688 1625.241 685.132 C 1568.252 684.715 1552.545 684.854 1551.294 686.244 Z  M 1693.628 698.754 C 1708.083 700.7 1727.265 707.233 1739.219 714.183 C 1751.729 721.55 1773.412 743.233 1781.335 756.438 C 1788.007 767.419 1794.54 784.655 1797.876 799.249 C 1800.934 812.871 1800.934 849.983 1797.876 863.466 C 1786.2 914.617 1751.034 951.451 1703.775 962.015 C 1695.713 963.822 1683.62 964.517 1650.817 965.073 C 1612.314 965.768 1608.144 965.629 1606.059 963.405 C 1603.835 961.32 1603.696 951.173 1603.696 832.748 C 1603.696 752.685 1604.252 703.063 1605.086 700.839 L 1606.476 697.225 L 1644.562 697.225 C 1665.55 697.225 1687.651 697.92 1693.628 698.754 Z "
          fill="rgb(0,0,0)"
          variants={bakedItemVariants}
        />
      </motion.g>
    </motion.svg>
  );
}