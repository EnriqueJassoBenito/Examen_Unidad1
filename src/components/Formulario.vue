<template>
  <div>
    <h1>Aqui va el Formulario</h1>
    <b-form @submit="onSubmit" @reset="onReset" >

      <b-form-group id="model-1" label="Marca y Modelo" label-for="model">
        <b-form-input
          id="model"
          name="model"
          v-model="form.name"
          v-validate="{ required: true, alpha_num }"
          :state="validateState('model')"
          aria-describedby="model-feedback"
          placeholder="Ingresa la marca"
        ></b-form-input>
        <b-form-invalid-feedback id="model-feedback">No se aceptan caracteres especiales</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="date-1" label="Año de fabricacion" label-for="date">
        <b-form-input
          id="date"
          name="date"
          type="date"
          v-model="form.date"
          v-validate="{ required: true, }"
          :state="validateState('date')"
          aria-describedby="date-feedback"
          placeholder="Ingresa la marca"
        ></b-form-input>
        <b-form-invalid-feedback id="date-feedback">Incorrecto a la fecha actual</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="serie-1" label="Numero de serie" label-for="serie">
        <b-form-input
          id="serie"
          name="serie"
          v-model="form.serie"
          placeholder="Ingresa la marca"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
      return {
        form: {
          name: '',
          date: '',
          serie: '',
        },
      }
    },
    methods: {
      validateState(ref) {
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
        return !this.veeErrors.has(ref);
      }
      return null;
    },
      onSubmit(event) {
        event.preventDefault()
        
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.date = ''
        this.form.name = ''
        this.form.serie = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}
</script>

<style>

</style>