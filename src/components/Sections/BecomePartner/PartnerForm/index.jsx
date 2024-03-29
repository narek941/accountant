import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import noop from 'utils/noop';
import { Button, Input, Request, TextArea } from 'components/index';
import { useForm, FormWrapper } from 'hooks/index';
import { axiosInstance } from 'libraries/index';
import { I18nContext } from 'context/index';

import {
  becomePartnerFieldOne,
  becomePartnerFieldTwo,
  becomePartnerSchemeOne,
  becomePartnerSchemeTwo,
} from './fields';

import styles from '../BecomePartner.scss';

const PartnerForm = ({ handleBack }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [step, setStep] = useState(1);
  const [stepOneValue, setStepOneValue] = useState({});

  const t = useContext(I18nContext);
  const {
    formMethods: formMethodsOne,
    handleSubmit: handleSubmitOne,
    isValid: isValidOne,
  } = useForm({
    schemaKeys: becomePartnerSchemeOne,
  });
  const { formMethods, handleSubmit, isValid } = useForm({
    schemaKeys: becomePartnerSchemeTwo,
  });

  const handlePartnerForm = ({
    organizationName,
    organizationType,
    taxType,
    address,
    quantityOfEmployees,
    activityDescription,
  }) => {
    const { name, phoneNumber, email, tin } = stepOneValue;
    axiosInstance
      .post('/api/api_four', {
        header: 'Partners',

        email,
        fullName: name,
        phoneNumber,
        tin,
        companyName: organizationName,
        legalForm: organizationType,
        taxType,
        address,
        quantityOfEmployees,
        activityDescription,
      })
      .then(() => {
        setRequestSent(true);
        setIsSent(true);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error, '/mail/partnership');
        setRequestSent(false);
        setIsSent(true);
      });
  };

  const handlePartnerFormOne = ({ name, phoneNumber, email, tin }) => {
    setStep(step + 1);
    setStepOneValue({ name, phoneNumber, email, tin });
  };

  if (isSent) {
    return <Request handleBack={handleBack} isSent={requestSent} />;
  }

  return (
    <>
      <h2 className={styles.title}>{t('becomePartner')}</h2>
      {step === 1 && (
        <FormWrapper
          onSubmit={handleSubmitOne(handlePartnerFormOne)}
          className={styles.form}
          {...{ formMethods: formMethodsOne }}
        >
          <Input {...becomePartnerFieldOne.name} />
          <Input {...becomePartnerFieldOne.phoneNumber} />
          <Input {...becomePartnerFieldOne.email} />
          <Input {...becomePartnerFieldOne.tin} />
          <Button
            type="submit"
            className={styles.form_submit}
            disabled={!isValidOne || requestSent}
          >
            {t('next')}
          </Button>
        </FormWrapper>
      )}
      {step === 2 && (
        <FormWrapper
          onSubmit={handleSubmit(handlePartnerForm)}
          className={styles.form}
          {...{ formMethods }}
        >
          <Input {...becomePartnerFieldTwo.organizationName} />
          <Input {...becomePartnerFieldTwo.organizationType} />
          <Input {...becomePartnerFieldTwo.taxType} />
          <Input {...becomePartnerFieldTwo.address} />
          <Input {...becomePartnerFieldTwo.quantityOfEmployees} />
          <TextArea {...becomePartnerFieldTwo.activityDescription} />
          <Button
            type="submit"
            className={styles.form_submit}
            disabled={!isValid || requestSent}
          >
            {t('becomePartner')}
          </Button>
        </FormWrapper>
      )}
    </>
  );
};

PartnerForm.propTypes = {
  handleBack: PropTypes.func,
};

PartnerForm.defaultProps = {
  handleBack: noop,
};
export default PartnerForm;
