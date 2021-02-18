const express = require("express");
const router = express.Router();
const smtpTransport = require("nodemailer-smtp-transport");
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: "colegio.geek.oficial@gmail.com",
    pass: "Colegio12@",
  },
});

module.exports = {
  sendEmail: (req, res) => {
    const { name, surname, email, password } = req.body;

    contentHTML = `<!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <title>Page Title</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
            <script src="main.js"></script>
          </head>
          <body>
            <div id=":13b" class="a3s aiL msg3112354034380291461">
              <u></u>
        
              <div style="background-color: #fff;">
                <div
                  style="
                    color: transparent;
                    opacity: 0;
                    font-size: 0px;
                    border: 0;
                    max-height: 1px;
                    width: 1px;
                    margin: 0px;
                    padding: 0px;
                    border-width: 0px !important;
                    display: none !important;
                    line-height: 0px !important;
                  "
                >
                  <img
                    border="0"
                    width="1"
                    height="1"
                    src="https://ci5.googleusercontent.com/proxy/oAehCHBnLfC7UAbUV-5m4IOqmsN5Wj5eoga3O1i_gCdEkjQNOFGd_kDYChOagdGlAf7gdH3Ack6wZdDfFfXey4Da_QUR6HwisHqawKGPi1qBLiOsBkpL4p-y5VihPAutalxWlBdJUFLs00lfKkNvyPywqErtZSnWG2uXB3n5HfmMASzlIYykQUvroz0U_MYEgoYsoZMykHYE9K1VDhG4hgODKCU=s0-d-e1-ft#https://metrics.dyspatch.io/q/WvQz1M3usc_mvaa5fkbIXA~~/AANZRQA~/RgRh-rOpPVcDc3BjQgpgFqkuGGDkSaZrUhp2aWxsZWdhc3NhbXVlbDI1QGdtYWlsLmNvbVgEAAAAAA~~"
                    class="CToWUd"
                  />
                </div>
                <div style="background-color: #380a6d;">
                  <div
                    style="
                      background: #ffffff;
                      background-color: #ffffff;
                      margin: 0px auto;
                      max-width: 600px;
                    "
                  >
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="
                        background: #380a6d;
                        background-color: #380a6d;
                        width: 100%;
                      "
                    >
                      <tbody>
                        <tr>
                          <td
                            style="
                              direction: ltr;
                              font-size: 0px;
                              padding: 0px;
                              text-align: center;
                              vertical-align: top;
                            "
                          >
                            <div
                              class="m_3112354034380291461dys-column-per-100"
                              style="
                                direction: ltr;
                                display: inline-block;
                                font-size: 13px;
                                text-align: left;
                                vertical-align: top;
                                width: 100%;
                              "
                            >
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="vertical-align: top;"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      align="center"
                                      style="
                                        font-size: 0px;
                                        padding: 0px;
                                        word-break: break-word;
                                      "
                                    >
                                      <table
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                      >
                                        <tbody>
                                          <tr>
                                            <td style="width: 600px;">
                                              <img
                                                alt=""
                                                height="auto"
                                                src="https://productivityland.com/wp-content/uploads/productivity-tips-and-tricks-for-freelancers-scaled.jpg"
                                                style="
                                                  border: none;
                                                  display: block;
                                                  font-size: 13px;
                                                  height: auto;
                                                  outline: none;
                                                  text-decoration: none;
                                                  width: 100%;
                                                "
                                                title=""
                                                width="600"
                                                class="CToWUd a6T"
                                                tabindex="0"
                                              />
                                              <div
                                                class="a6S"
                                                dir="ltr"
                                                style="
                                                  opacity: 0.01;
                                                  left: 658.333px;
                                                  top: 510.667px;
                                                "
                                              >
                                                <div
                                                  id=":1zk"
                                                  class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q"
                                                  role="button"
                                                  tabindex="0"
                                                  aria-label="Descargar el archivo adjunto "
                                                  data-tooltip-class="a1V"
                                                  data-tooltip="Descargar"
                                                >
                                                  <div class="akn">
                                                    <div class="aSK J-J5-Ji aYr"></div>
                                                  </div>
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
        
                  <div
                    style="
                      background: #ffffff;
                      background-color: #380a6d;
                      margin: 0px auto;
                      max-width: 600px;
                    "
                  >
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="
                        background: #ffffff;
                        background-color: #ffffff;
                        width: 100%;
                      "
                    >
                      <tbody>
                        <tr>
                          <td
                            style="
                              direction: ltr;
                              font-size: 0px;
                              padding: 20px 0;
                              text-align: center;
                              vertical-align: top;
                            "
                          >
                            <div
                              class="m_3112354034380291461dys-column-per-100"
                              style="
                                direction: ltr;
                                display: inline-block;
                                font-size: 13px;
                                text-align: left;
                                vertical-align: top;
                                width: 100%;
                              "
                            >
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="vertical-align: top;"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      align="center"
                                      style="
                                        font-size: 0px;
                                        padding: 10px 25px;
                                        word-break: break-word;
                                      "
                                    >
                                      <h2
                                        style="
                                          color: #25074b;
                                          font-family: Nunito Sans, Arial, sans-serif;
                                          font-size: 32px;
                                          font-weight: 600;
                                          line-height: 46px;
                                          margin: 0;
                                          padding: 0;
                                          text-align: center;
                                        "
                                      >
                                        Welcome to DoIt App
                                      </h2>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
        
                  <div
                    style="
                      background: #ffffff;
                      background-color: #ffffff;
                      margin: 0px auto;
                      max-width: 600px;
                    "
                  >
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="
                        background: #ffffff;
                        background-color: #ffffff;
                        width: 100%;
                      "
                    >
                      <tbody>
                        <tr>
                          <td
                            style="
                              direction: ltr;
                              font-size: 0px;
                              padding: 20px 0;
                              text-align: center;
                              vertical-align: top;
                            "
                          >
                            <div
                              class="m_3112354034380291461dys-column-per-100"
                              style="
                                direction: ltr;
                                display: inline-block;
                                font-size: 13px;
                                text-align: left;
                                vertical-align: top;
                                width: 100%;
                              "
                            >
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="vertical-align: top;"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      align="center"
                                      style="
                                        font-size: 0px;
                                        padding: 10px 25px;
                                        word-break: break-word;
                                      "
                                    >
                                      <div
                                        style="
                                          color: #25074b;
                                          font-family: Nunito Sans, Arial, sans-serif;
                                          font-size: 16px;
                                          font-weight: 400;
                                          line-height: 26px;
                                          text-align: center;
                                        "
                                      >
                                        Greeting ${name}! You just sign up on DoIt
                                        App, where you can control and manage all your
                                        daily tasks and be more productive. Click on the
                                        following link: http://localhost:3000/ where you
                                        can access your profile with these credentials:
                                        <br /><br />
                                        Email: ${email}<br />
                                        Password: ${password}
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
        
                  <div
                    style="
                      background: #ffffff;
                      background-color: #ffffff;
                      margin: 0px auto;
                      max-width: 600px;
                    "
                  >
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="
                        background: #ffffff;
                        background-color: #ffffff;
                        width: 100%;
                      "
                    >
                      <tbody>
                        <tr>
                          <td
                            style="
                              direction: ltr;
                              font-size: 0px;
                              padding: 0px;
                              text-align: center;
                              vertical-align: top;
                            "
                          >
                            <div
                              class="m_3112354034380291461dys-column-per-100"
                              style="
                                direction: ltr;
                                display: inline-block;
                                font-size: 13px;
                                text-align: left;
                                vertical-align: top;
                                width: 100%;
                              "
                            >
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td style="padding: 0px; vertical-align: top;">
                                      <table
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        width="100%"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="center"
                                              style="
                                                font-size: 0px;
                                                padding: 0px;
                                                word-break: break-word;
                                              "
                                            >
                                              <div
                                                style="
                                                  color: #555555;
                                                  font-family: Nunito Sans, Arial,
                                                    sans-serif;
                                                  font-size: 16px;
                                                  font-weight: 400;
                                                  line-height: 26px;
                                                  text-align: center;
                                                "
                                              >
                                                <a
                                                  class="m_3112354034380291461gray-link"
                                                  href="#m_3112354034380291461_"
                                                  style="color: #2600d1;"
                                                  >My Account</a
                                                >
                                                <span style="padding: 0px 5px;">|</span>
                                                <a
                                                  class="m_3112354034380291461gray-link"
                                                  href="#m_3112354034380291461_"
                                                  style="color: #2600d1;"
                                                  >Contact Us</a
                                                >
                                                <span style="padding: 0px 5px;">|</span>
                                                <a
                                                  class="m_3112354034380291461gray-link"
                                                  href="#m_3112354034380291461_"
                                                  style="color: #2600d1;"
                                                  >Privacy Policy</a
                                                >
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
        
                  <div
                    style="
                      background: #ffffff;
                      background-color: #ffffff;
                      margin: 0px auto;
                      max-width: 600px;
                    "
                  >
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="
                        background: #ffffff;
                        background-color: #ffffff;
                        width: 100%;
                      "
                    >
                      <tbody>
                        <tr>
                          <td
                            style="
                              direction: ltr;
                              font-size: 0px;
                              padding: 20px 0;
                              padding-top: 10px;
                              text-align: center;
                              vertical-align: top;
                            "
                          >
                            <div
                              class="m_3112354034380291461dys-column-per-100"
                              style="
                                direction: ltr;
                                display: inline-block;
                                font-size: 13px;
                                text-align: left;
                                vertical-align: top;
                                width: 100%;
                              "
                            >
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="vertical-align: top;"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      align="center"
                                      style="
                                        font-size: 0px;
                                        padding: 10px 25px;
                                        word-break: break-word;
                                      "
                                    >
                                      <div
                                        style="
                                          color: #787878;
                                          font-family: Nunito Sans, Arial, sans-serif;
                                          font-size: 12px;
                                          font-weight: 400;
                                          line-height: 20px;
                                          text-align: center;
                                        "
                                      >
                                        ©All rights reserved DoIt App 2021
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <img
                  border="0"
                  width="1"
                  height="1"
                  alt=""
                  src="https://ci3.googleusercontent.com/proxy/jMiW-dmh3g1MT1fRq5eARg8zsjl6KTUUaGXvIzRATKpwPlG3NFpGnqL6xQ11R24GXTanU_KYK3vowdOQz99ChgGhFp58T_exptzdpYxfxp2kIA9AJICCd55RvTjMb0VHte_SjZsdMALRAWQzHSyB3kN-LlqblHHA3JkfZW-OPRFjjmyyRXruwlLu-ljHS9xk45gGuCj9VmT5M7WzbnJfazhDUOA=s0-d-e1-ft#https://metrics.dyspatch.io/q/VF3FamrizIeO-ylC141Fcw~~/AANZRQA~/RgRh-rOpPlcDc3BjQgpgFqkuGGDkSaZrUhp2aWxsZWdhc3NhbXVlbDI1QGdtYWlsLmNvbVgEAAAAAA~~"
                  class="CToWUd"
                />
                <div class="yj6qo"></div>
                <div class="adL"></div>
              </div>
              <div class="adL"></div>
            </div>
          </body>
        </html>`;

    const mailOptions = {
      from: "DoIt App",
      to: email,
      subject: "DoIt App Registration",
      html: contentHTML,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.status(406).json({ state: 0, message: error });
        console.log(error);
      } else {
        res.json({ state: 1, message: "Email sent" });
      }
    });
  },
};
