const COLORS = {
  green: "green",
  yellow: "yellow",
  orange: "orange",
  red: "red"
};

const HEBREW_COLORS = {
  green: "ירוק",
  yellow: "צהוב",
  orange: "כתום",
  red: "אדום"
};

const GROUP_SIZE_IN_CLOSED_STRUCTURE = {
  red: 10,
  green: 25,
  yellow: 25,
  orange: 25
};

var app = new Vue({
  el: "#app",
  data: {
    calc_params: {
      structure_size: 500,
      num_primary_enternces: 5,
      num_secondary_enternces: 0,
      color: COLORS.green,
    },
    structure_size: 500,
    num_primary_enternces: 5,
    num_secondary_enternces: 0,
    structure_open: true,
    color: COLORS.green,
    num_groups: 1,
    result: null
  },
  mounted: function() {
    this.getResult();
  },
  watch: {
    color: function() {
        this.calc_params.color = this.color.toString();
        this.getResult();
      },
    structure_size: function() {
      this.calc_params.structure_size = +this.structure_size;
      this.getResult();
    },
    num_primary_enternces: function() {
      this.calc_params.num_primary_enternces = +this.num_primary_enternces;
      this.getResult();
    },
    num_secondary_enternces: function() {
      this.calc_params.num_secondary_enternces = +this.num_secondary_enternces;
      this.getResult();
    }
  },
  methods: {
    getResult: function() {
      const max_people = this.calc_params.structure_size / 4; //Max people - one for every 4 sqM
      const factor =
        this.calc_params.num_primary_enternces * 3 +
        this.calc_params.num_secondary_enternces * 2;

      const temp_result = Math.floor(Math.round(
        Math.min(
          max_people,
          factor * GROUP_SIZE_IN_CLOSED_STRUCTURE[this.calc_params.color]
        )
      ));

      this.result = temp_result - temp_result % GROUP_SIZE_IN_CLOSED_STRUCTURE[this.calc_params.color];

      this.num_groups = Math.floor(Math.max(1,this.result / GROUP_SIZE_IN_CLOSED_STRUCTURE[this.calc_params.color]));
    }
  }
});
