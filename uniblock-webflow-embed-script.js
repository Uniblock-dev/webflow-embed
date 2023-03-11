    // // user scripts
    // const primaryColor = '#DE3163';
    // const secondaryColor = '#DE3163';
    // const bgColor = '#E0F7FA';
    // const textColor = '#DE3163';
    // const logoUri =
    //   'https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png';
    // const iframeBorderWidth = '3px';
    // const iframeBorderRadius = '15px';

    function queryEncodeUri(str) {
      return encodeURIComponent(str).replace(/'/g, '%27').replace(/"/g, '%22');
    }

    // iframe element
    let iframeElement = document.createElement('iframe');
    iframeElement.src = `http://localhost:3000/embed?contractAddress=0x333b9b6519ba04d7b0d6ecad9a62f0634de33e12&chainId=5&implementationType=ERC721&primaryColor=${primaryColor.slice(
      1,
    )}&bgColor=${bgColor.slice(1)}&secondaryColor=${secondaryColor.slice(
      1,
    )}&textColor=${textColor.slice(1)}&logoUri=${queryEncodeUri(logoUri)}&borderWidth=${iframeBorderWidth}&borderRadius=${iframeBorderRadius}`;
    iframeElement.setAttribute('id', 'iframe');
    iframeElement.height = '400px';
    iframeElement.width = '400px';
    iframeElement.frameBorder = '0';
    iframeElement.style.overflow = 'hidden';

    // iframe close button
    let iframeCloseButton = document.createElement('button');
    iframeCloseButton.setAttribute('id', 'iframe-close-button');
    iframeCloseButton.textContent = 'X';
    iframeCloseButton.style.border = `2px solid ${primaryColor}`;
    iframeCloseButton.style.backgroundColor = `${bgColor}`;
    iframeCloseButton.style.color = primaryColor;
    let buttonOnHoverStyle = document.createElement('style');
    const onHoverCss = `
    #iframe-close-button:hover {
        transform: scale(1.2)
    }
    #iframe-close-button:active {
        font-size:20px;
        filter: brightness(0.9)
    }`;
    if (buttonOnHoverStyle.styleSheet) {
      buttonOnHoverStyle.styleSheet.cssText = onHoverCss;
    } else {
      buttonOnHoverStyle.appendChild(document.createTextNode(onHoverCss));
    }
    document.getElementsByTagName('head')[0].appendChild(buttonOnHoverStyle);

    // iframe div
    let iframeDiv = document.createElement('div');
    iframeDiv.setAttribute('id', 'iframe-div');
    iframeDiv.appendChild(iframeElement);
    iframeDiv.appendChild(iframeCloseButton);

    document.getElementsByTagName('BODY')[0].appendChild(iframeDiv);

    // OPEN
    const handleIframeOpen = (e) => {
      e.stopPropagation();
      document.getElementById('iframe-div').style.display = 'flex';
    };
    // CLOSE
    const handleIframeClose = (e) => {
      e.stopPropagation();
      document.getElementById('iframe-div').style.display = 'none';
    };

    // Listener: open iframe
    document
      .getElementById('iframe-open-button')
      .addEventListener('click', (e) => handleIframeOpen(e));

    // Listener: close iframe
    document
      .getElementById('iframe-close-button')
      .addEventListener('click', (e) => handleIframeClose(e));