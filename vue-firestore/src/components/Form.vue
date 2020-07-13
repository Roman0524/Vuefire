<template>
  <div class="flex justify-center">
    <form class="w-full max-w-sm">
      <h1 class="mb-4">Form Details</h1>
      <div class="relative pt-1">
        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
          <v-basic-progress :completed="`${formPercentage.percentage}`" />
        </div>
      </div>
      <div>
        <v-basic-text-field
          id="firstName"
          label="First Name"
          name="firstName"
          v-model="userDetails.firstName"
        />
      </div>
      <div>
        <v-basic-text-field
          id="lastName"
          label="Last Name"
          name="lastName"
          v-model="userDetails.lastName"
        />
      </div>
      <div>
        <v-basic-text-field
          id="phone"
          label="Phone"
          name="phone"
          v-model="userDetails.phone"
        />
      </div>
      <div>
        <v-basic-text-field
          id="email"
          label="Email"
          name="email"
          v-model="userDetails.email"
        />
      </div>
      <div>
        <v-basic-text-field
          id="address"
          label="Address"
          name="address"
          v-model="userDetails.address"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { db } from "./../service/db";
import { VBasicTextField, VBasicProgress } from "@/components/basic";
export default {
  name: "Form",
  components: { VBasicTextField, VBasicProgress },
  mounted() {
    this.initForm();
  },
  data: () => ({
    userDetails: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      percentageId: ""
    },
    percentage: 0,
    formPercentage: []
  }),
  props: {
    msg: String
  },
  methods: {
    async initForm() {
      let snapshot = await db
        .collection("form")
        .doc("hjAB5aHRYZET0dS40ScJ")
        .get();

      this.userDetails = { ...snapshot.data() };

      this.$bind(
        "formPercentage",
        db.collection("form-percentage").doc(this.userDetails.percentageId),
        { maxRefDepth: 1 }
      );
    }
  },
  watch: {
    userDetails: {
      handler: async value => {
        console.log(value)
        await db
          .collection("form")
          .doc("hjAB5aHRYZET0dS40ScJ")
          .set(value);

        console.log("Form updated!");
      },
      deep: true
    }
  },
  firestore: {
    formPercentage: db.collection("form-percentage")
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
