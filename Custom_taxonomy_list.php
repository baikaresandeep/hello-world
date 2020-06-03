<?php

/**
 * list the taxonomy of custom post type with tree structure
 * @param  string  $taxonomy  name of taxonomy
 * @param  integer $parent    parent term_id of term
 * @return string             generate the list of taxonomy
 */
    function custom_taxonomy_walker( $taxonomy, $parent = 0 ){
        $terms = get_terms($taxonomy, array('parent' => $parent, 'hide_empty' => false, 'orderby'    => 'name'));
        //If there are terms, start displaying
        if(count($terms) > 0){
            //Displaying as a list
            $out = "<ul>";
            //Cycle though the terms
            foreach ($terms as $term)
            {
                //Secret sauce.  Function calls itself to display child elements, if any
                $out .="<li class='term term-" . $term->slug ."'>" . 
                            "<a href='javascript:void(0)' data-term_id='" . $term->term_id . "' data-tax='". $taxonomy ."'> " . 
                            $term->name .
                            "</a>".
                            custom_taxonomy_walker( $taxonomy, $term->term_id ) . 
                        "</li>"; 
            }
            $out .= "</ul>";    
            return $out;
        }
        return;
    }

    // Usage of this function in your theme or plugin
    echo  custom_taxonomy_walker( $taxonomy, $parent = 0 );