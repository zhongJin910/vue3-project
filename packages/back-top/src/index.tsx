import { defineComponent } from "vue";
import { useOnRoll } from "@/hook/index";

export default defineComponent({
  setup() {
    const { isRoll, isTarget, backTopFun } = useOnRoll();
    return () => <div class="">top</div>;
  },
});
