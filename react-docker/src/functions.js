

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


/**
    * Downloads resume page as a pdf
    * @param none
    * @return none
  */
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

/**
    * Creates new professions object and adds it to professions array
    * @param setProfessional, setProEditActive, currProKey, professional, job, company, location, proStartDate, proEndDate, description
    * @return none
  */
export const handleProEditSubmit = (e, setProfessional, setProEditActive, currProKey, professional, job, company, location, proStartDate, proEndDate, description) => {
  e.preventDefault();
  const key = currProKey;

  const updatedProfessional = professional.map(pro => {
    if (pro.id === key) {
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
