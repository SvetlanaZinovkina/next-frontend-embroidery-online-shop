interface FooterDict {
  signUp: string;
  textNoAccount: string;
}

interface LoginFormDict {
  signIn: string;
  userName: string;
  userPassword: string;
  btn: string;
  footer: FooterDict;
}

interface SignUpFormDict {
  signUp: string;
  userName: string;
  userPassword: string;
  btn: string;
  footer: {
    signIn: string;
    textHaveAccount: string;
  };
}

interface NotFoundDict {
  notPage: string;
  mainLink: string;
}

interface NavBarDict {
  main: string;
  embroidery: string;
  svg: string;
  discount: string;
  contactMe: string;
  telegramShop: string;
  nameShop: string;
}

interface MainPageDict {
  catalog: string;
  welcome: string;
  describe: string;
  popularEmbroidery: string;
  newEmbroidery: string;
  rules0: string;
  rules1: string;
  rules2: string;
  rules3: string;
  rules4: string;
  rules5: string;
  rules6: string;
  rules7: string;
  rules8: string;
}

interface FooterMainDict {
  contacts: string;
  phoneNumber: string;
  email: string;
  address: string;
  policy: string;
  navBar: NavBarDict;
}

interface Policy {
  title: string;
  sitePolicy: string;
  confidentialPolicy: string;
  changePolicy: string;
  beforeBuy: string;
  afterBuy: string;
  contactMe: string;
  chatMe: string;
  policy1: string;
  policyTitle1: string;
  policy2: string;
  policyTitle2: string;
  policy3: string;
  policyTitle3: string;
  policy4: string;
  policyTitle4: string;
  policy5: string;
  policyTitle5: string;
  policy6: string;
  policyTitle6: string;
  policy7: string;
  policyTitle7: string;
  policy8: string;
  policyTitle8: string;
  policy9: string;
  policyTitle9: string;
  policy10: string;
}

interface Catalog {
  clearCategory: string;
  category: string;
}
export interface Dict {
  loginForm: LoginFormDict;
  signUpForm: SignUpFormDict;
  notFound: NotFoundDict;
  navBar: NavBarDict;
  mainPage: MainPageDict;
  footer: FooterMainDict;
  policy: Policy;
  catalog: Catalog;
}
