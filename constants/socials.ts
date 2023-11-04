type Props = {
  title: string;
  icon: any;
  url: string;
};
export const socials: Props[] = [
  {
    title: "What's app",
    icon: "whatsapp",
    url: "whatsapp://send?text=Hello Sir&phone=+2348079125783",
  },
  {
    title: "Email",
    icon: "envelope",
    url: "mailto:chukumelawilson@gmail.com?subject=Hello Sir",
  },
  {
    title: "Phone",
    icon: "phone",
    url: "tel:+2348079125783",
  },
];
