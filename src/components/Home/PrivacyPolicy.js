import React from "react";
import {
  createStyles,
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import LightFooter from "./components/LightFooter";
import BackgroundOverlay from "../BackgroundOverlay";
import HeaderSearch from "../Insights/components/HeaderSearch";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1D1A27",
    },
    secondary: {
      light: "#1D1A27",
      main: "#1D1A27",
    },
  },
});

const useStyles = makeStyles(() =>
  createStyles({
    padding: {
      textAlign: "left",
      alignSelf: "center",
      color: "#1D1A27",
      width: "50%",
      margin: "0 auto",
      // marginLeft: "50px",
      // marginRight: "50px",
      minWidth: "970px",
    },
    container: {
      minWidth: "970px",
      width: "100%",
      position: "relative",
      overflowX: "hidden",
    },
    policyContainer: {
      minWidth: "970px",
      width: "100%",
      margin: "0 20px",
    },
    footer: {
      marginTop: "50px",
      marginBottom: "20px",
    },
  })
);

export default function PrivacyPolicy() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        <BackgroundOverlay color="#f5f9fc" />
        <HeaderSearch region="KR" />
        <div className={classes.policyContainer}>
          <div className={classes.padding}>
            <h1>Privacy Policy</h1>

            <p>
              At Daiv, accessible from daiv.app, one of our main priorities is
              the privacy of our visitors. This Privacy Policy document contains
              types of information that is collected and recorded by Daiv and
              how we use it.
            </p>

            <p>
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
            </p>

            <p>
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in Daiv. This policy is not
              applicable to any information collected offline or via channels
              other than this website.
            </p>

            <h2>Consent</h2>

            <p>
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </p>

            <h2>Information we collect</h2>

            <p>
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information.
            </p>
            <p>
              If you contact us directly, we may receive additional information
              about you such as your name, email address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide.
            </p>
            <p>
              When you register for an Account, we may ask for your contact
              information, including items such as name, company name, address,
              email address, and telephone number.
            </p>

            <h2>How we use your information</h2>

            <p>
              We use the information we collect in various ways, including to:
            </p>

            <ul>
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
            </ul>

            <h2>Log Files</h2>

            <p>
              Daiv follows a standard procedure of using log files. These files
              log visitors when they visit websites. All hosting companies do
              this and a part of hosting services' analytics. The information
              collected by log files include internet protocol (IP) addresses,
              browser type, Internet Service Provider (ISP), date and time
              stamp, referring/exit pages, and possibly the number of clicks.
              These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users' movement on the
              website, and gathering demographic information.
            </p>

            {/* <h2>Google DoubleClick DART Cookie</h2>

        <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></p>

        <h2>Our Advertising Partners</h2>

        <p>Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.</p>

        <ul>
          <li>
            <p>Google</p>
            <p><a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></p>
          </li>
        </ul> */}
            <h2>Sale of Business or Assets</h2>
            <p>
              In the event that the Site or substantially all of its assets is
              sold or disposed of as a going concern, whether by merger, sale of
              assets or otherwise, or in the event of an insolvency, bankruptcy
              or receivership, the information we have collected about you may
              be one of the assets sold or merged in connection with that
              transaction.
            </p>

            <h2>Advertising Partners Privacy Policies</h2>

            <p>
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of Daiv.
            </p>

            <p>
              Third-party ad servers or ad networks uses technologies like
              cookies, JavaScript, or Web Beacons that are used in their
              respective advertisements and links that appear on Daiv, which are
              sent directly to users' browser. They automatically receive your
              IP address when this occurs. These technologies are used to
              measure the effectiveness of their advertising campaigns and/or to
              personalize the advertising content that you see on websites that
              you visit.
            </p>

            <p>
              Note that Daiv has no access to or control over these cookies that
              are used by third-party advertisers.
            </p>

            <h2>Third Party Privacy Policies</h2>

            <p>
              Daiv's Privacy Policy does not apply to other advertisers or
              websites. Thus, we are advising you to consult the respective
              Privacy Policies of these third-party ad servers for more detailed
              information. It may include their practices and instructions about
              how to opt-out of certain options.{" "}
            </p>

            <p>
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers'
              respective websites.
            </p>

            <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>

            <p>
              Under the CCPA, among other rights, California consumers have the
              right to:
            </p>
            <p>
              Request that a business that collects a consumer's personal data
              disclose the categories and specific pieces of personal data that
              a business has collected about consumers.
            </p>
            <p>
              Request that a business delete any personal data about the
              consumer that a business has collected.
            </p>
            <p>
              Request that a business that sells a consumer's personal data, not
              sell the consumer's personal data.
            </p>
            <p>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>

            <h2>GDPR Data Protection Rights</h2>

            <p>
              We would like to make sure you are fully aware of all of your data
              protection rights. Every user is entitled to the following:
            </p>
            <p>
              The right to access – You have the right to request copies of your
              personal data. We may charge you a small fee for this service.
            </p>
            <p>
              The right to rectification – You have the right to request that we
              correct any information you believe is inaccurate. You also have
              the right to request that we complete the information you believe
              is incomplete.
            </p>
            <p>
              The right to erasure – You have the right to request that we erase
              your personal data, under certain conditions.
            </p>
            <p>
              The right to restrict processing – You have the right to request
              that we restrict the processing of your personal data, under
              certain conditions.
            </p>
            <p>
              The right to object to processing – You have the right to object
              to our processing of your personal data, under certain conditions.
            </p>
            <p>
              The right to data portability – You have the right to request that
              we transfer the data that we have collected to another
              organization, or directly to you, under certain conditions.
            </p>
            <p>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>

            <h2>Children's Information</h2>

            <p>
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </p>

            <p>
              Daiv does not knowingly collect any Personal Identifiable
              Information from children under the age of 13. If you think that
              your child provided this kind of information on our website, we
              strongly encourage you to contact us immediately and we will do
              our best efforts to promptly remove such information from our
              records.
            </p>
            <br></br>
            <p>Effective Date: September 18, 2021</p>
          </div>
          <div className={classes.footer}>
            <LightFooter />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
