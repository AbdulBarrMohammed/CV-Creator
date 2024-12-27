

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
export const downloadPDF = () => {
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





//Professional
export const handleProEditSubmit = (e, setProfessional, setProEditActive, currProKey, professional, job, company, location, proStartDate, proEndDate, description) => {
  e.preventDefault();
  console.log('proj edit submitted')
  const key = currProKey;
  console.log('submitted key', key)

  const updatedProfessional = professional.map(pro => {
    if (pro.id === key) {
        console.log('WE HAVE FOUND A MATCH')
        // Creates an object with the updated fields that are not empty
        const updatedFields = {
            ...(job && { job }),
            ...(company && { company }),
            ...(location && { location }),
            ...(proStartDate&& { proStartDate }),
            ...(proEndDate && { proEndDate }),
            ...(description && { description}),
        };
        // Merges the updated fields into the existing education entry
        return { ...pro, ...updatedFields };
    }
    return pro


    });
    setProfessional(updatedProfessional);
    setProEditActive(false);
}
