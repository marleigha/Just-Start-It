import { mdiChartTimelineVariant, mdiUpload } from '@mdi/js';
import Head from 'next/head';
import React, { ReactElement, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';

import CardBox from '../../components/CardBox';
import LayoutAuthenticated from '../../layouts/Authenticated';
import SectionMain from '../../components/SectionMain';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import { getPageTitle } from '../../config';

import { Field, Form, Formik } from 'formik';
import FormField from '../../components/FormField';
import BaseDivider from '../../components/BaseDivider';
import BaseButtons from '../../components/BaseButtons';
import BaseButton from '../../components/BaseButton';
import FormCheckRadio from '../../components/FormCheckRadio';
import FormCheckRadioGroup from '../../components/FormCheckRadioGroup';
import FormFilePicker from '../../components/FormFilePicker';
import FormImagePicker from '../../components/FormImagePicker';
import { SelectField } from '../../components/SelectField';
import { SelectFieldMany } from '../../components/SelectFieldMany';
import { SwitchField } from '../../components/SwitchField';
import { RichTextField } from '../../components/RichTextField';

import { update, fetch } from '../../stores/tasks/tasksSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditTasksPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    title: '',

    description: '',

    hardness_level: '',

    deadline: new Date(),

    urgency_level: '',

    point_value: '',

    user: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { tasks } = useAppSelector((state) => state.tasks);

  const { id } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: id }));
  }, [id]);

  useEffect(() => {
    if (typeof tasks === 'object') {
      setInitialValues(tasks);
    }
  }, [tasks]);

  useEffect(() => {
    if (typeof tasks === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = tasks[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [tasks]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: id, data }));
    await router.push('/tasks/tasks-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit tasks')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit tasks'}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form>
              <FormField label='Title'>
                <Field name='title' placeholder='Title' />
              </FormField>

              <FormField label='Description' hasTextareaHeight>
                <Field
                  name='description'
                  as='textarea'
                  placeholder='Description'
                />
              </FormField>

              <FormField label='HardnessLevel' labelFor='hardness_level'>
                <Field
                  name='hardness_level'
                  id='hardness_level'
                  component='select'
                >
                  <option value='easy'>easy</option>

                  <option value='medium'>medium</option>

                  <option value='hard'>hard</option>
                </Field>
              </FormField>

              <FormField label='Deadline'>
                <DatePicker
                  dateFormat='yyyy-MM-dd hh:mm'
                  showTimeSelect
                  selected={
                    initialValues.deadline
                      ? new Date(
                          dayjs(initialValues.deadline).format(
                            'YYYY-MM-DD hh:mm',
                          ),
                        )
                      : null
                  }
                  onChange={(date) =>
                    setInitialValues({ ...initialValues, deadline: date })
                  }
                />
              </FormField>

              <FormField label='UrgencyLevel' labelFor='urgency_level'>
                <Field
                  name='urgency_level'
                  id='urgency_level'
                  component='select'
                >
                  <option value='urgent'>urgent</option>

                  <option value='non-urgent'>non-urgent</option>
                </Field>
              </FormField>

              <FormField label='PointValue'>
                <Field
                  type='number'
                  name='point_value'
                  placeholder='PointValue'
                />
              </FormField>

              <FormField label='User' labelFor='user'>
                <Field
                  name='user'
                  id='user'
                  component={SelectField}
                  options={initialValues.user}
                  itemRef={'users'}
                  showField={'firstName'}
                ></Field>
              </FormField>

              <BaseDivider />
              <BaseButtons>
                <BaseButton type='submit' color='info' label='Submit' />
                <BaseButton type='reset' color='info' outline label='Reset' />
                <BaseButton
                  type='reset'
                  color='danger'
                  outline
                  label='Cancel'
                  onClick={() => router.push('/tasks/tasks-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditTasksPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_TASKS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditTasksPage;
