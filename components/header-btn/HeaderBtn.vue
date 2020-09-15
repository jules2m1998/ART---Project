<template>
  <div id="btn-lang" class="d-flex flex-row">
    <div class="menu-item">
      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            id="menu-btn"
            v-bind="attrs"
            text
            v-on="on"
          >
            A propos de nous <v-icon>keyboard_arrow_down</v-icon>
          </v-btn>
        </template>
        <v-list class="mt-2" rounded>
          <v-list-item
            v-for="index in 5"
            :key="index"
          >
            <v-list-item-title>Test</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div class="menu-item">
      <select id="select-lang">
        <option selected>
          EN
        </option>
        <option>FR</option>
      </select>
    </div>
    <div class="menu-item">
      <div class="pulse-btn">
        <template>
          <v-dialog v-model="dialog" persistent max-width="550px" style="overflow-y: hidden">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                id="profile-btn"
                width="40"
                height="40"
                fab
                dark
                large
                color="white"
                depressed
                v-bind="attrs"
                v-on="on"
                @click="removeOverflow"
              >
                <v-icon color="black">
                  person
                </v-icon>
              </v-btn>
            </template>
            <default-form v-model="dialog" type="signin" />
          </v-dialog>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import DefaultForm from '@/components/user/utils/DefaultForm'
export default {
  name: 'HeaderBtn',
  components: { DefaultForm },
  data: () => ({
    /**
     * Définit l'état de la boite de dialogue à savoir visible ou non
     * @type {Boolean}
     */
    dialog: false
  }),
  methods: {
    /**
     * Met le overflowY de la page à hidden
     */
    removeOverflow () {
      document.documentElement.style.overflowY = 'hidden'
    }
  }
}
</script>

<style lang="scss" scoped>
  #btn-lang{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .menu-item{
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      &:after{
        content: "";
        width: 5px;
        height: 5px;
        border-radius: 5px;
        background: white;
        margin-right: 12px;
        margin-left: 14px;
      }
      &:last-child:after{
        content: "";
        width: 0;
        height: 0;
        border-radius: 0;
        background: none;
        margin-right: 0;
        margin-left: 0;
      }
      #select-lang{
        color: white;
        padding: 10px;
        option{
          background: transparent;
          color: black;
        }
      }
      #menu-btn{
        font-size: 14px;
        font-family: "Open Sans", sans-serif;
        font-weight: 700;
        position: relative;
        color: white;
        padding: 0;
        transition: all 0.5s;
        &:after{
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 3px;
          background: white;
          border-radius: 1px;
          transition: all 0.5s;
        }
        &:hover:after{
          width: 50%;
          background: $yellow;
        }
        &:hover{
          color: $yellow
        }
      }
    }
  }
</style>
