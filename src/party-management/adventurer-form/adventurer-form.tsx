import React from 'react';
import { AdventurerClass } from '../models/adventurer-class/adventurer-class.type';
import { AdventurerFormData } from '../models/adventurer/adventurer.type';
import { Formik, FormikActions, FormikProps } from 'formik';
import { string, object, number } from 'yup';
import { Text, Button, View, TextInput, StyleSheet, Picker, PickerItem } from 'react-native';
import { map } from 'lodash-es';
import memoizeOne from 'memoize-one';

interface FormValues {
  name: string;
  adventurerClass: string;
  level: number;
}

// type FormKeys = keyof FormValues;
// type FormErrors = DictionaryWithKeys<FormKeys, string>;

interface Props {
  adventurerClasses: AdventurerClass[];
  onSubmit(adventurer: AdventurerFormData): void; // should we return a promise????
}

interface State {
  initialValues: FormValues;
}

const validationSchema = object().shape<FormValues>({
  name: string().required('Please enter a name'),
  adventurerClass: string().required('Please select a class'),
  level: number().required('This is a required field'),
});

// can also replace this with withFormik()
export class AdventurerForm extends React.PureComponent<Props, State> {

  state = {
    initialValues: {
      name: '',
      adventurerClass: '',
      level: 1,
    }
  };

  static getDerivedStateFromProps(nextProps: Props, prevState: State): Partial<State> | null {
    if (!prevState.initialValues.adventurerClass) {
      return {
        initialValues: {
          ...prevState.initialValues,
          adventurerClass: nextProps.adventurerClasses[0].id,
        },
      };
    }
    return null;
  }

  submit = (values: FormValues, actions: FormikActions<FormValues>) => {
    this.props.onSubmit({
      name: values.name,
      classes: [values.adventurerClass],
      level: values.level,
    });
    actions.resetForm();
  }

  render(): React.ReactNode {
    return (
      <Formik
        validationSchema={validationSchema}
        initialValues={this.state.initialValues}
        onSubmit={this.submit}
        render={this.renderForm}>
      </Formik>
    );
  }

  renderForm = (fProps: FormikProps<FormValues>) => {
    return (
      <View>
        {this.renderNameField(fProps)}
        {this.renderLevelField(fProps)}
        {this.renderSelectField(fProps)}
        {/* <Field name="name" render={this.renderNameField} />
        <Field name="adventurerClass" render={this.renderSelectField} />
        <Field name="level" render={this.renderLevelField} /> */}
        <Button title={'Submit'} onPress={() => fProps.handleSubmit()}>
        </Button>
      </View>
    );
  }

  renderNameField = (fProps: FormikProps<FormValues>) => {
    return (
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Name</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={fProps.handleChange('name')}
          onBlur={fProps.handleBlur('name')}
          value={fProps.values.name}
        />
      </View>
    );
  }

  renderOptions = memoizeOne((classes: AdventurerClass[]) => {
    return map(classes, c => {
      // return <PickerItem label={c.title} value={c.id} key={c.id}></PickerItem>;
    });
  });

  renderSelectField = (fProps: FormikProps<FormValues>) => {
    const options = this.renderOptions(this.props.adventurerClasses);
    return (
      <Text>CLASS (TODO)</Text>
      // <Picker
      //   selectedValue={fProps.values.adventurerClass}
      //   onValueChange={fProps.handleChange('adventurerClass')}>
      //   {options}
      // </Picker>
    );
  }

  renderLevelField = (fProps: FormikProps<FormValues>) => {
    return (
      <Text>Level (TODO)</Text>
      // <label>
      //   Level
      //   <input type="number" { ...field } />
      //   <small>
      //     {form.touched.level && form.errors.level && form.errors.level}
      //   </small>
      // </label>
    );
  }
}

const greenColor = '#6abc65';

const styles = StyleSheet.create({
  formGroup: {
    margin: 5,
  },
  formLabel: {
    color: greenColor,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  textInput: {
    color: '#777',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    padding: 7,
  },
});
