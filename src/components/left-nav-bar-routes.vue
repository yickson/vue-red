<script>
// Allows stubbing BaseLink in unit tests

export default {
  // Functional components are stateless, meaning they can't
  // have data, computed properties, etc and they have no
  // `this` context.
  functional: true,
  props: {
    routes: {
      type: Array,
      required: true,
    },
  },
  // Render functions are an alternative to templates
  render(h, { props, $style = {} }) {
    function getRouteTitle(route) {
      return typeof route.title === 'function' ? route.title() : route.title
    }

    // Functional components are the only components allowed
    // to return an array of children, rather than a single
    // root node.
    return props.routes.map(route => (
      <BaseLink
        tag="a"
        key={route.name}
        to={route}
        exact-active-class={$style.active}
      >
        {getRouteTitle(route)}
      </BaseLink>
    ))
  },
}
// <BaseIcon name={route.icon} />
</script>


<style lang="scss" module>
@import '@design';

.active a {
  text-decoration: none;
  cursor: default;
  background-color: #ff9302;
}
</style>
