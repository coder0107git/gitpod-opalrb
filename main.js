/* Generated by Opal 0.7.2 */
(function(Opal) {
  Opal.dynamic_require_severity = "error";
  var $a, $b, TMP_3, $c, TMP_4, self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $gvars = Opal.gvars, handle_click = nil;
  if ($gvars.document == null) $gvars.document = nil;

  Opal.add_stubs(['$append_to', '$DOM', '$info', '$red', '$span', '$div', '$[]', '$lambda', '$+', '$add_element', '$ready', '$on', '$to_proc']);
  self.$require("browser");
  self.$require("browser/http");
  $gvars.line = 1;
  Opal.Object.$$proto.$add_element = function() {
    var $a, $b, TMP_1, self = this;
    if ($gvars.document == null) $gvars.document = nil;

    return ($a = ($b = self).$DOM, $a.$$p = (TMP_1 = function(){var self = TMP_1.$$s || this, $a, $b, TMP_2;

    return ($a = ($b = self.$div()).$info, $a.$$p = (TMP_2 = function(){var self = TMP_2.$$s || this;
        if ($gvars.line == null) $gvars.line = nil;

      return self.$span().$red("added line: " + ($gvars.line))}, TMP_2.$$s = self, TMP_2), $a).call($b)}, TMP_1.$$s = self, TMP_1), $a).call($b).$append_to($gvars.document['$[]']("container"));
  };
  handle_click = ($a = ($b = self).$lambda, $a.$$p = (TMP_3 = function(){var self = TMP_3.$$s || this;
    if ($gvars.line == null) $gvars.line = nil;

  $gvars.line = $gvars.line['$+'](1);
    return self.$add_element();}, TMP_3.$$s = self, TMP_3), $a).call($b);
  return ($a = ($c = $gvars.document).$ready, $a.$$p = (TMP_4 = function(){var self = TMP_4.$$s || this, $a, $b;
    if ($gvars.document == null) $gvars.document = nil;

  self.$add_element();
    return ($a = ($b = $gvars.document['$[]']("container")).$on, $a.$$p = handle_click.$to_proc(), $a).call($b, "click");}, TMP_4.$$s = self, TMP_4), $a).call($c);
})(Opal);