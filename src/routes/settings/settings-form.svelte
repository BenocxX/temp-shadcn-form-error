<script lang="ts">
  import * as Form from '$lib/components/ui/form';
  import { formSchema, type FormSchema } from './schema';
  import type { SuperValidated } from 'sveltekit-superforms';

  export let form: SuperValidated<FormSchema>;
</script>

<Form.Root method="POST" {form} schema={formSchema} let:config>
  <Form.Field {config} name="username">
    <Form.Item>
      <Form.Label>Username</Form.Label>
      <Form.Input />
      <Form.Validation />
    </Form.Item>
  </Form.Field>
  <Form.Field {config} name="confirm">
    <Form.Item>
      <Form.Label>Confirm Username</Form.Label>
      <Form.Input />
      <Form.Validation />
    </Form.Item>
  </Form.Field>
  <Form.Button>Submit</Form.Button>
</Form.Root>
