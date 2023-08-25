import dateNow from "./datenow";

const generateEmailContent = (data) => {
    const title = data.header;
    delete data.header;

    let htmlContent = Object.keys(data).map(field => {
        return `
        <label><strong style="text-transform: capitalize;">${field}:</strong></label>
        <input type="text" 
            style="display: block;
                   width: 100%;
                   padding: 10px;
                   font-size: 16px;
                   line-height: 1.4;
                   color: #243A97;
                   background-color: #f5f5f5;
                   border: 1px solid #ddd;
                   border-radius: 5px;
                   margin-bottom: 20px;
                   background: lavenderblush;" 
            readonly 
            value="${data[field]}">`;
    }).join('');

    const html = `
    <!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
</head>
<body style="font-family: 'Arial', sans-serif; padding: 40px; background-color: #fff; color: #243b98; margin: 0 auto;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px 40px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.05);">
        <div class="logo">
            <img src="/src/icons/Logo.svg" alt="Company Logo">
        </div>
        <div style="background: linear-gradient(90deg, #4CAF50, #67D5B5); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center; display:flex; justify-content:center">
            <h2>New message from Website</h2>
            <h3>${title}</h3>
        </div>
        <div style="margin-top: 20px; display: flex; flex-direction: column; gap: 7px;">
            ${htmlContent}
        </div>
        <div>
            <h4>${dateNow()}</h4>
        </div>
    </div>
</body>
</html>
    `;

    return html;
}
export default generateEmailContent;
