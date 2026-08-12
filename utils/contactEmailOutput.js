function contactEmailOutput({ name, company, email, phone, message }) {
  return `
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <style>
            body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            background-color: #f4f6f8;
            font-family: Arial, Helvetica, sans-serif;
            }

            table {
            border-spacing: 0;
            border-collapse: collapse;
            }

            img {
            max-width: 100%;
            height: auto;
            }

            @media only screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
                max-width: 100% !important;
            }

            .email-padding {
                padding: 20px !important;
            }

            .email-header {
                padding: 25px 20px !important;
            }

            .details-label {
                width: 90px !important;
            }

            .content-text {
                font-size: 14px !important;
            }
            }
        </style>
        </head>

        <body>

        <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="
            width: 100%;
            background-color: #f4f6f8;
            "
        >
            <tr>
            <td align="center" style="padding: 30px 10px;">

                <!-- Main container -->
                <table
                class="email-container"
                width="600"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="
                    width: 100%;
                    max-width: 600px;
                    background-color: #ffffff;
                    border-radius: 10px;
                    overflow: hidden;
                "
                >

                <!-- Header -->
                <tr>
                    <td
                    class="email-header"
                    style="
                        padding: 30px;
                        background-color: #2563eb;
                        text-align: center;
                    "
                    >
                    <h1 style="
                        margin: 0;
                        color: #ffffff;
                        font-size: 24px;
                        line-height: 1.3;
                    ">
                        New Contact Request
                    </h1>

                    <p style="
                        margin: 8px 0 0;
                        color: #dbeafe;
                        font-size: 14px;
                        line-height: 1.5;
                    ">
                        Someone has contacted you through your website.
                    </p>
                    </td>
                </tr>

                <!-- Content -->
                <tr>
                    <td
                    class="email-padding"
                    style="
                        padding: 30px;
                    "
                    >

                    <h2 style="
                        margin: 0 0 20px;
                        color: #111827;
                        font-size: 18px;
                    ">
                        Contact Details
                    </h2>

                    <!-- Contact details -->
                    <table
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        style="
                        width: 100%;
                        max-width: 100%;
                        table-layout: fixed;
                        "
                    >

                        <tr>
                        <td
                            class="details-label"
                            style="
                            width: 120px;
                            padding: 10px;
                            background-color: #f9fafb;
                            border-bottom: 1px solid #e5e7eb;
                            font-weight: bold;
                            color: #6b7280;
                            "
                        >
                            Name
                        </td>

                        <td
                            class="content-text"
                            style="
                            padding: 10px;
                            border-bottom: 1px solid #e5e7eb;
                            color: #111827;
                            word-break: break-word;
                            overflow-wrap: anywhere;
                            "
                        >
                            ${name}
                        </td>
                        </tr>

                        <tr>
                        <td
                            class="details-label"
                            style="
                            width: 120px;
                            padding: 10px;
                            background-color: #f9fafb;
                            border-bottom: 1px solid #e5e7eb;
                            font-weight: bold;
                            color: #6b7280;
                            "
                        >
                            Company
                        </td>

                        <td
                            class="content-text"
                            style="
                            padding: 10px;
                            border-bottom: 1px solid #e5e7eb;
                            color: #111827;
                            word-break: break-word;
                            overflow-wrap: anywhere;
                            "
                        >
                            ${company || "Not provided"}
                        </td>
                        </tr>

                        <tr>
                        <td
                            class="details-label"
                            style="
                            width: 120px;
                            padding: 10px;
                            background-color: #f9fafb;
                            border-bottom: 1px solid #e5e7eb;
                            font-weight: bold;
                            color: #6b7280;
                            "
                        >
                            Email
                        </td>

                        <td
                            class="content-text"
                            style="
                            padding: 10px;
                            border-bottom: 1px solid #e5e7eb;
                            word-break: break-word;
                            overflow-wrap: anywhere;
                            "
                        >
                            <a
                            href="mailto:${email}"
                            style="
                                color: #2563eb;
                                text-decoration: none;
                                word-break: break-all;
                            "
                            >
                            ${email}
                            </a>
                        </td>
                        </tr>

                        <tr>
                        <td
                            class="details-label"
                            style="
                            width: 120px;
                            padding: 10px;
                            background-color: #f9fafb;
                            font-weight: bold;
                            color: #6b7280;
                            "
                        >
                            Phone
                        </td>

                        <td
                            class="content-text"
                            style="
                            padding: 10px;
                            color: #111827;
                            word-break: break-word;
                            "
                        >
                            ${phone || "Not provided"}
                        </td>
                        </tr>

                    </table>

                    <!-- Message -->
                    <table
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        style="
                        width: 100%;
                        margin-top: 25px;
                        "
                    >
                        <tr>
                        <td
                            style="
                            padding: 20px;
                            background-color: #eff6ff;
                            border-left: 4px solid #2563eb;
                            "
                        >

                            <h2 style="
                            margin: 0 0 10px;
                            color: #1e3a8a;
                            font-size: 17px;
                            ">
                            Message
                            </h2>

                            <p style="
                            margin: 0;
                            color: #374151;
                            font-size: 15px;
                            line-height: 1.7;
                            word-break: break-word;
                            overflow-wrap: anywhere;
                            white-space: pre-line;
                            ">
                            ${message}
                            </p>

                        </td>
                        </tr>
                    </table>

                    </td>
                </tr>

                <!-- Footer -->
                <tr>
                    <td
                    style="
                        padding: 20px;
                        background-color: #f9fafb;
                        border-top: 1px solid #e5e7eb;
                        text-align: center;
                    "
                    >

                    <p style="
                        margin: 0;
                        color: #9ca3af;
                        font-size: 12px;
                        line-height: 1.5;
                    ">
                        This email was generated from your website contact form.
                    </p>

                    </td>
                </tr>

                </table>

            </td>
            </tr>
        </table>

        </body>
        </html>
        `;
}

module.exports = contactEmailOutput;
