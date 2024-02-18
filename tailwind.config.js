import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
          colors: {
            "world-peas-cremini-base": "#fff",
            snow: "#fffbf9",
            slategray: {
              "100": "#777394",
              "200": "#716c8e",
              "300": "rgba(113, 108, 142, 0.5)",
            },
            midnightblue: {
              "100": "#160f44",
              "200": "rgba(22, 15, 68, 0.18)",
            },
            "world-peas-compost-base": "#000",
            plum: "#8e7ab5",
            darkslateblue: "#75619c",
            gray: "#fafafa",
            whitesmoke: "#f2f2f2",
            palevioletred: "#e493b3",
            lavenderblush: "#fff3f3",
            "world-peas-midnight": "#14003d",
          },
          spacing: {},
          fontFamily: {
            "open-sans": "'Open Sans'",
            poppins: "Poppins",
            "desktop-body-large-default": "Inter",
          },
          borderRadius: {
            "6xs": "7px",
            "4xs": "9px",
            "12xl": "31px",
            "81xl": "100px",
          },
        },
        fontSize: {
          base: "16px",
          lg: "18px",
          "5xl": "24px",
          lgi: "19px",
          "13xl": "32px",
          "7xl": "26px",
          "23xl": "42px",
          "6xl": "25px",
          "15xl": "34px",
          "2xl": "21px",
          mid: "17px",
          "29xl": "48px",
          "10xl": "29px",
          "19xl": "38px",
          "37xl": "56px",
          "26xl": "45px",
          inherit: "inherit",
        },
        screens: {
          mq1050: {
            raw: "screen and (max-width: 1050px)",
          },
          mq1000: {
            raw: "screen and (max-width: 1000px)",
          },
          mq725: {
            raw: "screen and (max-width: 725px)",
          },
          mq450: {
            raw: "screen and (max-width: 450px)",
          },
        },
      },

    plugins: [forms, typography],
};
