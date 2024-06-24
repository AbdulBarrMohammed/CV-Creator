import React from 'react';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


function Header() {
  const handleDownload = () => {
    const input = document.getElementById('Resume');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = pdfWidth;
      const pageHeight = pdfHeight;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('download.pdf');
    }).catch((err) => console.error('Failed to generate PDF', err));
  };



    return (
      <div className="header">
        <h1>CV Solutions</h1>
        <button onClick={handleDownload} className="downloadBtn">Download</button>
      </div>
    );
  }

  export default Header
