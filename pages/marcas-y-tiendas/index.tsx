import Link from 'next/link';
import Cart from '../../components/Cart';
import Footer from '../../components/Footer';
import Mas_personal from '../../components/Mas_personal';
import NavBar from '../../components/NavBar';
import Resent_serch from '../../components/Resent_serch';
import Resientes from '../../components/Resientes';
import Sugerencias_para_ti from '../../components/Sugerencias_para_ti';
const Marcas_y_Tiendas = () => {
  return (
    <div className=" bg-white">
      <NavBar />
      <picture>
        <img className=" w-full" src="../Rectangle_134.jpg" alt="" />
        <Link className=" absolute top-28 left-24 " href="/">
          Home/
        </Link>
        <Link className=" absolute top-28 left-36 " href="/marcas-y-tiendas">
          marcas-y-tiendas
        </Link>
        <svg
          className=" absolute top-40 left-24"
          width="366"
          height="47"
          viewBox="0 0 366 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.67969 1.875H11.3828L19 25.6172L26.6172 1.875H33.3203L21.7188 36H16.2812L4.67969 1.875ZM0.601562 1.875H7.53906L8.82812 28.0312V36H0.601562V1.875ZM30.4609 1.875H37.4219V36H29.1719V28.0312L30.4609 1.875ZM55.4922 29.625V19.1719C55.4922 18.4531 55.3906 17.8359 55.1875 17.3203C54.9844 16.8047 54.6641 16.4062 54.2266 16.125C53.7891 15.8281 53.2031 15.6797 52.4688 15.6797C51.875 15.6797 51.3672 15.7812 50.9453 15.9844C50.5234 16.1875 50.2031 16.4922 49.9844 16.8984C49.7656 17.3047 49.6562 17.8203 49.6562 18.4453H41.7578C41.7578 17.2734 42.0156 16.1875 42.5312 15.1875C43.0625 14.1719 43.8125 13.2891 44.7812 12.5391C45.7656 11.7891 46.9375 11.2109 48.2969 10.8047C49.6719 10.3828 51.2031 10.1719 52.8906 10.1719C54.9062 10.1719 56.7031 10.5078 58.2812 11.1797C59.875 11.8516 61.1328 12.8594 62.0547 14.2031C62.9766 15.5312 63.4375 17.2031 63.4375 19.2188V29.6016C63.4375 31.2578 63.5312 32.5156 63.7188 33.375C63.9062 34.2188 64.1719 34.9609 64.5156 35.6016V36H56.5938C56.2188 35.2188 55.9375 34.2656 55.75 33.1406C55.5781 32 55.4922 30.8281 55.4922 29.625ZM56.4531 20.5078L56.5 24.7266H53.0078C52.2734 24.7266 51.6484 24.8281 51.1328 25.0312C50.6328 25.2344 50.2266 25.5156 49.9141 25.875C49.6172 26.2188 49.3984 26.6094 49.2578 27.0469C49.1328 27.4844 49.0703 27.9453 49.0703 28.4297C49.0703 28.8984 49.1797 29.3203 49.3984 29.6953C49.6328 30.0547 49.9453 30.3359 50.3359 30.5391C50.7266 30.7422 51.1641 30.8438 51.6484 30.8438C52.5234 30.8438 53.2656 30.6797 53.875 30.3516C54.5 30.0078 54.9766 29.5938 55.3047 29.1094C55.6328 28.625 55.7969 28.1719 55.7969 27.75L57.5312 30.9844C57.2188 31.6094 56.8594 32.2422 56.4531 32.8828C56.0625 33.5234 55.5703 34.1172 54.9766 34.6641C54.3984 35.1953 53.6875 35.6328 52.8438 35.9766C52 36.3047 50.9766 36.4688 49.7734 36.4688C48.2109 36.4688 46.7734 36.1484 45.4609 35.5078C44.1641 34.8672 43.125 33.9766 42.3438 32.8359C41.5625 31.6797 41.1719 30.3516 41.1719 28.8516C41.1719 27.5391 41.4062 26.3672 41.875 25.3359C42.3594 24.3047 43.0859 23.4297 44.0547 22.7109C45.0234 21.9922 46.2578 21.4453 47.7578 21.0703C49.2578 20.6953 51.0234 20.5078 53.0547 20.5078H56.4531ZM75.7891 16.9219V36H67.8906V10.6406H75.2734L75.7891 16.9219ZM83.2891 10.4531L83.1484 17.7891C82.8359 17.7578 82.4141 17.7188 81.8828 17.6719C81.3516 17.625 80.9062 17.6016 80.5469 17.6016C79.625 17.6016 78.8281 17.7109 78.1562 17.9297C77.5 18.1328 76.9531 18.4453 76.5156 18.8672C76.0938 19.2734 75.7812 19.7891 75.5781 20.4141C75.3906 21.0391 75.3047 21.7656 75.3203 22.5938L73.8906 21.6562C73.8906 19.9531 74.0547 18.4062 74.3828 17.0156C74.7266 15.6094 75.2109 14.3984 75.8359 13.3828C76.4609 12.3516 77.2188 11.5625 78.1094 11.0156C79 10.4531 80 10.1719 81.1094 10.1719C81.5 10.1719 81.8828 10.1953 82.2578 10.2422C82.6484 10.2891 82.9922 10.3594 83.2891 10.4531ZM96.25 30.375C96.9844 30.375 97.6094 30.2422 98.125 29.9766C98.6562 29.6953 99.0547 29.3047 99.3203 28.8047C99.6016 28.2891 99.7344 27.6719 99.7188 26.9531H107.148C107.164 28.8594 106.695 30.5312 105.742 31.9688C104.805 33.3906 103.523 34.5 101.898 35.2969C100.289 36.0781 98.4688 36.4688 96.4375 36.4688C94.4531 36.4688 92.7188 36.1484 91.2344 35.5078C89.75 34.8516 88.5078 33.9453 87.5078 32.7891C86.5234 31.6172 85.7812 30.25 85.2812 28.6875C84.7969 27.125 84.5547 25.4297 84.5547 23.6016V23.0625C84.5547 21.2344 84.7969 19.5391 85.2812 17.9766C85.7812 16.3984 86.5234 15.0312 87.5078 13.875C88.5078 12.7031 89.7422 11.7969 91.2109 11.1562C92.6953 10.5 94.4219 10.1719 96.3906 10.1719C98.5 10.1719 100.359 10.5703 101.969 11.3672C103.594 12.1641 104.867 13.3203 105.789 14.8359C106.711 16.3516 107.164 18.1875 107.148 20.3438H99.7188C99.7344 19.5781 99.6172 18.8906 99.3672 18.2812C99.1172 17.6719 98.7266 17.1875 98.1953 16.8281C97.6797 16.4531 97.0156 16.2656 96.2031 16.2656C95.3906 16.2656 94.7344 16.4453 94.2344 16.8047C93.7344 17.1641 93.3516 17.6641 93.0859 18.3047C92.8359 18.9297 92.6641 19.6484 92.5703 20.4609C92.4922 21.2734 92.4531 22.1406 92.4531 23.0625V23.6016C92.4531 24.5391 92.4922 25.4219 92.5703 26.25C92.6641 27.0625 92.8438 27.7812 93.1094 28.4062C93.375 29.0156 93.7578 29.5 94.2578 29.8594C94.7578 30.2031 95.4219 30.375 96.25 30.375ZM123.695 29.625V19.1719C123.695 18.4531 123.594 17.8359 123.391 17.3203C123.188 16.8047 122.867 16.4062 122.43 16.125C121.992 15.8281 121.406 15.6797 120.672 15.6797C120.078 15.6797 119.57 15.7812 119.148 15.9844C118.727 16.1875 118.406 16.4922 118.188 16.8984C117.969 17.3047 117.859 17.8203 117.859 18.4453H109.961C109.961 17.2734 110.219 16.1875 110.734 15.1875C111.266 14.1719 112.016 13.2891 112.984 12.5391C113.969 11.7891 115.141 11.2109 116.5 10.8047C117.875 10.3828 119.406 10.1719 121.094 10.1719C123.109 10.1719 124.906 10.5078 126.484 11.1797C128.078 11.8516 129.336 12.8594 130.258 14.2031C131.18 15.5312 131.641 17.2031 131.641 19.2188V29.6016C131.641 31.2578 131.734 32.5156 131.922 33.375C132.109 34.2188 132.375 34.9609 132.719 35.6016V36H124.797C124.422 35.2188 124.141 34.2656 123.953 33.1406C123.781 32 123.695 30.8281 123.695 29.625ZM124.656 20.5078L124.703 24.7266H121.211C120.477 24.7266 119.852 24.8281 119.336 25.0312C118.836 25.2344 118.43 25.5156 118.117 25.875C117.82 26.2188 117.602 26.6094 117.461 27.0469C117.336 27.4844 117.273 27.9453 117.273 28.4297C117.273 28.8984 117.383 29.3203 117.602 29.6953C117.836 30.0547 118.148 30.3359 118.539 30.5391C118.93 30.7422 119.367 30.8438 119.852 30.8438C120.727 30.8438 121.469 30.6797 122.078 30.3516C122.703 30.0078 123.18 29.5938 123.508 29.1094C123.836 28.625 124 28.1719 124 27.75L125.734 30.9844C125.422 31.6094 125.062 32.2422 124.656 32.8828C124.266 33.5234 123.773 34.1172 123.18 34.6641C122.602 35.1953 121.891 35.6328 121.047 35.9766C120.203 36.3047 119.18 36.4688 117.977 36.4688C116.414 36.4688 114.977 36.1484 113.664 35.5078C112.367 34.8672 111.328 33.9766 110.547 32.8359C109.766 31.6797 109.375 30.3516 109.375 28.8516C109.375 27.5391 109.609 26.3672 110.078 25.3359C110.562 24.3047 111.289 23.4297 112.258 22.7109C113.227 21.9922 114.461 21.4453 115.961 21.0703C117.461 20.6953 119.227 20.5078 121.258 20.5078H124.656ZM149.312 28.875C149.312 28.4375 149.164 28.0625 148.867 27.75C148.586 27.4219 148.086 27.125 147.367 26.8594C146.648 26.5781 145.641 26.2969 144.344 26.0156C143.109 25.75 141.945 25.3984 140.852 24.9609C139.773 24.5234 138.828 23.9922 138.016 23.3672C137.203 22.7422 136.562 22 136.094 21.1406C135.641 20.2812 135.414 19.2969 135.414 18.1875C135.414 17.1094 135.641 16.0938 136.094 15.1406C136.562 14.1719 137.242 13.3203 138.133 12.5859C139.039 11.8359 140.141 11.25 141.438 10.8281C142.734 10.3906 144.211 10.1719 145.867 10.1719C148.148 10.1719 150.117 10.5234 151.773 11.2266C153.43 11.9141 154.703 12.8828 155.594 14.1328C156.5 15.3672 156.953 16.7969 156.953 18.4219H149.055C149.055 17.7812 148.945 17.2344 148.727 16.7812C148.523 16.3281 148.188 15.9844 147.719 15.75C147.25 15.5 146.625 15.375 145.844 15.375C145.297 15.375 144.797 15.4766 144.344 15.6797C143.906 15.8828 143.555 16.1641 143.289 16.5234C143.023 16.8828 142.891 17.3047 142.891 17.7891C142.891 18.1328 142.969 18.4453 143.125 18.7266C143.297 18.9922 143.555 19.2422 143.898 19.4766C144.242 19.6953 144.68 19.8984 145.211 20.0859C145.742 20.2578 146.383 20.4141 147.133 20.5547C148.836 20.8672 150.43 21.3125 151.914 21.8906C153.398 22.4688 154.602 23.2891 155.523 24.3516C156.461 25.4141 156.93 26.8438 156.93 28.6406C156.93 29.7656 156.672 30.8047 156.156 31.7578C155.641 32.6953 154.898 33.5234 153.93 34.2422C152.961 34.9453 151.797 35.4922 150.438 35.8828C149.078 36.2734 147.547 36.4688 145.844 36.4688C143.422 36.4688 141.375 36.0391 139.703 35.1797C138.031 34.3047 136.766 33.2109 135.906 31.8984C135.062 30.5703 134.641 29.2266 134.641 27.8672H142C142.031 28.6484 142.219 29.2891 142.562 29.7891C142.922 30.2891 143.398 30.6562 143.992 30.8906C144.586 31.125 145.273 31.2422 146.055 31.2422C146.773 31.2422 147.367 31.1406 147.836 30.9375C148.32 30.7344 148.688 30.4609 148.938 30.1172C149.188 29.7578 149.312 29.3438 149.312 28.875ZM180.367 33.0234L186.93 10.6406H195.414L185.219 39.7734C185 40.4141 184.711 41.1016 184.352 41.8359C183.992 42.5859 183.5 43.2969 182.875 43.9688C182.25 44.6406 181.445 45.1875 180.461 45.6094C179.492 46.0312 178.289 46.2422 176.852 46.2422C176.086 46.2422 175.523 46.2031 175.164 46.125C174.82 46.0625 174.289 45.9453 173.57 45.7734V40.125C173.773 40.125 173.945 40.125 174.086 40.125C174.242 40.125 174.414 40.125 174.602 40.125C175.445 40.125 176.117 40.0391 176.617 39.8672C177.133 39.6953 177.523 39.4453 177.789 39.1172C178.07 38.7891 178.289 38.3906 178.445 37.9219L180.367 33.0234ZM178.703 10.6406L183.695 28.3828L184.562 36.75H179.266L170.242 10.6406H178.703ZM222.789 10.6406V16.125H207.508V10.6406H222.789ZM210.719 4.33594H218.617V27.7266C218.617 28.3984 218.695 28.9219 218.852 29.2969C219.008 29.6562 219.273 29.9141 219.648 30.0703C220.039 30.2109 220.555 30.2812 221.195 30.2812C221.648 30.2812 222.023 30.2734 222.32 30.2578C222.617 30.2266 222.898 30.1875 223.164 30.1406V35.7891C222.492 36.0078 221.789 36.1719 221.055 36.2812C220.32 36.4062 219.539 36.4688 218.711 36.4688C217.023 36.4688 215.578 36.2031 214.375 35.6719C213.188 35.1406 212.281 34.3047 211.656 33.1641C211.031 32.0234 210.719 30.5391 210.719 28.7109V4.33594ZM234.273 10.6406V36H226.352V10.6406H234.273ZM225.883 4.10156C225.883 2.97656 226.289 2.05469 227.102 1.33594C227.914 0.617187 228.969 0.257812 230.266 0.257812C231.562 0.257812 232.617 0.617187 233.43 1.33594C234.242 2.05469 234.648 2.97656 234.648 4.10156C234.648 5.22656 234.242 6.14844 233.43 6.86719C232.617 7.58594 231.562 7.94531 230.266 7.94531C228.969 7.94531 227.914 7.58594 227.102 6.86719C226.289 6.14844 225.883 5.22656 225.883 4.10156ZM251.43 36.4688C249.367 36.4688 247.523 36.1484 245.898 35.5078C244.273 34.8516 242.898 33.9531 241.773 32.8125C240.664 31.6719 239.812 30.3594 239.219 28.875C238.641 27.3906 238.352 25.8203 238.352 24.1641V23.2734C238.352 21.4141 238.609 19.6953 239.125 18.1172C239.641 16.5234 240.406 15.1328 241.422 13.9453C242.438 12.7578 243.711 11.8359 245.242 11.1797C246.773 10.5078 248.555 10.1719 250.586 10.1719C252.383 10.1719 253.992 10.4609 255.414 11.0391C256.836 11.6172 258.039 12.4453 259.023 13.5234C260.023 14.6016 260.781 15.9062 261.297 17.4375C261.828 18.9688 262.094 20.6875 262.094 22.5938V25.8047H241.375V20.8594H254.383V20.25C254.398 19.4062 254.25 18.6875 253.938 18.0938C253.641 17.5 253.203 17.0469 252.625 16.7344C252.047 16.4219 251.344 16.2656 250.516 16.2656C249.656 16.2656 248.945 16.4531 248.383 16.8281C247.836 17.2031 247.406 17.7188 247.094 18.375C246.797 19.0156 246.586 19.7578 246.461 20.6016C246.336 21.4453 246.273 22.3359 246.273 23.2734V24.1641C246.273 25.1016 246.398 25.9531 246.648 26.7188C246.914 27.4844 247.289 28.1406 247.773 28.6875C248.273 29.2188 248.867 29.6328 249.555 29.9297C250.258 30.2266 251.055 30.375 251.945 30.375C253.023 30.375 254.086 30.1719 255.133 29.7656C256.18 29.3594 257.078 28.6875 257.828 27.75L261.414 32.0156C260.898 32.75 260.164 33.4609 259.211 34.1484C258.273 34.8359 257.148 35.3984 255.836 35.8359C254.523 36.2578 253.055 36.4688 251.43 36.4688ZM273.062 16.0547V36H265.164V10.6406H272.57L273.062 16.0547ZM272.125 22.4531L270.273 22.5C270.273 20.5625 270.508 18.8359 270.977 17.3203C271.445 15.7891 272.109 14.4922 272.969 13.4297C273.828 12.3672 274.852 11.5625 276.039 11.0156C277.242 10.4531 278.578 10.1719 280.047 10.1719C281.219 10.1719 282.289 10.3438 283.258 10.6875C284.242 11.0312 285.086 11.5859 285.789 12.3516C286.508 13.1172 287.055 14.1328 287.43 15.3984C287.82 16.6484 288.016 18.1953 288.016 20.0391V36H280.07V20.0156C280.07 19 279.93 18.2266 279.648 17.6953C279.367 17.1484 278.961 16.7734 278.43 16.5703C277.898 16.3672 277.25 16.2656 276.484 16.2656C275.672 16.2656 274.984 16.4219 274.422 16.7344C273.859 17.0469 273.406 17.4844 273.062 18.0469C272.734 18.5938 272.492 19.2422 272.336 19.9922C272.195 20.7422 272.125 21.5625 272.125 22.4531ZM306.977 30.1875V0H314.922V36H307.797L306.977 30.1875ZM291.414 23.625V23.1328C291.414 21.2109 291.625 19.4609 292.047 17.8828C292.469 16.2891 293.094 14.9219 293.922 13.7812C294.75 12.625 295.781 11.7344 297.016 11.1094C298.25 10.4844 299.672 10.1719 301.281 10.1719C302.719 10.1719 303.977 10.5078 305.055 11.1797C306.133 11.8359 307.055 12.7578 307.82 13.9453C308.586 15.1328 309.211 16.5234 309.695 18.1172C310.18 19.6953 310.547 21.3984 310.797 23.2266V23.8125C310.547 25.5312 310.18 27.1562 309.695 28.6875C309.211 30.2031 308.586 31.5469 307.82 32.7188C307.055 33.8906 306.125 34.8125 305.031 35.4844C303.953 36.1406 302.688 36.4688 301.234 36.4688C299.625 36.4688 298.203 36.1484 296.969 35.5078C295.75 34.8672 294.727 33.9688 293.898 32.8125C293.086 31.6562 292.469 30.2969 292.047 28.7344C291.625 27.1719 291.414 25.4688 291.414 23.625ZM299.312 23.1328V23.625C299.312 24.5781 299.375 25.4609 299.5 26.2734C299.625 27.0859 299.836 27.8047 300.133 28.4297C300.445 29.0391 300.852 29.5156 301.352 29.8594C301.867 30.2031 302.5 30.375 303.25 30.375C304.266 30.375 305.102 30.1328 305.758 29.6484C306.43 29.1641 306.922 28.4766 307.234 27.5859C307.562 26.6953 307.703 25.6484 307.656 24.4453V22.5938C307.688 21.5625 307.617 20.6562 307.445 19.875C307.273 19.0781 307 18.4141 306.625 17.8828C306.266 17.3516 305.805 16.9531 305.242 16.6875C304.695 16.4062 304.047 16.2656 303.297 16.2656C302.562 16.2656 301.938 16.4375 301.422 16.7812C300.922 17.125 300.516 17.6094 300.203 18.2344C299.891 18.8438 299.664 19.5703 299.523 20.4141C299.383 21.2422 299.312 22.1484 299.312 23.1328ZM332.57 29.625V19.1719C332.57 18.4531 332.469 17.8359 332.266 17.3203C332.062 16.8047 331.742 16.4062 331.305 16.125C330.867 15.8281 330.281 15.6797 329.547 15.6797C328.953 15.6797 328.445 15.7812 328.023 15.9844C327.602 16.1875 327.281 16.4922 327.062 16.8984C326.844 17.3047 326.734 17.8203 326.734 18.4453H318.836C318.836 17.2734 319.094 16.1875 319.609 15.1875C320.141 14.1719 320.891 13.2891 321.859 12.5391C322.844 11.7891 324.016 11.2109 325.375 10.8047C326.75 10.3828 328.281 10.1719 329.969 10.1719C331.984 10.1719 333.781 10.5078 335.359 11.1797C336.953 11.8516 338.211 12.8594 339.133 14.2031C340.055 15.5312 340.516 17.2031 340.516 19.2188V29.6016C340.516 31.2578 340.609 32.5156 340.797 33.375C340.984 34.2188 341.25 34.9609 341.594 35.6016V36H333.672C333.297 35.2188 333.016 34.2656 332.828 33.1406C332.656 32 332.57 30.8281 332.57 29.625ZM333.531 20.5078L333.578 24.7266H330.086C329.352 24.7266 328.727 24.8281 328.211 25.0312C327.711 25.2344 327.305 25.5156 326.992 25.875C326.695 26.2188 326.477 26.6094 326.336 27.0469C326.211 27.4844 326.148 27.9453 326.148 28.4297C326.148 28.8984 326.258 29.3203 326.477 29.6953C326.711 30.0547 327.023 30.3359 327.414 30.5391C327.805 30.7422 328.242 30.8438 328.727 30.8438C329.602 30.8438 330.344 30.6797 330.953 30.3516C331.578 30.0078 332.055 29.5938 332.383 29.1094C332.711 28.625 332.875 28.1719 332.875 27.75L334.609 30.9844C334.297 31.6094 333.938 32.2422 333.531 32.8828C333.141 33.5234 332.648 34.1172 332.055 34.6641C331.477 35.1953 330.766 35.6328 329.922 35.9766C329.078 36.3047 328.055 36.4688 326.852 36.4688C325.289 36.4688 323.852 36.1484 322.539 35.5078C321.242 34.8672 320.203 33.9766 319.422 32.8359C318.641 31.6797 318.25 30.3516 318.25 28.8516C318.25 27.5391 318.484 26.3672 318.953 25.3359C319.438 24.3047 320.164 23.4297 321.133 22.7109C322.102 21.9922 323.336 21.4453 324.836 21.0703C326.336 20.6953 328.102 20.5078 330.133 20.5078H333.531ZM358.188 28.875C358.188 28.4375 358.039 28.0625 357.742 27.75C357.461 27.4219 356.961 27.125 356.242 26.8594C355.523 26.5781 354.516 26.2969 353.219 26.0156C351.984 25.75 350.82 25.3984 349.727 24.9609C348.648 24.5234 347.703 23.9922 346.891 23.3672C346.078 22.7422 345.438 22 344.969 21.1406C344.516 20.2812 344.289 19.2969 344.289 18.1875C344.289 17.1094 344.516 16.0938 344.969 15.1406C345.438 14.1719 346.117 13.3203 347.008 12.5859C347.914 11.8359 349.016 11.25 350.312 10.8281C351.609 10.3906 353.086 10.1719 354.742 10.1719C357.023 10.1719 358.992 10.5234 360.648 11.2266C362.305 11.9141 363.578 12.8828 364.469 14.1328C365.375 15.3672 365.828 16.7969 365.828 18.4219H357.93C357.93 17.7812 357.82 17.2344 357.602 16.7812C357.398 16.3281 357.062 15.9844 356.594 15.75C356.125 15.5 355.5 15.375 354.719 15.375C354.172 15.375 353.672 15.4766 353.219 15.6797C352.781 15.8828 352.43 16.1641 352.164 16.5234C351.898 16.8828 351.766 17.3047 351.766 17.7891C351.766 18.1328 351.844 18.4453 352 18.7266C352.172 18.9922 352.43 19.2422 352.773 19.4766C353.117 19.6953 353.555 19.8984 354.086 20.0859C354.617 20.2578 355.258 20.4141 356.008 20.5547C357.711 20.8672 359.305 21.3125 360.789 21.8906C362.273 22.4688 363.477 23.2891 364.398 24.3516C365.336 25.4141 365.805 26.8438 365.805 28.6406C365.805 29.7656 365.547 30.8047 365.031 31.7578C364.516 32.6953 363.773 33.5234 362.805 34.2422C361.836 34.9453 360.672 35.4922 359.312 35.8828C357.953 36.2734 356.422 36.4688 354.719 36.4688C352.297 36.4688 350.25 36.0391 348.578 35.1797C346.906 34.3047 345.641 33.2109 344.781 31.8984C343.938 30.5703 343.516 29.2266 343.516 27.8672H350.875C350.906 28.6484 351.094 29.2891 351.438 29.7891C351.797 30.2891 352.273 30.6562 352.867 30.8906C353.461 31.125 354.148 31.2422 354.93 31.2422C355.648 31.2422 356.242 31.1406 356.711 30.9375C357.195 30.7344 357.562 30.4609 357.812 30.1172C358.062 29.7578 358.188 29.3438 358.188 28.875Z"
            fill="#F3F243"
          />
        </svg>
      </picture>
      <div className="centralizacion">
        <div>
          <Resent_serch />
          <h1 className=" font-bold text-xl relative left-24 pt-10">
            Populares en Querétaro
          </h1>
          <p className="relative left-24 text-neutral-500">
            Lo que las personas piden más
          </p>
          <Cart />
        </div>
        <div className="h-[700px]">
          <Sugerencias_para_ti />
        </div>
        <Mas_personal />
        <Resientes />
      </div>
      <Footer />
    </div>
  );
};

export default Marcas_y_Tiendas;
