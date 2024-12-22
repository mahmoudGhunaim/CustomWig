import React from 'react';
import "./App.css";
import getTranslation from "./utils/translations";

const Customize = () => {
  return (
    <section className='Customize-sec'>
      <div className='Customize-container'>
        <h2>{getTranslation('customize_wig', 'Customize your Wig')}</h2>
        {/* <p>{getTranslation('processing_notice', 'Create your unique lace wig in our custom area! After placing your order, please allow an estimated 25-30 business days (approximately 6 weeks) for processing.')}</p> */}
        <p>{getTranslation('delivery_notice', 'To ensure you receive the highest quality at an attractive price, we handcraft our human hair wigs at various locations around the globe. Within the specified delivery time, you will receive a shipping confirmation along with the tracking number for your package.')}</p>
      </div>
    </section>
  )
}

export default Customize;