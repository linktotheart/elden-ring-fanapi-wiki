<template>
  <dialog id="modal_details" class="modal">
    <div class="modal-box relative md:max-w-5xl lg:max-w-4xl pt-0">
      <div
        class="flex mb-4 border-b py-2 sticky top-0 z-10 bg-base-100 -mx-3 pl-4 border-neutral-content border-opacity-10"
      >
        <h3 class="text-xl font-bold flex items-center" v-if="open">
          {{ details?.name }}
        </h3>

        <button class="btn btn-circle ml-auto btn-ghost">
          <Icon name="mdi:close" @click="$emit('close')" />
        </button>
      </div>
      <template v-if="open">
        <div class="grid gap-4 grid-cols-1 relative md:grid-cols-2">
          <div class="flex flex-col self-start sticky top-0">
            <figure
              class="p-4 min-h-80 grid content-center bg-base-200 rounded-xl mb-4 self-start w-full text-center"
            >
              <img
                :src="details.image"
                :alt="details.name"
                class="rounded-md shadow-xl mx-auto max-w-full"
              />
            </figure>
            <div class="flex flex-wrap gap-2">
              <div class="text-sm justify-start">
                Category:
                <span class="badge ml-2 px-3 badge-outline capitalize">{{
                  getCategory(details)
                }}</span>
              </div>
              <div class="text-sm justify-start" v-if="details.type">
                Type:
                <span class="badge ml-2 px-3 badge-outline">{{
                  details.type
                }}</span>
              </div>

              <div class="text-sm justify-start" v-if="details.weight">
                Weight:
                <span class="badge ml-2 px-3 badge-outline">{{
                  details.weight
                }}</span>
              </div>

              <div
                class="text-sm justify-start"
                v-if="details && details.region"
              >
                Location:
                <span class="badge ml-2 px-3 badge-outline">{{
                  details.region
                }}</span>
              </div>

              <!-- affinity  -->
              <div
                class="text-sm justify-start"
                v-if="details && details.affinity"
              >
                Affinity:
                <span class="badge ml-2 px-3 badge-outline">{{
                  details.affinity
                }}</span>
              </div>

              <!-- skill  -->
              <div
                class="text-sm justify-start"
                v-if="details && details.skill"
              >
                Skill:
                <span class="badge ml-2 px-3 badge-outline">{{
                  details.skill
                }}</span>
              </div>

              <!-- role  -->
              <div class="text-sm justify-start" v-if="details && details.role">
                Role:
                <span class="badge ml-2 px-3 badge-outline">{{
                  details.role
                }}</span>
              </div>
            </div>
          </div>

          <div class="flex flex-col max-h-full overflow-auto">
            <div class="quote mb-4">
              <h6 class="font-bold mb-0.5 text-md">Description</h6>
              <p class="tracking-wide">
                {{ details.description || 'No description available' }}
              </p>
            </div>

            <!-- quote  -->
            <div class="alert mb-4" v-if="details.quote">
              <p class="tracking-wide rounded-sm font-serif italic text-lg">
                <Icon name="mdi:format-quote-open"></Icon>
                {{ details.quote }}
                <Icon name="mdi:format-quote-close"></Icon>
              </p>
            </div>

            <div class="quote mt-4" v-if="details.effects">
              <h6 class="font-bold mb-0.5 text-md">Effects</h6>
              <p class="tracking-wide">
                {{ details.effects }}
              </p>
            </div>

            <div class="mt-2" v-if="details && details.location">
              <span class="font-bold">Location</span>: &nbsp;
              <span class="text-sm">{{ details.location }}</span>
            </div>

            <div
              class="mt-2 gap-2"
              v-if="details && details?.drops && details?.drops.length"
            >
              <span class="font-bold">Drops</span>: &nbsp;
              <span
                class="mr-2 inline"
                v-for="drop in details.drops"
                :key="drop"
                >{{ drop }}</span
              >
            </div>

            <div class="divider my-2"></div>

            <!-- * attack power  -->
            <template v-if="details && details?.attackPower">
              <h6 class="font-bold mb-0.5 text-lg">Attack And Damage</h6>
              <div class="overflow-x-auto">
                <table class="table table-xs table-zebra">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Attack</th>
                      <th>Damage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, index) in details.attackPower"
                      :key="index"
                    >
                      <td>
                        <Icon :name="getIcon(item.name, ATK_ICON_MAPPING)">
                        </Icon>
                      </td>
                      <td class="capitalize">{{ item.name }}</td>
                      <td>{{ item.amount !== 0 ? item.amount : '-' }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </template>

            <!-- * attack -->
            <template v-if="details && details?.attack">
              <h6 class="font-bold mb-0.5 text-lg">Attack</h6>
              <div class="overflow-x-auto mb-4">
                <table class="table table-xs table-zebra">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Attack</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in details.attack" :key="index">
                      <td>
                        <Icon :name="getIcon(item.name, DEFENCE_ICON_MAPPING)">
                        </Icon>
                      </td>
                      <td class="capitalize">{{ item.name }}</td>
                      <td>{{ item.amount !== 0 ? item.amount : '-' }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </template>

            <!-- * defence -->
            <template v-if="details && details?.defence">
              <h6 class="font-bold mb-0.5 text-lg">Defence</h6>
              <div class="overflow-x-auto mb-4">
                <table class="table table-xs table-zebra">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Defence</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in details.defence" :key="index">
                      <td>
                        <Icon :name="getIcon(item.name, DEFENCE_ICON_MAPPING)">
                        </Icon>
                      </td>
                      <td class="capitalize">{{ item.name }}</td>
                      <td>{{ item.amount !== 0 ? item.amount : '-' }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </template>

            <!-- * requirements -->
            <template v-if="details && details?.requires">
              <h6 class="font-bold mb-0.5 text-lg">Requirements</h6>
              <div class="overflow-x-auto mb-4">
                <table class="table table-xs table-zebra">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Requirement</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in details.requires" :key="index">
                      <td>
                        <Icon :name="getIcon(item.name, REQUIREMENTS_MAPPING)">
                        </Icon>
                      </td>
                      <td class="capitalize">{{ item.name }}</td>
                      <td>{{ item.amount !== 0 ? item.amount : '-' }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </template>

            <div
              class="flex mb-4"
              v-if="
                (details && details?.requiredAttributes) || details?.scalesWith
              "
            >
              <!-- required_attributes  -->
              <div class="w-1/2">
                <h6 class="font-bold mb-1 text-md">Required Attributes</h6>
                <table
                  class="table table-xs table-zebra"
                  v-if="details.requiredAttributes"
                >
                  <thead>
                    <tr>
                      <th>Attribute</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, index) in details.requiredAttributes"
                      :key="index"
                    >
                      <td class="capitalize">
                        <Icon
                          :name="getIcon(item.name, REQUIREMENTS_MAPPING)"
                          size="16px"
                          class="mr-1"
                        />
                        {{ item.name }}
                      </td>
                      <td>{{ item.amount !== 0 ? item.amount : '-' }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- scalesWith -->
              <div class="w-1/2">
                <h6 class="font-bold mb-1 text-md">Scales With</h6>
                <table
                  class="table table-xs table-zebra"
                  v-if="details.scalesWith"
                >
                  <thead>
                    <tr>
                      <th>Scales With</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, index) in details.scalesWith"
                      :key="index"
                    >
                      <td class="capitalize">
                        <Icon
                          :name="getIcon(item.name, REQUIREMENTS_MAPPING)"
                          size="16px"
                          class="mr-1"
                        />
                        {{ item.name }}
                      </td>
                      <td>{{ item.amount ? item.amount : '-' }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- * resistance -->
            <template v-if="details && details?.resistance">
              <h6 class="font-bold mb-1 text-lg">Resistance</h6>
              <div class="overflow-x-auto mb-4">
                <table class="table table-xs table-zebra">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Resistance</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, index) in details.resistance"
                      :key="index"
                    >
                      <td>
                        <Icon
                          :name="getIcon(item.name, RESISTANCE_ICON_MAPPING)"
                        >
                        </Icon>
                      </td>
                      <td class="capitalize">{{ item.name }}</td>
                      <td>{{ item.amount !== 0 ? item.amount : '-' }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </template>

            <!-- * damage negation -->
            <template v-if="details && details?.dmgNegation">
              <h6 class="font-bold mb-1 text-lg">Damage Negation</h6>
              <div class="overflow-x-auto mb-4">
                <table class="table table-xs table-zebra">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Damage Negation</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, index) in details.dmgNegation"
                      :key="index"
                    >
                      <td>
                        <Icon :name="getIcon(item.name, DMG_NEGATION)"> </Icon>
                      </td>
                      <td class="capitalize">{{ item.name }}</td>
                      <td>{{ item.amount !== 0 ? item.amount : '-' }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </template>
          </div>
        </div>
      </template>
    </div>
  </dialog>
</template>

<script setup>
const props = defineProps({
  open: Boolean,
  details: {
    type: Object,
    default: () => ({}),
  },
});

const route = useRoute();

const ATK_ICON_MAPPING = {
  physical: 'mdi:sword',
  magic: 'mdi:magic',
  fire: 'mdi:fire',
  lightning: 'mdi:flash',
  holy: 'mdi:cross',
  critical: 'mdi:sword-cross',
};

const RESISTANCE_ICON_MAPPING = {
  Immunity: 'mdi:shield',
  Robustness: 'mdi:weight-lifter',
  Focus: 'mdi:target',
  Vitality: 'mdi:heart',
  Poise: 'mdi:walk',
};

const DMG_NEGATION = {
  Phy: 'mdi:sword',
  Strike: 'mdi:hammer',
  Slash: 'mdi:content-cut',
  Pierce: 'mdi:arrow-right-bold',
  Magic: 'mdi:magic',
  Fire: 'mdi:fire',
  Ligt: 'mdi:lightning-bolt',
  Holy: 'mdi:cross',
};

const DEFENCE_ICON_MAPPING = {
  Phy: 'mdi:sword',
  Mag: 'mdi:magic',
  Fire: 'mdi:fire',
  Ligt: 'mdi:lightning-bolt',
  Holy: 'mdi:cross',
  Boost: 'mdi:star',
  Crit: 'mdi:sword-cross',
};

const REQUIREMENTS_MAPPING = {
  Intelligence: 'mdi:brain',
  Faith: 'mdi:church',
  Arcane: 'mdi:crystal-ball',
  Strength: 'mdi:arm-flex',
  Dexterity: 'mdi:hand',
  Str: 'mdi:arm-flex',
  Dex: 'mdi:hand',
  Int: 'mdi:brain',
  Fth: 'mdi:church',
  Arc: 'mdi:crystal-ball',
};

const getCategory = (details) => {
  return details?.category || route.params.name;
};

const getIcon = (name, mapping) => {
  return mapping[name] || 'mdi:help';
};
</script>

<style></style>
