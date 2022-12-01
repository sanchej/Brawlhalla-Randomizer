const { createApp } = Vue
createApp({
    data() {
        return {
            Weapons: ["Hammer", "Sword", "Blasters", "Lance", "Spear", "Katars", "Axe", "Bow", "Gauntlets", "Scythe", "Cannon", "Orb", "Greatsword"],
            Legend: [],
            ShownWeapons: [],
            data_show: [],
            buffer: [0, 1, 2, 3, 4, 5],
            SELECTED: "",
        }
    },
    methods: {
        Initialize() {
            class Legends {
                Name = "";
                Weapon1 = null;
                Weapon2 = null;
                Number = null;
                constructor(name, wep1, wep2) {
                    this.Name = name;
                    this.Weapon1 = wep1;
                    this.Weapon2 = wep2;
                }
            }
            Temp = [
                { "Name": 'Bodvar', "Weapon1": 0, "Weapon2": 1 },
                { "Name": 'Cassidy', "Weapon1": 2, "Weapon2": 0 },
                { "Name": 'Orion', "Weapon1": 3, "Weapon2": 4 },
                { "Name": 'Lord Vraxx', "Weapon1": 3, "Weapon2": 2 },
                { "Name": 'Gnash', "Weapon1": 4, "Weapon2": 0 },
                { "Name": 'Queen Nai', "Weapon1": 4, "Weapon2": 5 },
                { "Name": 'Hattori', "Weapon1": 4, "Weapon2": 1 },
                { "Name": 'Sir Roland', "Weapon1": 1, "Weapon2": 3 },
                { "Name": 'Scarlet', "Weapon1": 3, "Weapon2": 0 },
                { "Name": 'Thatch', "Weapon1": 1, "Weapon2": 2 },
                { "Name": 'Ada', "Weapon1": 4, "Weapon2": 2 },
                { "Name": 'Sentinel', "Weapon1": 0, "Weapon2": 5 },
                { "Name": 'Lucien', "Weapon1": 5, "Weapon2": 2 },
                { "Name": 'Teros', "Weapon1": 0, "Weapon2": 6 },
                { "Name": 'Brynn', "Weapon1": 4, "Weapon2": 6 },
                { "Name": 'Asuri', "Weapon1": 5, "Weapon2": 1 },
                { "Name": 'Barazza', "Weapon1": 1, "Weapon2": 6 },
                { "Name": 'Ember', "Weapon1": 7, "Weapon2": 5 },
                { "Name": 'Azoth', "Weapon1": 6, "Weapon2": 7 },
                { "Name": 'Koji', "Weapon1": 1, "Weapon2": 7 },
                { "Name": 'Ulgrim', "Weapon1": 6, "Weapon2": 3 },
                { "Name": 'Diana', "Weapon1": 2, "Weapon2": 7 },
                { "Name": 'Jhala', "Weapon1": 1, "Weapon2": 6 },
                { "Name": 'Kor', "Weapon1": 8, "Weapon2": 0 },
                { "Name": 'Wu Shang', "Weapon1": 4, "Weapon2": 8 },
                { "Name": 'Val', "Weapon1": 1, "Weapon2": 8 },
                { "Name": 'Ragnir', "Weapon1": 5, "Weapon2": 6 },
                { "Name": 'Cross', "Weapon1": 2, "Weapon2": 8 },
                { "Name": 'Mirage', "Weapon1": 4, "Weapon2": 9 },
                { "Name": 'Nix', "Weapon1": 2, "Weapon2": 9 },
                { "Name": 'Mordex', "Weapon1": 8, "Weapon2": 9 },
                { "Name": 'Yumiko', "Weapon1": 0, "Weapon2": 7 },
                { "Name": 'Artemis', "Weapon1": 3, "Weapon2": 9 },
                { "Name": 'Caspian', "Weapon1": 5, "Weapon2": 8 },
                { "Name": 'Sidra', "Weapon1": 1, "Weapon2": 10 },
                { "Name": 'Xull', "Weapon1": 6, "Weapon2": 10 },
                { "Name": 'Kaya', "Weapon1": 4, "Weapon2": 7 },
                { "Name": 'Isaiah', "Weapon1": 2, "Weapon2": 10 },
                { "Name": 'Jiro', "Weapon1": 1, "Weapon2": 9 },
                { "Name": 'Lin Fei', "Weapon1": 5, "Weapon2": 10 },
                { "Name": 'Zariel', "Weapon1": 7, "Weapon2": 8 },
                { "Name": 'Rayman', "Weapon1": 6, "Weapon2": 8 },
                { "Name": 'Dusk', "Weapon1": 4, "Weapon2": 11 },
                { "Name": 'Fait', "Weapon1": 9, "Weapon2": 11 },
                { "Name": 'Thor', "Weapon1": 0, "Weapon2": 11 },
                { "Name": 'Petra', "Weapon1": 8, "Weapon2": 11 },
                { "Name": 'Vector', "Weapon1": 7, "Weapon2": 3 },
                { "Name": 'Volkov', "Weapon1": 6, "Weapon2": 9 },
                { "Name": 'Onyx', "Weapon1": 8, "Weapon2": 10 },
                { "Name": 'Jaeyun', "Weapon1": 1, "Weapon2": 12 },
                { "Name": 'Mako', "Weapon1": 5, "Weapon2": 12 },
                { "Name": 'Magyar', "Weapon1": 0, "Weapon2": 12 },
                { "Name": 'Reno', "Weapon1": 2, "Weapon2": 11 },
                { "Name": 'Reno', "Weapon1": 2, "Weapon2": 11 },
                { "Name": 'Munin', "Weapon1": 7, "Weapon2": 9 },
                { "Name": 'Arcadia', "Weapon1": 4, "Weapon2": 12 },
                { "Name": 'Ezio', "Weapon1": 1, "Weapon2": 11 }]
            tempnum = 0;
            Temp.forEach(element => {
                element.Number = tempnum;
                tempnum++;
            });
            this.Legend = Temp;
            this.data_show = Temp;

            Temp2 = this.Weapons;
            Temp3 = [];
            tempnum = 0;
            Temp2.forEach(element => {
                let data_point = { "Weapon": element, "num": tempnum, "shown": false };
                Temp3.push(data_point);
                tempnum++;
            });
            this.ShownWeapons = Temp3;

        },
        WeaponChange(input) {
            this.ShownWeapons.forEach(el => {
                if (el.Weapon == input) {
                    if (el.shown) {
                        el.shown = false;
                    }
                    else {
                        el.shown = true;
                    }
                }
            });
            let temp = [];
            for (let j = 0; j < this.ShownWeapons.length; j++) {
                if (this.ShownWeapons[j].shown) {
                    temp.push(this.ShownWeapons[j].num);
                }
            }
            temp2 = this.Legend.filter(el => temp.includes(el.Weapon1));
            temp3 = this.Legend.filter(el => temp.includes(el.Weapon2));
            temp2 = temp2.concat(temp3);

            this.data_show = temp2;
        },
        WeaponChangeAll() {
            this.ShownWeapons.forEach(x => { x.shown = false });
            this.data_show = this.Legend;
        },
        Randomize() {
            $(".sele").removeClass("sele");
            this.SELECTED = this.data_show[Math.floor(Math.random() * this.data_show.length)].Name;
            $("[id='" + this.SELECTED + "']").addClass("sele");
        },
        RandomizeRemove() {
            $(".sele").removeClass("sele");
            this.SELECTED = this.data_show[Math.floor(Math.random() * this.data_show.length)].Name;
            this.data_show = this.data_show.filter(el => el.Name != this.SELECTED);
            $("[id='" + this.SELECTED + "']").addClass("sele");
        },
        RandomizeGuaranteed() {
            temp = this.SELECTED;
            while (temp == this.SELECTED) {
                $(".sele").removeClass("sele");
                this.SELECTED = this.data_show[Math.floor(Math.random() * this.data_show.length)].Name;
                $("[id='" + this.SELECTED + "']").addClass("sele");
            }
        },
        ClickRemove(name) {
            $(".sele").removeClass("sele");
            this.SELECTED = "";
            this.data_show = this.data_show.filter(el => el.Name != name);
        },
        ClickReinstate(name) {
            $(".sele").removeClass("sele");
            this.SELECTED = "";
            temp = this.Legend.filter(el => el.Name == name);
            this.data_show = this.data_show.concat(temp);
        },
        keyPressRouter(event) {
            switch (event.which) {
                case 49:
                    this.Randomize();
                    break;
                case 50:
                    this.RandomizeRemove();
                    break;
                case 51:
                    this.RandomizeGuaranteed();
                    break;
            }
        },


    },
    beforeMount() {
        this.Initialize()
        $(window).keydown(this.keyPressRouter);
    },
    mounted() {

    }
}).mount('#app')





