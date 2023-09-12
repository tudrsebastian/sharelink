import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";
const FB_PROJECT_ID = "sveltekit-course-8895f";
const FB_CLIENT_EMAIL = "firebase-adminsdk-quw5d@sveltekit-course-8895f.iam.gserviceaccount.com";
const FB_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCl0a/fqXdM6IEU\nAGjdCEjcFlMTtSM5D5U8sFyL5GdqEoZVyu2M96cPJ82VscPpvVDJbS8/ijXohJTN\nKElA3hST6l3xR5pgKkIa+kuJ4qk2XKeJCPzVpu3qSA7+TU1l3n214FPbh2w2Dn45\njqYq7QRYEpFEFBeO0ZbZq9n/uXCBKd2JVY12JQoX0ZFfQ5TAEa/r8zTfXbGQK7dM\nXqkEBp7mhk8W4pIVvkggOaKzebwe+acQP9sW7Ha3zctqTaVWVnBxZaLgNib+m3o2\nGj4SAhe1f+F3XybQA6XAE1CrvffmRO2BF0CTzCd5emZP84vE+QlOj0pgRuvl8zMG\nq4/2oTWDAgMBAAECggEAFI+0RcEvTGeWPeMxHZtd4YCZK5vt8rDmegCKcURQuHv0\nkWXY3/6DhiMS4ImK+AxkHJ3/2lqqhZsPEoN41eTT22WX4YfV8i+7Q7oerMng3p9N\nnPXy2BFbdg4aYdk3DDczEl7vNw0LU4aniz6Ph0odnEgtICp3o1uE35fqL8YQV8uk\nUU6+3rF+Kw/aESEeAEcJO5QO9lxeHanPsax7UR9J5XOdG5Sdl1EK68zAWPJQ9nav\nsjhjA2mGQIcExnLMBttw9/V4AYRe5w71VfRKRGKkLokUuoCbUtqANkHU+niZ12nq\nvmcRNZ9xxc2FDZT40H+cbDSFjFxo4M7schlcvom8rQKBgQDkXimx77UjMqzDUJ+A\nKSX8wtQ0cKz+ztIjFJU7S5mEyytLFaD1h9z2u2KYxpMvo25kdGtSu+tV32h81KFI\nMK0jrgdm1Fv5Kfs/2jpch9drbvuWN/fffDDL091kp+Ia/mBHcNrc8O9vhq5dIOpi\nzHyGsoPqBTG53K9EW1/5GlnvFQKBgQC54gmoGapbp7Lf0yjbUotyDvMaQC7dL/SO\nlF2E6xPvchyDmN4nmwsxNDYfXzc6WS++ASdD1Fkzzst9UZhwkCuQy2s25WyB/XTq\njTff4V3klFmBjeVClnCcUAnoCUpYjNw/m/fqlZBETBh6zsv4jZ5ch5HptSnqiStS\nQveUJ4l4NwKBgFWhMUU1OtiN4dYC3yvxQfs7GtLnBRcuegEJcMOhH1l5zSwEWix2\n21XxAZGDtCECyRwFw1Bsglvav5U/LZKiHenpEYFvU2VkZn+U1plnnlD8dn3nUpyM\nNsfXE4bwpIm2pGdlW8vI1B8fgzYMZ5bQUkk3mtsfQ3wL0fRxxtTjGqHZAoGAE3z+\nVDB0qu1XFJ5X3z61Pf0RQcRO5YO8mSI299OJoIYPNUDWscJQlxUJQ5rA+I4XMk1+\np17hB0x8CyR93fdPifu5vuSozqwbEOhDXmaLaIahJ7MPwT5yigDeOQSYVdZW1Rhu\nEpshp/dubZm2ytVWMA9Knf0PavZ8o0BAIrlOcVsCgYAZJ5aZKQZpsV5edQgVgVDt\nQn9sk7evr95uwuPUBVQGaqGRsxUmVxmlWhBKsMbgLH3GlfNAoTGrcN1k5QYVsCrr\npRheOfyQZ7vq+JMU/2DpRokYpC4RE2J7lpjvuRGS9qJvEzcxh/+uaZMfgn/MI2L0\nFF2gOIHWPqaIfzrbgZv7Nw==\n-----END PRIVATE KEY-----\n";
try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY
    })
  });
} catch (err) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase Admin Error: " + err.stack);
  }
}
const adminDB = getFirestore();
const adminAuth = getAuth();
export {
  adminAuth as a,
  adminDB as b
};
