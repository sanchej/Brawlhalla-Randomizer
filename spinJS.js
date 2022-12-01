function getImgUrl(wep) {
    var images = require.context('../assets/', false, /\.jpg$/);
    return images('./WeaponPic/' + wep + ".png");
}

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
            Temp = [];
            L1 = new Legends('Bodvar', 0, 1);
            Temp.push(L1);
            L2 = new Legends('Cassidy', 2, 0);
            Temp.push(L2);
            L3 = new Legends('Orion', 3, 4, 3);
            Temp.push(L3);
            L4 = new Legends('Lord Vraxx', 3, 2);
            Temp.push(L4);
            L5 = new Legends('Gnash', 4, 0);
            Temp.push(L5);
            L6 = new Legends('Queen Nai', 4, 5);
            Temp.push(L6);
            L7 = new Legends('Hattori', 4, 1);
            Temp.push(L7);
            L8 = new Legends('Sir Roland', 1, 3);
            Temp.push(L8);
            L9 = new Legends('Scarlet', 3, 0);
            Temp.push(L9);
            L10 = new Legends('Thatch', 1, 2);
            Temp.push(L10);
            L11 = new Legends('Ada', 4, 2);
            Temp.push(L11);
            L12 = new Legends('Sentinel', 0, 5);
            Temp.push(L12);
            L13 = new Legends('Lucien', 5, 2);
            Temp.push(L13);
            L14 = new Legends('Teros', 0, 6);
            Temp.push(L14);
            L15 = new Legends('Brynn', 4, 6);
            Temp.push(L15);
            L16 = new Legends('Asuri', 5, 1);
            Temp.push(L16);
            L17 = new Legends('Barazza', 1, 6);
            Temp.push(L17);
            L18 = new Legends('Ember', 7, 5);
            Temp.push(L18);
            L19 = new Legends('Azoth', 6, 7);
            Temp.push(L19);
            L20 = new Legends('Koji', 1, 7);
            Temp.push(L20);
            L21 = new Legends('Ulgrim', 6, 3);
            Temp.push(L21);
            L22 = new Legends('Diana', 2, 7);
            Temp.push(L22);
            L23 = new Legends('Jhala', 1, 6);
            Temp.push(L23);
            L24 = new Legends('Kor', 8, 0);
            Temp.push(L24);
            L25 = new Legends('Wu Shang', 4, 8);
            Temp.push(L25);
            L26 = new Legends('Val', 1, 8);
            Temp.push(L26);
            L27 = new Legends('Ragnir', 5, 6);
            Temp.push(L27);
            L28 = new Legends('Cross', 2, 8);
            Temp.push(L28);
            L29 = new Legends('Mirage', 4, 9);
            Temp.push(L29);
            L30 = new Legends('Nix', 2, 9);
            Temp.push(L30);
            L31 = new Legends('Mordex', 8, 9);
            Temp.push(L31);
            L32 = new Legends('Yumiko', 0, 7);
            Temp.push(L32);
            L33 = new Legends('Artemis', 3, 9);
            Temp.push(L33);
            L34 = new Legends('Caspian', 5, 8);
            Temp.push(L34);
            L35 = new Legends('Sidra', 1, 10);
            Temp.push(L35);
            L36 = new Legends('Xull', 6, 10);
            Temp.push(L36);
            L37 = new Legends('Kaya', 4, 7);
            Temp.push(L37);
            L38 = new Legends('Isaiah', 2, 10);
            Temp.push(L38);
            L39 = new Legends('Jiro', 1, 9);
            Temp.push(L39);
            L40 = new Legends('Lin Fei', 5, 10);
            Temp.push(L40);
            L41 = new Legends('Zariel', 7, 8);
            Temp.push(L41);
            L42 = new Legends('Rayman', 6, 8);
            Temp.push(L42);
            L43 = new Legends('Dusk', 4, 11);
            Temp.push(L43);
            L44 = new Legends('Fait', 9, 11);
            Temp.push(L44);
            L45 = new Legends('Thor', 0, 11);
            Temp.push(L45);
            L46 = new Legends('Petra', 8, 11);
            Temp.push(L46);
            L47 = new Legends('Vector', 7, 3);
            Temp.push(L47);
            L48 = new Legends('Volkov', 6, 9);
            Temp.push(L48);
            L49 = new Legends('Onyx', 8, 10);
            Temp.push(L49);
            L50 = new Legends('Jaeyun', 1, 12);
            Temp.push(L50);
            L51 = new Legends('Mako', 5, 12);
            Temp.push(L51);
            L52 = new Legends('Magyar', 0, 12);
            Temp.push(L52);
            L53 = new Legends('Reno', 2, 11);
            Temp.push(L53);
            L54 = new Legends('Munin', 7, 9);
            Temp.push(L54);
            L55 = new Legends('Arcadia', 4, 12);
            Temp.push(L55);
            L56 = new Legends('Ezio', 1, 11);
            Temp.push(L56);
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
            console.log(temp2);
            temp3 = this.Legend.filter(el => temp.includes(el.Weapon2));
            console.log(temp3);
            temp2 = temp2.concat(temp3);
            console.log(temp2);
            this.data_show = temp2;
        },
        WeaponChangeAll() {
            this.ShownWeapons.forEach(x => { x.shown = false });
            this.data_show = this.Legend;
        },
        Randomize() {
            $(".sele").removeClass("sele");
            this.SELECTED = this.data_show[Math.floor(Math.random() * this.data_show.length)].Name;
            $("#" + this.SELECTED).addClass("sele");
        },
        RandomizeRemove() {
            $(".sele").removeClass("sele");
            this.SELECTED = this.data_show[Math.floor(Math.random() * this.data_show.length)].Name;
            this.data_show = this.data_show.filter(el => el.Name != this.SELECTED);
            $("#" + this.SELECTED).addClass("sele");
        },
        RandomizeGuaranteed() {
            $(".sele").removeClass("sele");
            temp = this.SELECTED;
            while (temp == this.SELECTED) {
                this.SELECTED = this.data_show[Math.floor(Math.random() * this.data_show.length)].Name;
                $("#" + this.SELECTED).addClass("sele");
            }
        },
        ClickRemove(name) {
            $(".sele").removeClass("sele");
            this.SELECTED = "";
            this.data_show = this.data_show.filter(el => el.Name != name);
        },


    },
    beforeMount() {
        this.Initialize()
    },
    mounted() {

    }
}).mount('#app')





